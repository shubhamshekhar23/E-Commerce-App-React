import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useUrlHook } from "./hooks/useUrlHook";

export default function Category(props) {
  const { data } = props;
  const { category } = useSelector((state) => state.searchFilters);

  const { updateQueryParamInUrl } = useUrlHook();

  const handleCategoryChange = (value) => {
    if (value === category) updateQueryParamInUrl("category", "");
    else updateQueryParamInUrl("category", value);
  };

  return (
    <>
      {data.map((name) => (
        <button
          className={`filter-button ${name == category ? `active` : ``}`}
          key={name}
          onClick={() => handleCategoryChange(name)}
        >
          {name}
        </button>
      ))}
    </>
  );
}
