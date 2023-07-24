import axios from "axios";

// This is an export statement for the currencyFormat function.
// The currencyFormat function takes a number as input and returns the same number.
export function currencyFormat(num) {
   return num;
}

// The percentageFormat function takes a number as input, converts it to a fixed decimal number with 2 decimal places, and appends a '%' sign.
export function percentageFormat(num) {
   return `${new Number(num).toFixed(2)}%`;
}

// Retrieves the historical market data for multiple coins 
export const multipleCoinsHistory = async (selectedCoins, days) => {
   const data = await Promise.all(
      selectedCoins.map(async (coin) => {
         const url = `/coins/${coin.id}/market_chart?vs_currency=usd&days=${days}`;

         try {
            const res = await axios(url);
            // console.log(res.data.prices);
            return res.data.prices;
         } catch (error) {
            return null;
         }
      })
   )
   return data;
}