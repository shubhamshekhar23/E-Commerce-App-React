import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUrlHook } from "./hooks/useUrlHook";
import { useFetchProductHook } from "./hooks/useFetchProductHook";

function CategoryCard(props) {
  const { name, selectedCategory, handleCategoryChange } = props;

  return (
    <div key={name} className="category-card">
      <input
        type="radio"
        value={name}
        id={name}
        checked={selectedCategory === name}
        onChange={handleCategoryChange}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
}

export default function Category(props) {
  const { data } = props;
  const { category } = useSelector((state) => state.searchFilters);

  const { updateQueryParamInUrl } = useUrlHook();
  useFetchProductHook();

  const handleCategoryChange = (event) => {
    updateQueryParamInUrl("category", event.target.value);
  };

  return (
    <>
      {data.map((name) => (
        <CategoryCard
          key={name}
          name={name}
          selectedCategory={category}
          handleCategoryChange={handleCategoryChange}
        />
      ))}
    </>
  );
}
