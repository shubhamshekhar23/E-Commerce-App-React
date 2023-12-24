import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSkip } from "../../reducers/search-filter/searchFilterReducer";
import { resetProducts } from "../../reducers/product/productThunk";

export function useUrlHook() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function updateQueryParamInUrl(param, value) {
    dispatch(resetProducts());
    dispatch(setSkip(0));

    const existingUrl = location.pathname + location.search;
    const url = new URL(existingUrl, window.location.origin);

    url.searchParams.set(param, value);
    const modifiedUrl = url.pathname + url.search;
    navigate(modifiedUrl);
  }

  return {
    updateQueryParamInUrl,
  };
}
