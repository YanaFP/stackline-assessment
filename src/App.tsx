import React, { useEffect } from "react";
import "./App.css";

import data from "./mocks/stackline_frontend_assessment_data_2021.json";

import { useAppDispatch, useAppSelector } from "./store/hooks";
import {
  selectloading,
  setLoading,
  setProductData,
} from "./store/productSlice";
import Header from "./components/Header";
import ProductView from "./components/Product";
import Table from "./components/Table";

function App() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectloading);

  useEffect(() => {
    const fetchProductData = async () => {
      dispatch(setLoading(true));
      // Simulate rest call to get product data
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch(setProductData(data[0]));
      dispatch(setLoading(false));
    };

    fetchProductData();
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <div>
        {loading ? (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <ProductView />
            <Table />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
