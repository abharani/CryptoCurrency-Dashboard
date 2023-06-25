// import { currencyFormat, percentageFormat } from "../utils";
// import {MdOutlineArrowDropUp,MdOutlineArrowDropDown} from 'react-icons/md'
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

export function currencyFormat(num) {
   return `  $` + num
}
export function percentageFormat(num) {
   return `${new Number(num).toFixed(2)}%`
}

const Coin = ({ coin }) => {
   return (
      <div className=" bg-white ">
         <div className="grid grid-cols-2 border-gray-200 border-b">
            <div className="flex items-center gap-2 ">
               <img className="w-5" src={coin.image} alt={coin.name} />
               <div className="flex-col text-lg">
                  <p>{coin.name}</p>
                  <div className="text-slate-400 text-xs mb-3">
                     <p>Mkt.Cap {currencyFormat(coin.market_cap)}</p>
                  </div>
               </div>
            </div>
            <span className={`flex pl-12 pr-4 items-center gap-2 ${coin.price_change_percentage_24h < 0
               ? "text-orange-500" : "text-green-600"}`}>
               {coin.price_change_percentage_24h < 0 ? (<BiDownArrow />) : (<BiUpArrow />)}
               {percentageFormat(coin.price_change_percentage_24h)}
            </span>
         </div>
      </div>
   );
};

export default Coin;
