import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  isLoading: false,
  error: null,
  items: [],
  categories: [],
  brands: []
}

export const fetchAllProducts = createAsyncThunk("fetchAllProducts",
  async ({ productCount, pageNo }) => {
    const skip = parseInt(productCount) * (parseInt(pageNo) - 1)
    const res = await axios.get(`https://dummyjson.com/products?limit=${productCount}&skip=${skip}`)
    return res.data;
  }
)

export const getAllCategories = createAsyncThunk("getAllCategories",
  async () => {
    const res = await axios.get(`https://dummyjson.com/products/categories`)
    return res.data;
  }
)
export const getAllBrands = createAsyncThunk("getAllBrands",
  async () => {
    const res = await axios.get(`https://dummyjson.com/products?limit=100&select=id,brand`)
    return res.data;
  }
)

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state, action) => {
        state.isLoading = true;
        state.error = null
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getAllCategories.pending, (state, action) => {
        state.isLoading = true;
        state.error = null
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getAllBrands.pending, (state, action) => {
        state.isLoading = true;
        state.error = null
      })
      .addCase(getAllBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.brands = action.payload
      })
      .addCase(getAllBrands.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
})


export default productSlice.reducer