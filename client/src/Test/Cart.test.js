import { render, screen} from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import Cart from "../components/Cart"
import cart from "../redux/slices/cartSlice"
import filter from "../redux/slices/categorySlice"
import product from "../redux/slices/productSlice"
import {BrowserRouter} from 'react-router-dom'



const renderRedux = (
   component,
   {initialState, store = configureStore( {reducer: {
      filter,
      cart,
      product,
   }}, 
   initialState)} = {}
) => {
   return {
      ...render(<Provider store={store}>
                  <BrowserRouter>{component}</BrowserRouter>
               </Provider>),
      store,
   };
};

test("test get products to Cart", async () => {
   await renderRedux(<Cart />);
   const productrender = screen.findByTestId('testproduct')
   expect(productrender).toBeInTheDocument;
   });