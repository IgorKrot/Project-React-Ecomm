import React from "react";
import { render, screen} from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import Productcard from "../components/Productcard"
import cart from "../redux/slices/cartSlice"
import filter from "../redux/slices/categorySlice"
import product from "../redux/slices/productSlice"
import {BrowserRouter} from 'react-router-dom'
import Home from "../pages/Home";



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

test("test get products to Home", async () => {
   await renderRedux(<Home />);
   const productrender = screen.findByTestId('testproduct')
   expect(productrender).toBeInTheDocument;
   });