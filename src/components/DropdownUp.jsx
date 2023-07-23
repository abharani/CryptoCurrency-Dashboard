import { useState } from "react";

// A component for displaying a dropdown to select a coin
const DropdownUp = ({ coins, handleSelect, type, location }) => {
   // State for controlling the display of the dropdown
   const [displayeDropdown, setDisplayeDropdown] = useState(false);
   // State for storing the selected coin
   const [selectedCoin, setSelectedCoin] = useState('Bitcoin');

   // Function to toggle the display of the dropdown
   const toggleDropdown = () => {
      setDisplayeDropdown(!displayeDropdown);
   };

   // Function to handle the selection of a coin from the dropdown
   const handleCoinSelection = (coinId, name) => {
      setSelectedCoin(name);
      handleSelect(coinId);
      setDisplayeDropdown(false);
   };

   return (
      <div className="relative inline-block text-left">
         <div>
            {/* Button to open/close the dropdown */}
            <button
               type="button"
               className="inline-flex justify-between items-center w-28 xl:w-36 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white ring-2 ring-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
               onClick={toggleDropdown}
            >
               {/* Display the selected coin or a default message */}
               {selectedCoin || "Select an option"}
               {/* Arrow icon to indicate dropdown state */}
               <svg
                  className={`ml-2.5 h-5 w-5 transition-transform ${displayeDropdown ? "transform rotate-180" : ""}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
               >
                  <path fillRule="evenodd" d="M10 14l6-6H4z" />
               </svg>
            </button>
         </div>

         {/* The dropdown content */}
         {displayeDropdown && (
            <div className="origin-bottom-right absolute right-0 bottom-full mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
               <div className="py-1 h-80 overflow-y-scroll scrollbar-hide ring-2 ring-gray-200 rounded-sm" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  {/* Render each coin in the dropdown */}
                  {coins.map((coin) => (
                     <div
                        key={coin.id}
                        className={`w-full py-1.5 text-center truncate border-b border-gray-300 
                        hover:bg-rose-200 cursor-pointer
                        ${coin.checked ? 'bg-rose-400' : 'bg-white'}
                        `}
                     >
                        {/* Checkbox for selecting the coin */}
                        <input
                           className="appearance-none h-full "
                           onChange={() => handleCoinSelection(type === 'sell' ? coin.id : coin.vs_currency, coin.name)}
                           checked={coins.checked}
                           id={coin.id}
                           type="checkbox" />
                        {/* Label for the coin */}
                        <label className="w-full cursor-pointer pl-2 p-1" htmlFor={coin.id}>{coin.name}</label>
                     </div>
                  ))}
               </div>
            </div>
         )}
      </div>
   );
};

export default DropdownUp;