
const Duration = ({ updateDaysAndInterval }) => {

   // Handle click event to update days and interval
   const handleClick = (days, interval) => {
      updateDaysAndInterval(days, interval);
   }
   return (
      <div className="flex gap-1 md:gap-3 justify-center">
         {/* Button for 1 day duration */}
         <button
            value={1}
            onClick={() => handleClick(1, 'hourly')}
            className="text-xs md:text-base rounded-lg text-black bg-gray-100 px-4 py-2 focus:font-medium focus:bg-blue-100 focus:ring-2 focus:ring-blue-600 "
         >
            1D
         </button>
         {/* Button for 1 week duration */}
         <button
            value={7}
            onClick={() => handleClick(7, 'daily')}
            className="text-xs md:text-base rounded-lg text-black bg-gray-100 px-4 py-2 focus:font-medium focus:bg-blue-100 focus:ring-2 focus:ring-blue-600">
            1W
         </button>
         {/* Button for 1 month duration */}
         <button
            value={30}
            onClick={() => handleClick(30, 'daily')}
            className="text-xs md:text-base rounded-lg text-black bg-gray-100 px-4 py-2 focus:font-medium focus:bg-blue-100 focus:ring-2 focus:ring-blue-600">
            1M
         </button>
         {/* Button for 6 month duration */}
         <button
            value={180}
            onClick={() => handleClick(180, 'daily')}
            className="text-xs md:text-base rounded-lg text-black bg-gray-100 px-4 py-2 focus:font-medium focus:bg-blue-100 focus:ring-2 focus:ring-blue-600">
            6M
         </button>
         {/* Button for 1 year duration */}
         <button
            value={365}
            onClick={() => handleClick(365, 'daily')}
            className="text-xs md:text-base rounded-lg text-black bg-gray-100 px-4 py-2 focus:font-medium focus:bg-blue-100 focus:ring-2 focus:ring-blue-600">
            1Y
         </button>
      </div>
   )
}

export default Duration
