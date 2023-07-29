import { createSlice } from '@reduxjs/toolkit';
const initialState = {
   currency: 'USD', // The default currency
   allCoinsList: [], // The array to hold the crypto market data
   selectedCoinsList: [
      { id: 'bitcoin', name: 'Bitcoin' }, // A default selected coin
   ],
};

export const globalSlice = createSlice({
   name: 'global',
   initialState,
   reducers: {
      setGlobalCurrency: (state, action) => {
         state.currency = action.payload; // Update the currency in the state
      },
      setSelectedCoinsList: (state, action) => {
         state.selectedCoinsList = action.payload; // Update the selected coins list in the state
      },
      setAllCoinsList: (state, action) => {
         state.allCoinsList = action.payload; // Update the all coins list in the state
      }
   },
});

export const { setGlobalCurrency, setSelectedCoinsList, setAllCoinsList } = globalSlice.actions; // Export the actions
export default globalSlice.reducer; // Export the reducer
