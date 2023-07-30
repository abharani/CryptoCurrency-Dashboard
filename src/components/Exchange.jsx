import { useState, useEffect } from "react";
import { useGetExchangeQuery } from "../store/api";
import DropdownUp from "./DropdownUp";

const Exchange = () => {
   // State for input value, sell and buy currencies, exchange data, and result
   const [inputValue, setInputValue] = useState();
   const [sell, setSell] = useState({ coinId: 'btc', value: 1 });
   const [buy, setBuy] = useState({ coinId: 'btc', value: 1 });
   const [result, setResult] = useState();
   const [coins, setCoins] = useState()

   // Fetch exchange data using the "useGetExchangeQuery" hook
   const { data: response, isSuccess, refetch } = useGetExchangeQuery(`/exchange_rates`);

   // Event handler for selecting the "sell" currency
   const handleSellCurrency = (value) => {
      setResult(null);
      setSell(value);
   }

   // Event handler for selecting the "buy" currency
   const handleBuyCurrency = (value) => {
      setResult(null);
      setBuy(value);
   }

   // Event handler for changing the input value
   const handleExchangeValueChange = (e) => {
      setInputValue(e.target.value);
   }

   // Event handler for the exchange button click
   const handleExchangeButton = () => {
      // Calculate the exchanged value and format it into currency format
      const toBitcoin = 1 / sell.value * inputValue;
      const value = (toBitcoin * buy.value).toFixed(2);
      setResult(value);
      refetch();
   }

   // Update the exchange data when there is a successful response
   useEffect(() => {
      if (isSuccess && response) {
         const keyValuePairs = [];
         Object.entries(response.rates).forEach(([key, value]) => {
            keyValuePairs.push({ key, value });
         });
         setCoins(keyValuePairs);
      }
   }, [isSuccess, response]);

   return (
      <div className="flex flex-col gap-5 justify-between py-5 px-6 lg:px-4 xl:px-8 h-72 md:h-full rounded-md shadow-md">
         <p className="text-xl xl:text-2xl font-semibold">Exchange Coins</p>
         {/* Dropdown component to select sell currency */}<div className="w-full flex items-center">
            <div className="flex items-center gap-5">
               <p className="text-base xl:text-lg font-semibold text-orange-500">SELL</p>
               <DropdownUp location={'left-0 -top-10'} coins={coins} handleSelect={handleSellCurrency} type="sell" />
            </div>
            <div className="ml-4">
               <input
                  className="border w-28 xl:w-36 border-gray-300 py-2 text-center rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/70"
                  placeholder="0.00"
                  id="enterValue"
                  type="number"
                  step="1"
                  value={inputValue}
                  onChange={handleExchangeValueChange}
               />
            </div>
         </div>
         {/* Dropdown component to select buy currency */}
         <div className="w-full flex items-center">
            <div className="flex items-center gap-5">
               <p className="text-base xl:text-lg mr-0.5 text-green-600 font-semibold">BUY</p>
               <DropdownUp coins={coins} handleSelect={handleBuyCurrency} type="buy" />
            </div>
            {/* Display the result of the exchange */}
            <p className="text-[#4c9d8a] text-lg font-semibold pl-4 w-full">
               {result && result + ` ${buy.coinId.toUpperCase()}`}
            </p>
         </div>
         {/* Button to initiate the exchange */}
         <button
            className="bg-blue-600 max-w-fit rounded-md text-white border-blue-600 py-2 px-16 mx-auto"
            onClick={handleExchangeButton}
         >
            Exchange
         </button>
      </div>)
}

export default Exchange
