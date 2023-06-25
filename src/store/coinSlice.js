import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = [{
   id: 'bitcoin',
   name: 'Bitcoin'
}]

const coinSlice = createSlice({
   name: "Selected Coins",
   initialState,
   reducers: {
      add(state, action) {
         return action.payload
      }
   }
})

export const { add } = coinSlice.actions;
export default coinSlice.reducer;

