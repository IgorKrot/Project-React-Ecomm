import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type SearchParamsTypes = {
   buttonIndex: number;
   selectSort: number;
   currentPage: number;
   value: string;
   searchQuery: string;
}


const initialState: SearchParamsTypes = {
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
   setButtonIndex: (state, action: PayloadAction<number>) => {
      state.buttonIndex = action.payload;
   },
   setSelectSort: (state, action: PayloadAction<number>) => {
      state.selectSort = action.payload;
   },
   setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
   },
   setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
   },
   setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
   },
   setFilters: (state, action: PayloadAction<SearchParamsTypes>) => {
      state.buttonIndex = Number(action.payload.buttonIndex);
      state.selectSort = Number(action.payload.selectSort);
      state.currentPage = Number(action.payload.currentPage);
   },
   },
})

export const { setButtonIndex, setSelectSort, setCurrentPage, setFilters, setValue, setSearchQuery } = categorySlice.actions;

export default categorySlice.reducer;