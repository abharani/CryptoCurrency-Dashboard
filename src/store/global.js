import { createSlice } from '@reduxjs/toolkit';
const initialState = {
   currency: 'USD', // The default currency
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
   },
});

export const { setGlobalCurrency, setSelectedCoinsList } = globalSlice.actions; // Export the actions
export default globalSlice.reducer; // Export the reducer
