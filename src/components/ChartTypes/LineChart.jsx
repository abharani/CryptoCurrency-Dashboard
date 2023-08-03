import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from "react";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Styles for the circular loader
const loaderStyle = {
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   height: "200px", // Set an appropriate height for the loader container
};

const spinnerStyle = {
   border: "5px solid #f3f3f3", /* Light grey */
   borderTop: "5px solid #3498db", /* Blue */
   borderRadius: "50%",
   width: "50px",
   height: "50px",
   animation: "spin 1s linear infinite",
};

const options = {
   responsive: true,
   plugins: {
      legend: {
         position: "top",
         labels: {
            color: "black",
            usePointStyle: false,
            paddingLeft: 36,
            pointStyleWidth: 18,
         }
      }
   },
          elements: {
      point: {
         radius: 0,
         maxPoints: 10,
      }
   }

}


const LineChart = ({ res }) => {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchData = () => {
         setTimeout(() => {
            setLoading(false);
         }, 2000); 
      };
      fetchData();
   }, []);
   if (!res && !loading) return null;
   return (
      <>
         {/* Show the circular loader while loading is true */}
         {loading && (
            <div style={loaderStyle}>
               <div style={spinnerStyle}></div>
            </div>
         )}

         {/* Render the line chart with the data once it is loaded */}
         {!loading && <Line  data={res} options={options} />}
      </>
   );
};

export default LineChart;
