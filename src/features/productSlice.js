import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  isLoading: false,
  error: null,
  items: []
}

export const fetchAllProducts = createAsyncThunk("fetchAllProducts",
  async (limit) => {
    const res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=0`)
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
        state.error = action.payload.message;
      })
  }
})


export default productSlice.reducer