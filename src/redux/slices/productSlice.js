import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchProducts = createAsyncThunk("product/fetchProductsStatus", async(params) => {
   const { buttonIndex, selectSort, searchQuery, currentPage} = params;
   const { data } = await axios.get(`https://62bef7450bc9b1256164277e.mockapi.io/items?${searchQuery === "" ? `category=${buttonIndex}` : ""}&${selectSort > 0 ? 'sortBy=price' : 'sortBy=rating'}&order=desc&page=${currentPage}&limit=8${searchQuery ? `&search=${searchQuery}` : ""} `);
   return data
})

const initialState = {
   items: [],
   status: "Loading",
};

const productSlice = createSlice({
   name: "product",
   initialState,

   reducers: {
   },
   extraReducers: {
   [fetchProducts.pending]: (state) => {
      state.items = [];
      state.status = "Loading";
   },
   [fetchProducts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "Success";
   },
   [fetchProducts.pending]: (state) => {
      state.items = [];
      state.status = "Error";
   },
   },
});
// console.log(extraReducers);
export const { } = productSlice.actions;

export default productSlice.reducer;




