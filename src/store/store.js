import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./global";
import marketSlice from "./marketSlice";
import { api } from "./api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import coinHistorySlice from "./coinHistorySlice";

const store = configureStore({
   // Combine reducers from different slices
   reducer: {
      global: globalSlice,
      cryptoMarket: marketSlice,
      history: coinHistorySlice,
      [api.reducerPath]: api.reducer,
   },
   // Add additional middleware
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
});

// Set up listeners for async actions
setupListeners(store.dispatch);

// Export the configured store as the default export of this module
export default store;
