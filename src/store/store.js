import { configureStore } from "@reduxjs/toolkit";
import marketSlice from "./marketSlice";
import coinSlice from "./coinSlice";
import coinHistorySlice from "./coinHistorySlice";

const store = configureStore({
   reducer: {
      cryptoMarket: marketSlice,
      coins: coinSlice,
      history: coinHistorySlice,
   },
})

export default store;