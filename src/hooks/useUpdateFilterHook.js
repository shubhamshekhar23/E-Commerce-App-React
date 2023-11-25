import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as searchFilterService from "../services/searchFilter.service";
import { useDispatch, useSelector } from "react-redux";
import { setSkip } from "../reducers/searchFilterReducer";

export function useUpdateFilterHook() {
  const { products } = useSelector((state) => state.products);
  const { skip } = useSelector((state) => state.searchFilters);

  const [scrollSKip, setScrollSkip] = useState(0);
  const observer = useRef(null);
  const targetRef = useRef(null);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get("category") || "";
  const searchParam = searchParams.get("search") || "";

  const LIMIT_ITEMS_FETCHED = 10;

  useEffect(() => {
    /* when category is achnged or sesarch query is input */
    setScrollSkip(0);
    const options = {
      limit: LIMIT_ITEMS_FETCHED,
      skip,
    };
    searchFilterService.updateSearchTerm(categoryParam, searchParam, options);
  }, [location]);

  useEffect(() => {
    // skip after initial setting of state
    if (scrollSKip == 0) return;
    const options = {
      limit: LIMIT_ITEMS_FETCHED,
      skip: scrollSKip,
    };
    searchFilterService.updateSearchTerm(categoryParam, searchParam, options);
  }, [scrollSKip]);

  /* using observer api */

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (products.length >= LIMIT_ITEMS_FETCHED) {
            setScrollSkip((scrollSKip) => scrollSKip + 10);
          }
        }
      },
      { threshold: 0.1 }
    );
    observer.current.observe(targetRef.current);
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [products]);

  return {
    targetRef,
  };
}
