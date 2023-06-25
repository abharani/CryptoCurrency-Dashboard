import axios from "axios";

axios.defaults.baseURL = "https://api.coingecko.com/api/v3";

export const getExchange = async (param) => {
   try {
      const data = await axios(param);
      return data
   } catch (error) {
      console.log(error)
      return null
   }
}

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