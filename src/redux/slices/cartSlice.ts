import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getDataFromLS } from "../../utils/getDataFromLS"

const {items, totalCost} = getDataFromLS()

export type CartItem = {
   id: number;
   imageUrl: string;
   name: string;
   types: string;
   size: number;
   price: number;
   count: number;
}

interface CartSliceState {
   items: CartItem[];
   totalCost: number;
}

const initialState: CartSliceState = {
   items,
   totalCost,
};

const cartSlice = createSlice({
   name: "cart",
   initialState,

reducers: {
   addItem: (state, action: PayloadAction<CartItem>) => {
      const findItem = state.items.find((item) => item.id === action.payload.id);
      if (findItem) {findItem.count++;} else {state.items.push({...action.payload, count: 1,})};
      state.totalCost = state.items.reduce((sumPrice, currentPrice) => {return sumPrice + (currentPrice.price * currentPrice.count)},
      0);
   },
   removeItem: (state, action: PayloadAction<CartItem>) => {
      state.items = state.items.filter((items) => items.id !== action.payload.id);
      state.totalCost = state.totalCost - (action.payload.price * action.payload.count);  
   },
   removeAllItems: (state) => {
      state.items = [];
      state.totalCost = 0;
   },
   cartItemPlus: (state, action: PayloadAction<CartItem>) => {
      const findItem = state.items.find((items) => items.id === action.payload.id);
      if (findItem) {findItem.count++;
      state.totalCost = state.totalCost + findItem.price;}
   },
   cartItemMinus: (state, action: PayloadAction<CartItem>) => {
      const findItem = state.items.find((items) => items.id === action.payload.id);
      if (findItem) {
      if (findItem.count !== 0) {state.totalCost = state.totalCost - findItem.price;}
      if (findItem.count !== 0) {findItem.count--;}}
   },
},
})

export const { addItem, removeItem, removeAllItems, cartItemPlus, cartItemMinus } = cartSlice.actions;

export default cartSlice.reducer;



