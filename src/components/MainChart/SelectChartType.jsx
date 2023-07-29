import { useState } from "react";
import { BsFillCaretDownFill } from 'react-icons/bs';

// Array of chart types
const chartsArray = [{
   type: 'LineChart',
   checked: true,
},
{
   type: 'VerticalBar',
   checked: false,
},
{
   type: 'HorizontalBar',
   checked: false,
},
]

// Component for selecting chart type
const SelectChartType = ({ updateChartToRender }) => {
   const [displayeDropdown, setDisplayeDropdown] = useState(false);
   const [allCharts, setAllCharts] = useState(chartsArray);
   const [selectedChart, setSelectedChart] = useState('LineChart');

   // Toggle display of dropdown
   const toggleDropdown = () => {
      setDisplayeDropdown(!displayeDropdown);
   };

   // Handle chart selection
   const handleChartSelection = (type) => {
      const updatedCharts = allCharts.map((chart) => {
         if (chart.type === type) {
            return { ...chart, checked: !chart.checked };
         }
         return { ...chart, checked: false };
      });

      setAllCharts(updatedCharts);
      setSelectedChart(type);
      updateChartToRender(type);
      setDisplayeDropdown(false);
   };

   return (
      <div className='relative inline-block text-left'>
         <div>
            {/* Button for toggling dropdown */}
            <button
               type="button"
               className="inline-flex gap-1 justify-between items-center truncate overflow-x-scroll  w-fit text-sm md:text-base md:w-42 lg:w-45 px-2 md:px-4 py-2.5 font-medium text-gray-700 bg-white ring-2 ring-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
               onClick={toggleDropdown}
            >
               {/* Selected chart type */}
               {selectedChart || "Chart Type"}
               <BsFillCaretDownFill className={`h-3 w-3 transition-transform ${displayeDropdown ? "transform rotate-180" : ""
                  }`} />
            </button>
         </div>

         {/* Dropdown for selecting chart type */}
         {displayeDropdown &&
            <div className='origin-bottom-right absolute right-0 top-full mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
               <div className="h-full overflow-y-scroll scrollbar-hide ring-2 ring-gray-200 rounded-sm">
                  {allCharts.map((chart, idx) => (
                     <div
                        key={idx}
                        className={`w-full py-1.5 truncate border-b border-gray-300 
                        hover:bg-rose-200 cursor-pointer
                        ${chart.checked ? 'bg-rose-400' : 'bg-white'}
                        `}
                     >

                        {/* Checkbox for selecting chart */}
                        <input
                           className="appearance-none h-full"
                           onChange={() => handleChartSelection(chart.type)}
                           checked={chart.checked}
                           id={chart.type}
                           type="checkbox" />
                        <label className="w-full cursor-pointer pl-2 p-1" htmlFor={chart.type}>{chart.type}</label>
                     </div>
                  ))}
               </div>
            </div>
         }
      </div>
   )
}

export default SelectChartType