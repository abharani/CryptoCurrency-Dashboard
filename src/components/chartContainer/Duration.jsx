// import { useState } from "react";

const Duration = ({ updateDaysAndInterval }) => {
   // const [duration, setDuration] = useState({})

   const handleClick = (days, interval) => {
      updateDaysAndInterval(days, interval);
   }
   return (
      <div className="flex gap-0 sm:gap-2 sm:pl-4 md:pl-8 ">
         <button
            value={1}
            onClick={() => handleClick(1, 'hourly')}
            className="rounded-md text-white bg-black p-2  "
         >
            1D
         </button>
         <button
            value={7}
            onClick={() => handleClick(7, 'daily')}
            className="rounded-md text-white bg-black p-2 ">
            1W
         </button>
         <button
            value={30}
            onClick={() => handleClick(30, 'daily')}
            className="rounded-md text-white bg-black p-2 ">
            1M
         </button>
         <button
            value={180}
            onClick={() => handleClick(180, 'monthly')}
            className="rounded-md text-white bg-black p-2 ">
            6M
         </button>
         <button
            value={365}
            onClick={() => handleClick(365, 'monthly')}
            className="rounded-md text-white bg-black p-2 ">
            1Y
         </button>
      </div>
   )
}

export default Duration