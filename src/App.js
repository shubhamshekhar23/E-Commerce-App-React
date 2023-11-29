import Category from "./components/Category";
import Product from "./components/Product";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import * as categoryService from "./services/category.service";
import { useUpdateFilterHook } from "./hooks/useUpdateFilterHook";

function App() {
  const { products } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);

  const { targetRef } = useUpdateFilterHook();

  useEffect(() => {
    categoryService.fetchCategories();
  }, []);

  return (
    <div className="container">
      <div className="panel left-panel">
        <Category data={categories} />
      </div>
      <div className="vertical-divider" />
      <div className="panel right-panel">
        <Product data={products} />
        <div
          ref={targetRef}
          style={{
            height: "25px",
          }}
        />
      </div>
    </div>
  );
}

export default App;
