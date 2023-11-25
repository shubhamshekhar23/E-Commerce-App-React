import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useUrlHook } from "./hooks/useUrlHook";

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
