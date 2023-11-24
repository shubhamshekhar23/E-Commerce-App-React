import React, { useEffect, useState, useRef } from "react";
import * as searchFilterService from "../services/searchFilter.service";
import * as utilService from "../services/util.service";
import { useUrlHook } from "./hooks/useUrlHook";
import { useDispatch, useSelector } from "react-redux";
import { useDebounceHook } from "../hooks/useDebounceHook";

function Search() {
  const { searchTerm } = useSelector((state) => state.searchFilters);
  const [inputValue, setInputValue] = useState("");

  const { updateQueryParamInUrl } = useUrlHook();
  const { debounced } = useDebounceHook(updateQueryParamInUrl, 500);

  useEffect(() => {
    setInputValue(searchTerm);
  }, [searchTerm]);

  function handleChange(event) {
    const value = event.target.value;
    setInputValue(value);
    debounced("search", value);
  }

  return <input value={inputValue} onChange={(event) => handleChange(event)} />;
}

function Tile(props) {
  const { title, thumbnail } = props;
  return (
    <div className="product-card">
      <div>
        <img src={thumbnail} alt={title} width="190px" height="200px"></img>
      </div>

      <h6>{title}</h6>
    </div>
  );
}

export default function Product(props) {
  const { data } = props;
  return (
    <>
      <div className="search">
        <Search />
      </div>
      <div className="products">
        {data.map((product) => (
          <Tile {...product} key={product.id} />
        ))}
      </div>
    </>
  );
}
