import { useSelector } from "react-redux";
import { formateData } from "../../utils/chartData";
import { useEffect, useState } from "react";
import VerticalBar from './VerticalBar';
import LineChart from './LineChart';
import HorizontalBar from "./HorizontalBar";

// Chart components mapping
const chartToRender = {
   VerticalBar: VerticalBar,
   LineChart: LineChart,
   HorizontalBar: HorizontalBar
};

const Container = ({ interval, type }) => {
   // State variables
   const [res, setRes] = useState(null);

   // Get selected coins list from global state
   const coins = useSelector(state => state.global.selectedCoinsList);

   // Get coin history and status from history state
   const { coinHistory, status } = useSelector(state => state.history);

   // Get the relevant chart component based on the 'type' prop
   const ChartComponent = chartToRender[type];

   useEffect(() => {
      const fetchData = async () => {
         try {
            // Check if coin history and selected coins list are available
            if (coinHistory.length > 0 && coins.length > 0 && coinHistory.length === coins.length) {
               // Format data and set the result
               const result = await formateData(coinHistory, coins, interval);
               setRes(result);
            }
         } catch (error) {
            console.error('Error:', error);
         }
      };

      fetchData();
   }, [coins, coinHistory, interval]);

   return (
      <>
         {/* Render the chart component with the data */}
         {res && <ChartComponent res={res} />}
      </>
   )
}

export default Container