import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as searchFilterService from "../../services/searchFilter.service";

export function useUrlHook() {
  const navigate = useNavigate();

  function updateQueryParamInUrl(param, value) {
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
