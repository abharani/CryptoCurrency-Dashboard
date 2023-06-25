import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from '../../store/coinSlice';

const CurrencyDropdown = () => {

   const [displayeDropdown, setDisplayeDropdown] = useState(false);

   const { market } = useSelector(state => state.cryptoMarket);
   const [selectedCoins, setSelectedCoins] = useState(useSelector(state => state.coins));

   const [coins, setCoins] = useState(market.map((coin) => ({
      id: coin.id,
      name: coin.name,
      checked: coin.id === 'bitcoin' ? true : false,
   })));

   const dispatch = useDispatch();

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
      dispatch(add(selectedCoinsIds));
   };

   return (
      <div className='relative bg-black rounded-lg xl:ml-8 2xl:ml-20 2xl:px-6 px-2  self-center'>
         <button
            className='h-8 border-none outline-none text-white text-center truncate'
            onClick={() => {
               setDisplayeDropdown(!displayeDropdown)
            }}
         >
           Cryptocurrency
         </button>
         <div className='absolute '>
            {displayeDropdown &&
               <div className='flex-col gap-0  border-2 border-black shadow-xl px-0 mx-0  h-80 overflow-y-scroll'>
                  {coins.map((coin) => (
                     <div
                        key={coin.id}
                        className={`w-auto mx-0 px-1 
                        hover:bg-rose-300  cursor-pointer
                        ${coin.checked ? 'bg-rose-500' : 'bg-white'}
                        `}
                     >
                        <input
                           className=" "
                           onChange={() => handleCoinSelection(coin.id)}
                           checked={coins.checked}
                           id={coin.id}
                           type="checkbox" />
                        <label className="cursor-pointer lg:pl-1 pl-2 w-auto" htmlFor={coin.id}>{coin.name}</label>
                     </div>
                  ))}
               </div>
            }
         </div>
      </div>
   )
}

export default CurrencyDropdown