import { useSelector } from "react-redux";

import { useState } from "react";
import { useEffect } from "react";
import { getExchange } from "../../utils/utils";
import { currencyFormat } from "../Coin";

const Exchange = () => {

   const [inputValue, setInputValue] = useState();
   const [sellCurrency, setSellCurrency] = useState('bitcoin');
   const [buyCurrency, setBuyCurrency] = useState('btc');
   const [exchange, setExchange] = useState('');

   const { market } = useSelector(state => state.cryptoMarket);
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

   const coins = market.map((coin, idx) => ({
      id: coin.id,
      name: coin.name,
      vs_currency: vs_currencies[idx],
   }))

   const handleSellCurrency = (e) => {
      setSellCurrency(e.target.value);
      setExchange('')
   }

   const handleBuyCurrency = (e) => {
      setBuyCurrency(e.target.value);
      setExchange('');
   }

   const handleExchangeValueChange = (e) => {
      setInputValue(e.target.value);
   }

   const handleSubmit = async () => {
      console.log('handle');
      const res = await getExchange(`/simple/price?ids=${sellCurrency}&vs_currencies=${buyCurrency}`);
      setExchange(res.data);
      console.log(exchange);
   }

   return (
      <div className=" sm:ml-0 mb-4 shadow-md bg-white rounded-md w-full xl:ml-4   ">
         <div className="text-xl font-semibold  p-1 m-1 pb-8">
            Exchange Coins
         </div>      <div className="flex">
            <div className="flex flex-col md:ml-auto md:bg-re lg:ml-0 ">
               <div className="  ml-2 md:ml-0 mb-2 xl:ml-8 ">
                  <label className=" text-lg text-[#ec7825] ">
                     Sell
                  </label>
                  <select className="py-1 md:ml-4 md:mx-0 lg:ml-0 xl:w-24 mx-4 rounded-md border text-white text-center text-sm bg-black sm:ml-2 xl:ml-3">
                     {coins.map((coin) => (
                        <option key={coin.id} value={coin.id} style={{ backgroundColor: "#fff", transition: "background-color 0.3s" }} onMouseOver={(e) => e.target.style.backgroundColor = "#00FF00"} onMouseOut={(e) => e.target.style.backgroundColor = "#fff"}>
                           {coin.name}
                        </option>
                     ))}
                     <option value="usd">USD</option>
                     <option value="inr">INR</option>
                     <option value="eur">EURO</option>
                  </select>
                  {/* <select className="py-1 md:ml-4 md:mx-0 lg:ml-0 xl:w-24 mx-4 rounded-md border text-gray-700 text-center text-sm bg-blue-200 sm:ml-2 xl:ml-3">
                       {coins.map((coin) => (
                       <option key={coin.id} value={coin.id} className="bg-white hover:bg-green-500 hover:text-white">
                     {coin.name}
                   </option>
                      ))}
                      <option value="usd">USD</option>
                      <option value="inr">INR</option>
                     <option value="eur">EURO</option>
                     </select> */}
                  {/* <select className="py-1 md:ml-4 md:mx-0 lg:ml-0 xl:w-24 mx-4 rounded-md border text-gray-700 text-center text-sm bg-blue-200 sm:ml-2 xl:ml-3 " onChange={handleSellCurrency}>
                     {coins.map((coin) => (
                        <option key={coin.id} value={coin.id} className=" bg-white hover:text-red-500"style={{ "--tw-text-opacity": "1", ":hover": { backgroundColor: "#FCD34D" } }}>
                           {coin.name}
                        </option>
                     ))}
                     <option  value="usd">USD</option>
                     <option value="inr">INR</option>
                     <option value="eur">EURO</option>
                  </select> */}
               </div>

               <div className=" ml-2 mt-1 md:ml-0 xl:ml-8 ">
                  <label className=" text-lg text-[#4c9d8a]">
                     Buy
                  </label>

                  <select
                     className="  xl:w-24 py-1 md:ml-4 md:mx-0 border rounded-md lg:ml-0 text-white text-center text-sm mx-4  xl:ml-3 bg-black sm:ml-2  "
                     onChange={handleBuyCurrency}>

                     {coins.map((coin) => (
                        <option className=" hover:bg-red-200 bg-green-600" key={coin.id} value={coin.vs_currency}>
                           {coin.name}
                        </option>
                     ))}
                     <option value="usd">USD</option>
                     <option value="inr">INR</option>
                     <option value="eur">EURO</option>
                  </select>
               </div>
            </div>
            <div className="  flex flex-col  md:mx-auto">
               <label
                  className=" text-lg pl-6 pb-3 text-gray-600 xl:pl-0"
               >
                  Enter Value
               </label>
               <input
                  className="border  pl-6 w-32 text-center rounded-md md:pl-0 xl:pl-0 xl:w-28"
                  placeholder="Enter amount"
                  id="enterValue"
                  type="number"
                  value={inputValue}
                  onChange={handleExchangeValueChange}
               />

            </div>

         </div>
         <div className=" flex mt-7 pl-14 mb-2">
            <button
               className=" bg-blue-600  w-[40%]  rounded-md text-white border-blue-600  border-2"
               onClick={handleSubmit}
            >
               Exchange
            </button>
            <p className=" text-[#4c9d8a] pl-10 pt-0">
               {currencyFormat(exchange && inputValue * exchange[sellCurrency][buyCurrency].toFixed(0))}
            </p>
         </div>
      </div>
   )
}

export default Exchange
