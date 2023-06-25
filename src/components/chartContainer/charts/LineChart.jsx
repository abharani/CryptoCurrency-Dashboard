import { useSelector } from "react-redux"

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

import { formateData } from "../../../utils/chartData";
import { useEffect } from "react";
import { useState } from "react";
import StatusCode from "../../../utils/StatusCode";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ interval }) => {
   const [res, setRes] = useState(null);
   const coins = useSelector(state => state.coins);
   const { coinHistory, status } = useSelector(state => state.history);

   useEffect(() => {
      const fetchData = async () => {
         try {
            if (coinHistory.length > 0 && coins.length > 0 && coinHistory.length === coins.length) {
               const result = await formateData(coinHistory, coins, interval);
               setRes(result);
            }
         } catch (error) {
            console.error('Error:', error);
         }
      };

      fetchData();
   }, [coins, coinHistory, interval]);

   if (status === StatusCode.LOADING) {
      return <div>Loading...</div>
   }

   if (status === StatusCode.ERROR) {
      return <div>Error</div>
   }

   return (
      <>
         {res && <Line className="" data={res} />}
      </>
   )
}

export default LineChart