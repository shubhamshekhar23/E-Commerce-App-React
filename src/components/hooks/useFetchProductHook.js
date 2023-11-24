import { useState, useEffect, useRef } from "react";
import * as productService from "../../services/product.service";
import { useDispatch, useSelector } from "react-redux";

/* TODO: its obsolete now, remove it */
export function useFetchProductHook() {
  const { category } = useSelector((state) => state.searchFilters);

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    // if (category) {
    //   productService.fetchProductsOfCategory(category);
    // } else {
    //   productService.fetchAllProducts();
    // }
  }, [category]);
}
