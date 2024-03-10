import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface Product {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews: {
    customer: string;
    review: string;
    score: number;
  }[];
  retailer: string;
  details: string[];
  tags: string[];
  sales: {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
  }[];
}

export interface ProductState {
  data: Product | {};
  loading: boolean;
}

const initialState: ProductState = {
  data: {},
  loading: true,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductData: (state, action: PayloadAction<Product>) => {
      state.data = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const selectProductData = (state: RootState) => state.product.data;
export const selectloading = (state: RootState) => state.product.loading;

export const { setProductData, setLoading } = productSlice.actions;

export default productSlice.reducer;
