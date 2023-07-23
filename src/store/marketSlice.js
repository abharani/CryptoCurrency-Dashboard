import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import StatusCode from "../utils/StatusCode";

const initialState = {
   market: [], // The array to hold the crypto market data
   status: StatusCode.IDLE, // The initial status of the market slice
};

const marketSlice = createSlice({
   name: "Crypto Market",
   initialState,
   extraReducers: (builder) => {
      // Handle the pending action when fetching cryptos
      builder.addCase(getCryptos.pending, (state) => {
         state.status = StatusCode.LOADING;
      });

      // Handle the fulfilled action when fetching cryptos
      builder.addCase(getCryptos.fulfilled, (state, action) => {
         state.market = action.payload; // Update the market data with the fetched data
         state.status = StatusCode.IDLE; // Set the status to idle
      });

      // Handle the rejected action when fetching cryptos
      builder.addCase(getCryptos.rejected, (state) => {
         state.status = StatusCode.ERROR; // Set the status to error
      });
   },
});

export const { fetchCryptos } = marketSlice.actions; // Export the fetchCryptos action
export default marketSlice.reducer; // Export the reducer

export const getCryptos = createAsyncThunk(
   'cryptoMarket/get',
   async (url) => {
      const apiData = await axios.get(url); // Fetch data from the specified URL
      const data = apiData.data; // Extract the data from the response
      return data; // Return the fetched data
   }
);