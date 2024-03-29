import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/categorySlice'
import cart from './slices/cartSlice'
import product from './slices/productSlice'
import { useDispatch } from 'react-redux'
import portal from './slices/portalSlice'
import auth from './slices/dataAuthSlice'

export const store = configureStore({
  reducer: {
   filter,
   cart,
   product,
   portal,
   auth,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 