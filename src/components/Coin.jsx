import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import { currencyFormat, percentageFormat } from "../utils/utils";

// A component for displaying information about a coin
const Coin = ({ coin, currency }) => {
   return (
      <div className="flex justify-between items-center border-gray-200 border-b py-2.5">
         <div className="flex items-center gap-4">
            {/* Coin image */}
            <img className="w-7" src={coin.image} alt={coin.name} />
            <div className="flex-col text-base xl:text-lg font-semibold">
               <p>{coin.name}</p>
               <div className="text-slate-400 text-xs">
                  {/* Market Cap */}
                  <p>Mkt.Cap {new Intl.NumberFormat('en-IN', {
                     style: 'currency',
                     currency: currency,
                  }).format(coin.market_cap / 1000000)}</p>
               </div>
            </div>
         </div>
         {/* Display the price change percentage */}
         <div className={`flex w-20 justify-between items-center gap-2 ${coin.price_change_percentage_24h < 0
            ? "text-orange-500" : "text-green-600"}`}>
            {/* Display an arrow icon based on the price change */}
            {coin.price_change_percentage_24h < 0 ? (<BiDownArrow />) : (<BiUpArrow />)}
            {/* Format and display the percentage */}
            {percentageFormat(coin.price_change_percentage_24h)}
         </div>
      </div>
   );
};

export default Coin;
