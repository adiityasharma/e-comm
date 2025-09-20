import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  isLoading: false,
  error: null,
  items: []
}

export const fetchAllProducts = createAsyncThunk("fetchAllProducts",
  async ({ productCount, pageNo }) => {
    const skip = parseInt(productCount) * (parseInt(pageNo) - 1)
    const res = await axios.get(`https://dummyjson.com/products?limit=${productCount}&skip=${skip}`)
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
  }
})


export default productSlice.reducer