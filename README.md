# E-Commerce-React

## Working Details:

- Using https://dummyjson.com/docs to find JSON contract for fetching products and product categories.
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
