import { configureStore } from '@reduxjs/toolkit'
import filter from '../redux/slices/categorySlice'
import cart from '../redux/slices/cartSlice'
import product from '../redux/slices/productSlice'

export const store = configureStore({
  reducer: {
   filter,
   cart,
   product,
  },
})