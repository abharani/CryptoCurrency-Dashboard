import { useSelector } from "react-redux"
import StatusCode from "../utils/StatusCode";
import Coin from "./Coin";

const CurrencyTable = () => {
   const { market, status } = useSelector(state => state.cryptoMarket);

   if (status === StatusCode.LOADING) {
      return <div>Loading...</div>
   }

   if (status === StatusCode.ERROR) {
      return <div>Error</div>
   }

   return (
      <section className="shadow-md pl-4 h-760px rounded-md bg-white lg:h-[770px] xl:h-[783px] 2xl:h-[879px] overflow-y-scroll">
         <h3 className=" text-xl font-bold ">Cryptocurrency by market cap</h3>
         <br />
         {market.map((coin) => <Coin key={coin.id} coin={coin} />)}
      </section>
   )
}

export default CurrencyTable