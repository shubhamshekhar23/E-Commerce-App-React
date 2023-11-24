import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as searchFilterService from "../services/searchFilter.service";

export function useUpdateFilterHook() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get("category") || "";
  const searchParam = searchParams.get("search") || "";

  useEffect(() => {
    searchFilterService.updateSearchTerm(categoryParam, searchParam);
  }, [location]);
}
