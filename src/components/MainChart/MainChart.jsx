import { useState } from 'react';
import Duration from './Duration';
import CryptoDropdown from './CryptoDropdown';
import SelectChartType from './SelectChartType';

// Importing React Redux Hooks for state management
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCryptoHistory } from '../../store/coinHistorySlice';
import Container from '../ChartTypes/Container';

const MainChart = () => {
   // State variables
   const [days, setDays] = useState(1);
   const [interval, setInterval] = useState('hourly');
   const [type, setType] = useState("LineChart");

   // Redux hooks for getting data from the global state
   const dispatch = useDispatch();
   const { currency } = useSelector(state => state.global);
   const { selectedCoinsList } = useSelector(state => state.global);

   // Update the type of chart to render
   const updateChartToRender = (value) => {
      setType(value);
   };

   // Update the number of days and interval
   const updateDaysAndInterval = (days, interval) => {
      setDays(days);
      setInterval(interval);
   };

   // Fetch the crypto history data based on selected parameters
   useEffect(() => {
      try {
         dispatch(getCryptoHistory({ selectedCoinsList, currency, days }));
      } catch (error) {
         console.error('Error:', error);
      }
   }, [days, dispatch, selectedCoinsList, currency]);

   return (
      <div className='h-full flex flex-col justify-center'>
         <div className='flex flex-col sm:flex-row items-center justify-between w-[85%] max-w-full xl:ml-auto gap-5'>
            {/* Component for selecting duration */}
            <Duration updateDaysAndInterval={updateDaysAndInterval} />
            <div className='flex gap-5'>
               {/* Component for selecting crypto */}
               <CryptoDropdown />
               {/* Component for selecting chart type */}
               <SelectChartType updateChartToRender={updateChartToRender} />
            </div>
         </div>

         {/* Container component for rendering the chart */}
         <Container interval={interval} type={type} />
      </div>
   );
};

export default MainChart;
