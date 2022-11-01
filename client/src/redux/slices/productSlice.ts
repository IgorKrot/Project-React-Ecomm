import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';

type FetchParamType = {
   buttonIndex: number; 
   selectSort: number;  
   searchQuery: string; 
   currentPage: number; 
}

export type ProductItem = {
   id: number;
   imageUrl: string;
   name: string;
   types: string[];
   size: number[];
   price: number;
   count: number;
}

interface ProducSliceState {
   items: ProductItem[];
   status: "Error"|"Loading"|"Success";
}

export const fetchProducts = createAsyncThunk("product/fetchProductsStatus", async(params: FetchParamType) => {
   const { buttonIndex, selectSort, searchQuery, currentPage} = params;
   const { data } = await axios.get(`https://62bef7450bc9b1256164277e.mockapi.io/items?${searchQuery === "" ? `category=${buttonIndex}` : ""}&${selectSort > 0 ? 'sortBy=price' : 'sortBy=rating'}&order=desc&page=${currentPage}&limit=8${searchQuery ? `&search=${searchQuery}` : ""} `);
   return data as ProductItem[];
})

const initialState: ProducSliceState = {
   items: [],
   status: "Loading",
};

const productSlice = createSlice({
   name: "product",
   initialState,

   reducers: {
   },
   extraReducers: (builder) =>{
      builder.addCase(fetchProducts.pending, (state) => {
         state.items = [];
         state.status = "Loading";
      })
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
         state.items = action.payload;
         state.status = "Success";
      })
      builder.addCase(fetchProducts.rejected, (state) => {
         state.items = [];
         state.status = "Error";
      })
   }
});

export const { } = productSlice.actions;

export default productSlice.reducer;










 // {
   // [fetchProducts.pending]: (state) => {
   //    state.items = [];
   //    state.status = "Loading";
   // },
   // [fetchProducts.fulfilled]: (state, action: PayloadAction<ProductItem>) => {
   //    state.items = action.payload;
   //    state.status = "Success";
   // },
   // [fetchProducts.pending]: (state: ProducSliceState) => {
   //    state.items = [];
   //    state.status = "Error";
   // },
   // },




