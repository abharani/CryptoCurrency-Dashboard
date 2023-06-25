import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { getCryptos } from "../store/marketSlice";

const CurrencySelector = () => {
   const [currency, setCurrency] = useState('usd');
   const dispatch = useDispatch();

   const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`;

   const handleDropdown = (event) => {
      setCurrency(event.target.value);
   }

   // useEffect(() => {
   //    dispatch(getCryptos(url));
   // }, [dispatch, url]);

   return (
      <div className="max-w-fit flex border-2 shadow-md bg-white border-none rounded-lg px-6 text-md items-center  py-2" >
         <select className="border-none outline-none" value={currency} onChange={handleDropdown}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
         </select>
      </div>
   )
}

export default CurrencySelector
