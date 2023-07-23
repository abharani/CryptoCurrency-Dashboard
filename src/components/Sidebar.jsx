import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { getCryptos } from '../store/marketSlice';
import { useEffect } from 'react';
import Coin from './Coin';

const Sidebar = () => {
   const dispatch = useDispatch();
   const { currency } = useSelector(state => state.global);
   const { market: coins } = useSelector(state => state.cryptoMarket);
   const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`;

   useEffect(() => {
      // Dispatch the `getCryptos` action on component mount and whenever the `url` changes
      dispatch(getCryptos(url));
   }, [dispatch, url]);

   const percentageFormat = (num) => {
      return `${new Number(num).toFixed(2)}%`; // Format the given number as a percentage with two decimal places
   };

   const currencyFormat = (num) => {
      return ` $` + num; // Format the given number as a currency amount
   };

   return (
      <>
         {/* Iterate over each coin and render the Coin component */}
         {coins.map((coin, idx) => (
            <Coin key={idx} coin={coin} currency={currency} />
         ))}
      </>
   );
};

export default Sidebar;