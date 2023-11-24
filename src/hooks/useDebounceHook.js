import { useState, useEffect, useRef } from "react";
import * as utilService from "../services/util.service";

export function useDebounceHook(func, delay) {
  const debounced = useRef(() => {});

  useEffect(() => {
    debounced.current = utilService.debounce(func, delay);
  }, []);

  return {
    debounced: debounced.current,
  };
}
