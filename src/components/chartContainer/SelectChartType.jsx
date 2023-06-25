import { useState } from "react";

const SelectChartType = ({ updateChartToRender }) => {

   const [displayeDropdown, setDisplayeDropdown] = useState(false);
   const [selected, setSelected] = useState();

   const [charts, setCharts] = useState([
      {
         type: 'Line',
         checked: false,
      },
      {
         type: 'Bar',
         checked: false,
      },
      {
         type: 'Horizontal',
         checked: false,
      }
   ]);

   const handleCoinSelection = (type) => {
      const updateCharts = charts.map((chart) => {
         if (chart.type === type) {
            return { ...chart, checked: !chart.checked };
         }
         return { ...chart, checked: false };
      });

      setCharts(updateCharts);
      setDisplayeDropdown(false);
      console.log('CALLED');
   };

   const selectChartType = (event) => {
      // setType(event.target.value);
      updateChartToRender(event.target.value);
   };

   return (
      <div className="relative self-center 2xl:ml-32 xl:ml-12 ">
         <div className='relative bg-black  rounded-lg  px-2 '>
            <button
               className='h-8 border-none outline-none text-white 2xl:px-4 text-center '
               onClick={() => {
                  setDisplayeDropdown(!displayeDropdown)
               }}
            >
               Chart Type
            </button>
            <div className='absolute '>
               {displayeDropdown &&
                  <div className='flex-col  border-2 border-black shadow-xl gap-2'>
                     {charts.map((chart) => (
                        <div
                           key={chart.type}
                           className='hover:bg-rose-300 px-2 bg-white cursor-pointer'
                        >
                           <input
                              className="appearance-none cursor-pointer "
                              onClick={() => handleCoinSelection(chart.type)}
                              checked={charts.checked}
                              id={chart.type}
                              type="checkbox" />
                           <label className="cursor-pointer  " htmlFor={chart.type}>{chart.type}</label>
                        </div>
                     ))}
                  </div>
               }
            </div>
         </div>
      </div>
   )
}

export default SelectChartType;