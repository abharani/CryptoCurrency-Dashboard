import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { currencyFormat } from "../utils/utils";
import { useGetExchangeQuery } from "../store/api";
import DropdownUp from "./DropdownUp";


const Exchange = () => {
     // State for input value, sell and buy currencies, exchange data, and result
   const [inputValue, setInputValue] = useState();
   const [sell, setSell] = useState('bitcoin');
   const [buy, setBuy] = useState('btc');
   const [exchange, setExchange] = useState('');
   const [result, setResult] = useState();

   // Fetch exchange data using the "useGetExchangeQuery" hook
   const { data: response, isSuccess, isError, error } = useGetExchangeQuery(`/simple/price?ids=${sell}&vs_currencies=${buy}`)

    // Access the market data from the redux store
  const { market } = useSelector(state => state.cryptoMarket);
     // Define the available vs_currencies for selection
   const vs_currencies = [
      "btc",
      "eth",
      "ltc",
      "bch",
      "bnb",
      "eos",
      "xrp",
      "xlm",
      "link",
      "dot",
      "yfi",
      "usd",
      "aed",
      "ars",
      "aud",
      "bdt",
      "bhd",
      "bmd",
      "brl",
      "cad",
      "chf",
      "clp",
      "cny",
      "czk",
      "dkk",
      "eur",
      "gbp",
      "hkd",
      "huf",
      "idr",
      "ils",
      "inr",
      "jpy",
      "krw",
      "kwd",
      "lkr",
      "mmk",
      "mxn",
      "myr",
      "ngn",
      "nok",
      "nzd",
      "php",
      "pkr",
      "pln",
      "rub",
      "sar",
      "sek",
      "sgd",
      "thb",
      "try",
      "twd",
      "uah",
      "vef",
      "vnd",
      "zar",
      "xdr",
      "xag",
      "xau",
      "bits",
      "sats"
   ]

    // Create an array of objects containing coin details and vs_currency values
  const coins = market.map((coin, idx) => ({
      id: coin.id,
      name: coin.name,
      vs_currency: vs_currencies[idx],
   }))

    // Event handler for selecting the "sell" currency
   const handleSellCurrency = (value) => {
      console.log('Sell event', value);
      setSell(value);
      console.log(sell);
      // setExchange('')
   }

     // Event handler for selecting the "buy" currency
   const handleBuyCurrency = (value) => {
      console.log('Sell event', value);
      setBuy(value);
      console.log(buy);
      // setExchange('');
   }

    // Event handler for changing the input value
   const handleExchangeValueChange = (e) => {
      setInputValue(e.target.value);
   }

   
   // Event handler for the exchange button click
   const handleExchangeButton = () => {
        // Calculate the exchanged value and format it into currency format
      const value = currencyFormat(exchange && inputValue * exchange[sell][buy].toFixed(0));
      setResult(value);
   }

     // Update the exchange data when there is a successful response
   useEffect(() => {
      if (isSuccess && response) {
         setExchange(response)
      }
   }, [isSuccess, response]);

   return (<div className="flex flex-col gap-5 justify-between py-5 px-6 lg:px-4 xl:px-8 h-72 md:h-full rounded-md shadow-md">
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
         <p className="text-[#4c9d8a] text-lg font-semibold px-4 w-full">
            {result + `${buy}`}
         </p>
      </div>
      {/* Button to initiate the exchange */}
      <button
         className="bg-blue-600 max-w-fit rounded-md text-white border-blue-600 py-2 px-16 mx-auto"
         onClick={handleExchangeButton}
      >
         Exchange
      </button>
   </div>   )
}

export default Exchange
