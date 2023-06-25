import{currencyFormat} from "./Coin"
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import React, { useEffect, useState } from 'react'

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
    responsive: true,
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
    const [totalValue, setTotalValue] = useState("")
    const [data, setData] = useState({
      labels: [],
      datasets: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            const Url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum%2Cbitcoin%2Cbinancecoin%2Ctether%2C&order=market_cap_desc`;
            const label = [];
            const dataSet = [];
            await fetch(Url).then((data) => {
                const response = data.json()
                return response;
            }).then((response) => {
                for (const element of response) {
                    dataSet.push(element.market_cap).toFixed(0);
                    label.push(element.name)
                } 
                setData({
                    labels: label,
                    datasets: [
                        {
                            label: [],
                            data: dataSet,
                            backgroundColor: [ "#5ac8ae","#eae31f","#50a3f0", "#f98e8e" ],
                            borderColor: ["white"],
                            borderWidth: 0,
                            hoverOffset: 10,
                            hoverBorderwidth:4,
                            
                        },
                    ],
                });
                setTotalValue(dataSet.reduce((accumulator, currentValue) => accumulator + currentValue, 0).toFixed(0));
            }).catch((error) => {
                console.log(error);
            });
        };
        fetchData();
    }, 
   [])


    return (
        <div className=' shadow-md  bg-white rounded-md w-full mb-4  '>
            <div className=" text-xl  font-semibold  pl-4 ">
                Portfolio
                <span className="text-gray-600 text-sm pl-20 md:pl-5  lg:pl-24">Total Value </span>
                
                <span className='text-xs font-semibold text-gray-500 xl:pl-44 xl:pb-0'>
            
            {new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: 'usd',
            }).format(totalValue)} 
          </span> 
                
            </div>
            <div className="pl-6 h-64 w-64 ">
                <Pie data={data} options={options} />
            </div>
        </div>
    )
}