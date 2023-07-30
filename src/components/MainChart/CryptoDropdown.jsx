import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCoinsList } from "../../store/global";
import { useEffect } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";

const CryptoDropdown = () => {
   // State variables
   const [displayDropdown, setDisplayDropdown] = useState(false);
   const { allCoinsList } = useSelector(state => state.global);
   const [selectedCoins, setSelectedCoins] = useState(useSelector(state => state.global.selectedCoinsList));
   const [coins, setCoins] = useState();
   const dispatch = useDispatch();

   // Toggle dropdown display
   const toggleDropdown = () => {
      setDisplayDropdown(!displayDropdown);
   };

   // Handle coin selection in dropdown
   const handleCoinSelection = (coinId) => {
      const updatedCoins = coins.map((coin) => {
         if (coin.id === coinId) {
            return { ...coin, checked: !coin.checked };
         }
         return coin;
      });
      setCoins(updatedCoins);
      const selectedCoinsIds = updatedCoins
         .filter((coin) => coin.checked)
         .map((coin) => ({
            id: coin.id,
            name: coin.name,
         }));
      setSelectedCoins(selectedCoinsIds);
      dispatch(setSelectedCoinsList(selectedCoinsIds));
   };

   // Fetch list of coins from the market
   useEffect(() => {
      setCoins(allCoinsList.map((coin) => ({
         id: coin.id,
         name: coin.name,
      })));
   }, [allCoinsList]);

   return (
      <div className='relative inline-block text-left'>
         <div>
            {/* Dropdown button */}
            <button
               type="button"
               className="inline-flex justify-between items-center w-28 text-sm md:text-base md:w-44 px-2 md:px-4 py-2.5 font-medium text-gray-700 bg-white ring-2 ring-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 truncate"
               onClick={toggleDropdown}
            >
               {selectedCoins.name || "Cryptocurrency"}
               {/* Dropdown icon */}
               <BsFillCaretDownFill className={`h-3 w-3 transition-transform ${displayDropdown ? "transform rotate-180" : ""
                  }`} />
            </button>
         </div>

         <div className='absolute w-full left-0 top-10'>
            {/* Dropdown menu */}
            {displayDropdown &&
               <div className='flex-col gap-2 shadow-xl h-80 overflow-y-scroll mt-2'>
                  {coins.map((coin) => (
                     <div
                        onClick={() => handleCoinSelection(coin.id)}
                        key={coin.id}
                        className={`w-full text-center py-1 border-b border-gray-300 
                        hover:bg-rose-200 cursor-pointer
                        ${coin.checked ? 'bg-rose-400' : 'bg-white'}
                        `}
                     >
                        {coin.name}
                     </div>
                  ))}
               </div>
            }
         </div>
      </div>
   );
};

export default CryptoDropdown;