import Category from "./components/Category";
import Product from "./components/Product";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import * as categoryService from "./services/category.service";
import { useUpdateFilterHook } from "./hooks/useUpdateFilterHook";

/**
 * Functional Requirement - 
1. Use https://dummyjson.com/docs to find JSON contract for fetching products and product categories.
2. Display all categories and make it selectable (single-select).
3. Show products for the selected category otherwise show products from all categories when no category selected.
    1. While fetching products use pagination parameter and keep size 10. 
    (If given combination has 50 products we need to show all products in the single page without UI pagination
    but instead of fetching all products at once we have to fetch the data in batches i.e first 1-10 then 11 - 20.. so on 
    and display whichever is fetched till now)
4. Implement Search for the products.
5. List down if there are any limitations of your app as comments in “App.js”.

Technical Requirement
1. Use only functional components.
2. Use Redux to store and retrieve product and category data.
3. Selected Category and search input should be stored as queryparams 
4. No need to update the UX.
 */

/* 


* APP Details - 

## Working Details:

- Upon app loading, it retrieves the initial set of 10 products and displays them. No default category is selected.
- When the user scrolls vertically, the app dynamically fetches products in batches of 10 until there are no more items to retrieve.
- If a user selects a category:
  - The URL is updated, incorporating the category name as a query parameter.
  - Products belonging to the selected category are fetched and displayed.
  - The app supports infinite scrolling for category-based product fetching as well.
  - Note: The current API limitation shows only 5 items per category, hindering comprehensive testing.
  - Upon refreshing the page, the category-based functionality operates seamlessly.
- In the case of user-initiated searches on input-field:
  - Products matching the search query are fetched.
  - A 500ms debounce is applied to the search input.
  - The URL is updated with the search input as query param to reflect the ongoing search.
  - If a category is selected while searching, the results are filtered based on both the category and search query.
  - the above filtering is done on the client side as searchQuery api doesn't support category filter.
  - Upon refreshing the page, the search functionality remains effective.

## Architecture and Folder Structure:

- The `src/hooks` directory contains custom hooks designed for use across multiple components.
- The `src/components/hooks` directory consists of hooks specific to individual components (not shared among multiple components).
- `action-services` are responsible for updating the store, and components utilize these services.
- The `services/api` directory houses services dedicated to making API calls using Axios.

## Limitations:

- Currently searchQuery API doesn't support to fetch the matching products in batches
- If searchquery and category both are present, then Currently the Category filtering is applied on the client side 
  by first calling the searchquery APi to get the products and then filtering based on category. API can be implemented to do
  this on server side.
- UX can be improved using a loader indicator and showing a message if no products matching the filter criteria.

*/

function App() {
  const { products } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);

  const { targetRef } = useUpdateFilterHook();

  useEffect(() => {
    categoryService.fetchCategories();
  }, []);

  return (
    <div className="container">
      <div className="panel left-panel">
        <Category data={categories} />
      </div>
      <div className="vertical-divider" />
      <div className="panel right-panel">
        <Product data={products} />
        <div
          ref={targetRef}
          style={{
            height: "25px",
          }}
        />
      </div>
    </div>
  );
}

export default App;
