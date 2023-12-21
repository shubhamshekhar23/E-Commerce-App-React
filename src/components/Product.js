import React, { useEffect, useState, useRef } from "react";
import { useUrlHook } from "./hooks/useUrlHook";
import { useSelector } from "react-redux";
import { useDebounceHook } from "../hooks/useDebounceHook";

const Search = () => {
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

  return (
    <input
      placeholder="Search Products..."
      value={inputValue}
      onChange={(event) => handleChange(event)}
    />
  );
};

const Tile = (props) => {
  const { title, thumbnail } = props;
  return (
    <div className="product-card">
      <div>
        <img src={thumbnail} alt={title} width="190px" height="200px"></img>
      </div>

      <h6>{title}</h6>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = product;

  function handleAddToCart(params) {}

  return (
    <div className="product-card-v2">
      <img
        src={thumbnail}
        alt={`${title} Thumbnail`}
        className="product-image"
      />
      <div className="product-info">
        <div className="product-title">{title}</div>
        <div className="product-description">{description}</div>
        <div className="product-price">${price.toFixed(2)}</div>
        <div className="product-discount">
          Discount: {discountPercentage.toFixed(2)}%
        </div>
        <div className="product-rating">Rating: {rating}</div>
        <div className="product-stock">In Stock: {stock}</div>
        <div className="product-brand">Brand: {brand}</div>
        <div className="product-category">Category: {category}</div>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default function Product(props) {
  const { data } = props;

  const isDataPresent = data && data.length !== 0;
  return (
    <>
      <div className="search">
        <h4>Buyzon</h4>
        <Search />
      </div>

      <div className="products">
        {isDataPresent &&
          data.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        {!isDataPresent && <p>No products to show...</p>}
      </div>
    </>
  );
}
