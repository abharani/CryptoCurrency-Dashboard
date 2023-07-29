import { useDispatch, useSelector } from 'react-redux';
// import { getCryptos } from '../store/marketSlice';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import Coin from './Coin';
import { useGetSidebarQuery } from '../store/api';
import { setAllCoinsList } from '../store/global';

const Sidebar = () => {
   const dispatch = useDispatch();
   const { currency } = useSelector(state => state.global);
   const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`;
   const { data: coins, isSuccess, isError, error } = useGetSidebarQuery(url);

   useEffect(() => {
      if (coins && isSuccess) {
         // Dispatch the `getCryptos` action on component mount and whenever the `url` changes
         dispatch(setAllCoinsList(coins));
      } else if (isError) {
         toast.error('Error fetching Data Try Again later');
         console.log(error);
      }
   }, [dispatch, coins, isSuccess, isError, error]);

   return (
      <>
         {/* Iterate over each coin and render the Coin component */}
         {coins && coins.map((coin, idx) => (
            <Coin key={idx} coin={coin} currency={currency} />
         ))}
      </>
   );
};

export default Sidebar;
