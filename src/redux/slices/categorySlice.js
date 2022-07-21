import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   buttonIndex: 0,
   selectSort: 0,
   currentPage: 1,
   value: "",
   searchQuery: "",
};

const categorySlice = createSlice({
   name: "filters",
   initialState,

   reducers: {
   setButtonIndex: (state, action) => {
      state.buttonIndex = action.payload;
   },
   setSelectSort: (state, action) => {
      state.selectSort = action.payload;
   },
   setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
   },
   setValue: (state, action) => {
      state.value = action.payload;
   },
   setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
   },
   setFilters: (state, action) => {
      state.buttonIndex = Number(action.payload.buttonIndex);
      state.selectSort = Number(action.payload.selectSort);
      state.currentPage = Number(action.payload.currentPage);
   },
   },
})

export const { setButtonIndex, setSelectSort, setCurrentPage, setFilters, setValue, setSearchQuery } = categorySlice.actions;

export default categorySlice.reducer;