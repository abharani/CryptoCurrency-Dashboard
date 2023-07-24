<<<<<<< HEAD
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import StatusCode from "../utils/StatusCode";

const initialState = {
   coinHistory: [],
   status: StatusCode.IDLE
}

const coinHistorySlice = createSlice({
   name: "Crypto History",
   initialState,
   extraReducers: (builder) => {
      builder
         .addCase(getCryptoHistory.pending, (state) => {
            state.status = StatusCode.LOADING;
         })
         .addCase(getCryptoHistory.fulfilled, (state, action) => {
            state.coinHistory = action.payload;
            state.status = StatusCode.IDLE;
         })
         .addCase(getCryptoHistory.rejected, (state) => {
            state.status = StatusCode.ERROR;
         })
   }
})

export const { fetchCryptos } = coinHistorySlice.actions;
export default coinHistorySlice.reducer;

export const getCryptoHistory = createAsyncThunk(
   'cryptoHistory/get',
   async ({ selectedCoins, days, interval }) => {
      const apiData = await Promise.all(
         selectedCoins.map(async (coin) => {
            const url = `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=usd&days=${days}&interval=${interval}`;

            try {
               const res = await axios(url);
               return res.data.prices;
            } catch (error) {
               return null;
            }
         })
      )
      const data = apiData;
      return data;
   }
)
=======
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import StatusCode from "../utils/StatusCode";

const initialState = {
   coinHistory: [], // Array to hold the coin history data
   status: StatusCode.IDLE, // The initial status of the coin history slice
};

const coinHistorySlice = createSlice({
   name: "Crypto History",
   initialState,
   extraReducers: (builder) => {
      // Handle the pending action when fetching coin history
      builder.addCase(getCryptoHistory.pending, (state) => {
         state.status = StatusCode.LOADING;
      });

      // Handle the fulfilled action when fetching coin history
      builder.addCase(getCryptoHistory.fulfilled, (state, action) => {
         state.coinHistory = action.payload; // Update the coin history data with the fetched data
         state.status = StatusCode.IDLE; // Set the status to idle
      });

      // Handle the rejected action when fetching coin history
      builder.addCase(getCryptoHistory.rejected, (state) => {
         state.status = StatusCode.ERROR; // Set the status to error
      });
   },
});

export const { fetchCryptos } = coinHistorySlice.actions; // Export the fetchCryptos action
export default coinHistorySlice.reducer; // Export the reducer

export const getCryptoHistory = createAsyncThunk(
   'cryptoHistory/get',
   async ({ selectedCoinsList, currency, days, interval }) => {
      const apiData = await Promise.all(
         selectedCoinsList.map(async (coin) => {
            const url = `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=${currency}&days=${days}&interval=${interval}`;
            try {
               const res = await axios(url); // Fetch coin history data for each selected coin
               return res.data.prices; // Extract the prices from the response data
            } catch (error) {
               return null;
            }
         })
      );
      const data = apiData; // Store the fetched coin history data
      return data; // Return the fetched data
   }
);
>>>>>>> master
