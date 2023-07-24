import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import React, { useEffect, useState } from 'react'
import { useGetPieChartDataQuery } from "../../store/api";
import { pieChartData } from "../../utils/chartData";
import { useSelector } from "react-redux";
ChartJS.register(ArcElement, Tooltip, Legend);
// Options for the chart
const options = {
   responsive: false,
   plugins: {
      legend: {
         position: "right",
         labels: {
            color: "black",
            paddingLeft: 36,
            pointStyleWidth: 18,
            usePointStyle: true,
         }
      }
   }
};

export default function PieChart() {
   const { currency } = useSelector((state) => state.global)

   // Fetch pie chart data from API
   const { data: response, isLoading, isSuccess, error, isError } = useGetPieChartDataQuery(`/coins/markets?vs_currency=${currency}&ids=ethereum%2Cbitcoin%2Cbinancecoin%2Ctether%2C&order=market_cap_desc`);
   const [totalValue, setTotalValue] = useState("");
   const [data, setData] = useState();

      // Format and set data on successful response
      useEffect(() => {
      if (isSuccess && response) {
         const fetchData = async () => {
            const { formatedData, totalValue } = await pieChartData(response);
            setData(formatedData);
            setTotalValue(totalValue);
         }
         fetchData();
      }
   }, [isSuccess, response]);
 // Show loading state while fetching data
   if (isLoading) {
      return (
         <div className='shadow-md bg-white rounded-md w-full mb-4'>
            <div className="text-xl font-semibold pl-4">
               Portfolio
               <span className="text-gray-600 text-sm pl-20 md:pl-5 lg:pl-24">Total Value </span>
               <span className="text-xs font-semibold text-gray-500 xl:pl-44 xl:pb-0">
                  Loading...
               </span>
            </div>
            <div className="pl-6 h-64 w-64 flex items-center justify-center">
               <div
                  className="loader"
                  style={{
                     position: 'relative',
                     width: '50px',
                     height: '50px'
                  }}
               >
                  <div
                     className="loader-circle"
                     style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '50px',
                        height: '50px',
                        border: '4px solid #f3f3f3',
                        borderTop: '4px solid #3498db',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                     }}
                  ></div>
                  <div
                     className="loader-text"
                     style={{
                        position: 'absolute',
                        top: '60px',
                        left: '-10px',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: '#333'
                     }}
                  >
                     Loading
                  </div>
               </div>
            </div>
         </div>
      );
   }

   return (
      <div className='shadow-md rounded-md w-full py-5 px-6 lg:px-4 xl:px-8 h-full space-y-4'>
         <div className="text-xl xl:text-2xl font-semibold flex justify-between">
            <p>Portfolio</p>
            <div>
               <span className="text-gray-600 text-base">Total Value </span>
               {/* Format and display total value */}
               <span className="text-base xl:text-lg font-semibold">
                  {new Intl.NumberFormat('en-IN', {
                     style: 'currency',
                     currency: `${currency}`,
                  }).format(totalValue / 1000000)}
               </span>
            </div>
         </div>
         <div className="w-full">
            {/* Render the pie chart */}
            {data && (
               <Pie className="mx-auto w-72 h-72" data={data} options={options} />
            )}
         </div>
      </div>
   );
}
