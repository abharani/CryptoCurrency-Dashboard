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
