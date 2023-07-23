
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { setGlobalCurrency } from "../store/global";

const GlobalCurrency = () => {
   const [currency, setCurrency] = useState('usd');
   const dispatch = useDispatch();

   const handleDropdown = (event) => {
      setCurrency(event.target.value);
   }

   useEffect(() => {
       // Dispatch the `setGlobalCurrency` action whenever the `currency` state changes
     dispatch(setGlobalCurrency(currency));
   }, [dispatch, currency]);
   return (
      <>
         {/* Render the currency selection dropdown */}
       <select className="shadow-md px-8 py-3 appearance-none border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/70" value={currency} onChange={handleDropdown}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
         </select>
      </>
   )
}

export default GlobalCurrency