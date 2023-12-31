import Category from "./components/Category";
import Product from "./components/Product";
import React, { useEffect } from "react";
import { useUpdateFilterHook } from "./hooks/useUpdateFilterHook";
import { fetchCategoriesThunk } from "./store/category/thunks/categoryThunk/categoryThunk";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { products } = useSelector((state: any) => state.products);
  const { categories } = useSelector((state: any) => state.categories);

  const { targetRef } = useUpdateFilterHook();
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesThunk());
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

