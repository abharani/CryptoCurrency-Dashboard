import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { setGlobalCurrency } from "../store/global";
import { BsFillCaretDownFill } from 'react-icons/bs';

const GlobalCurrency = () => {
   const [currency, setCurrency] = useState('usd');
   const dispatch = useDispatch();
   const coins = ['usd', 'eur', 'inr'];

   const [displayeDropdown, setDisplayeDropdown] = useState(false);
   const [selectedCoin, setSelectedCoin] = useState('USD');

   const toggleDropdown = () => {
      setDisplayeDropdown(!displayeDropdown);
   };

   // const handleDropdown = (event) => {
   //    setCurrency(event.target.value);
   // }

   const handleCoinSelection = (name) => {
      setSelectedCoin(name);
      setDisplayeDropdown(false);
   };

   useEffect(() => {
      // Dispatch the `setGlobalCurrency` action whenever the `currency` state changes
      dispatch(setGlobalCurrency(selectedCoin));
   }, [dispatch, selectedCoin]);

   return (
      <div className="relative inline-block text-left shadow-md rounded-lg">
         <div>
            {/* Button to open/close the dropdown */}
            <button
               type="button"
               className="inline-flex gap-2 justify-between items-center w-fit px-4 py-3 font-medium text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/70"
               onClick={toggleDropdown}
            >
               {/* Display the selected coin or a default message */}
               {selectedCoin.toUpperCase() || "Select an option"}
               {/* Arrow icon to indicate dropdown state */}
               <BsFillCaretDownFill className={`h-3 w-3 transition-transform ${displayeDropdown ? "transform rotate-180" : ""}`} />
            </button>
         </div>

         {/* The dropdown content */}
         {displayeDropdown && (
            <div className="origin-bottom-right absolute right-0 top-full mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
               <div className="py-1 overflow-y-scroll scrollbar-hide ring-2 ring-gray-200 rounded-md" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  {/* Render each coin in the dropdown */}
                  {coins.map((coin, idx) => (
                     <div
                        key={idx}
                        className={`w-full py-1.5 text-center truncate border-b border-gray-300 
                        hover:bg-rose-200 cursor-pointer`}
                     >
                        {/* Checkbox for selecting the coin */}
                        <input
                           className="appearance-none h-full"
                           onChange={() => handleCoinSelection(coin)}
                           id={coin}
                           type="checkbox" />
                        {/* Label for the coin */}
                        <label className="w-full cursor-pointer pl-2 p-1" htmlFor={coin}>{coin.toUpperCase()}</label>
                     </div>
                  ))}
               </div>
            </div>
         )}
      </div>
   )
}

export default GlobalCurrency