import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CurrencyDropdown from "./CurrencyDropdown";
import SelectChartType from "./SelectChartType";
import Duration from "./Duration";

import BarChart from "./charts/BarChart";
import LineChart from "./charts/LineChart";
import PieChart from "./charts/PieChart";

import { getCryptoHistory } from "../../store/coinHistorySlice";

const chartToRender = {
   BarChart: BarChart,
   LineChart: LineChart,
   PieChart: PieChart,
};

const ChartContainer = () => {
   const [days, setDays] = useState(1);
   const [interval, setInterval] = useState('hourly')
   // const [response, setResponse] = useState(useSelector(state => state.coinHistory));
   const [type, setType] = useState("LineChart");

   const dispatch = useDispatch();

   const selectedCoins = useSelector(state => state.coins);

   const updateDaysAndInterval = (days, interval) => {
      setDays(days);
      setInterval(interval);
   }
   const updateChartToRender = (value) => {
      setType(value);
   }

   const ChartComponent = chartToRender[type];

   useEffect(() => {
      dispatch(getCryptoHistory({ selectedCoins, days, interval }));
   }, [days, interval, dispatch, selectedCoins]);

   return (
      <div className="">
         <div className="flex gap-1 max-w-fit py-4 sm:gap-8 md:max-gap-20  lg:gap-8  ">
            <Duration updateDaysAndInterval={updateDaysAndInterval} />
            <CurrencyDropdown />
            <SelectChartType updateChartToRender={updateChartToRender} />
           
         </div>
         <ChartComponent interval={interval} />
      </div>
   )
}

export default ChartContainer
