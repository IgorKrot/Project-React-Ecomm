import { createSlice } from '@reduxjs/toolkit'


const initialState = {
   isOpen: false,
   index: 0,
   scores: 0,
};

const portalSlice = createSlice({
   name: "portal",
   initialState,

   reducers: {
   setModalOpen: (state, action) => {
      state.isOpen = action.payload;
   },
   setIndex: (state, action) => {
      state.index = action.payload;
   },
   setScores: (state, action) => {
      state.scores = action.payload;
   },
   },
})

export const { setModalOpen, setIndex, setScores } = portalSlice.actions;

export default portalSlice.reducer;