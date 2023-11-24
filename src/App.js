import Category from "./components/Category";
import Product from "./components/Product";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import * as categoryService from "./services/category.service";
import * as productService from "./services/product.service";
import * as searchFilterService from "./services/searchFilter.service";
import { useNavigate, useLocation } from "react-router-dom";
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

function App() {
  const { products } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);

  useUpdateFilterHook();

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
      </div>
    </div>
  );
}

export default App;
