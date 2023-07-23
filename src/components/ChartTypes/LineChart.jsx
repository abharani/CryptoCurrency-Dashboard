
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
// import { Line } from 'react-chartjs-2';
// import { useSelector } from "react-redux"
// import { useEffect, useState } from "react";
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
// // Options for the chart
// const options = {
//    responsive: true,
//    plugins: {
//       legend: {
//          position: "top",
//          labels: {
//             color: "black",
//             paddingLeft: 36,
//             pointStyleWidth: 18,
//             usePointStyle: true,
//          }
//       }
//    }
// };

// const LineChart = ({ res }) => {
//    return (
//       <>
//          {/* Render the line chart with the data */}
//          {res && <Line className='' data={res} />}
//       </>
//    );
// };

// export default LineChart;

// import React, { useEffect, useState } from "react";
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
// import { Line } from 'react-chartjs-2';
// import { useSelector } from "react-redux";

// // Register chart elements and options
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// // Options for the chart
// const options = {
//    responsive: true,
//    plugins: {
//       legend: {
//          position: "top",
//          labels: {
//             color: "black",
//             paddingLeft: 36,
//             pointStyleWidth: 18,
//             usePointStyle: false,
//          }
//       }
//    }
// };

// const LineChart = ({ res }) => {
//    const [isLoading, setIsLoading] = useState(true); // State to manage loading

//    // Simulate API call delay using useEffect
//    useEffect(() => {
//       const delay = setTimeout(() => {
//          setIsLoading(false); // Simulate API call completion
//       }, 2000); // Simulate a 2-second API call delay (you can replace this with your actual API call)

//       return () => clearTimeout(delay); // Cleanup the timeout on component unmount
//    }, []);

//    return (
//       <>
//          {isLoading ? ( // Show loader if API call is in progress
//             <div
//                style={{
//                   position: "fixed",
//                   top: "50%",
//                   left: "50%",
//                   transform: "translate(-50%, -50%)",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   backgroundColor: "rgba(0, 0, 0, 0.5)",
//                   width: "100%",
//                   height: "100%",
//                   zIndex: 9999,
//                }}
//             >
//                <div
//                   style={{
//                      border: "4px solid #f3f3f3",
//                      borderRadius: "50%",
//                      borderTop: "4px solid #3498db",
//                      width: "40px",
//                      height: "40px",
//                      animation: "spin 1s linear infinite",
//                   }}
//                />
//             </div>
//          ) : (
//             // Render the line chart with the data once loading is complete
//             res && <Line className='' data={res} options={options} />
//          )}
//       </>
//    );
// };

// export default LineChart;

// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
// import { Line } from 'react-chartjs-2';
// import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// // Options for the chart
// const options = {
//    responsive: true,
//    plugins: {
//       legend: {
//          position: "right",
//          labels: {
//             color: "black",
//             paddingLeft: 36,
//             pointStyleWidth: 18,
//             usePointStyle: true,
//          }
//       }
//    }
// };

// const LineChart = ({ res }) => {
//    // State to manage loading
//    const [loading, setLoading] = useState(true);

//    useEffect(() => {
//       // Simulate an asynchronous data fetching process
//       setTimeout(() => {
//          setLoading(false); // Once the data is loaded, set loading to false
//       }, 2000); // Replace 2000 with your actual data fetching code

//       // Clean up the effect to avoid memory leaks
//       return () => clearTimeout();
//    }, []);

//    return (
//       <>
//          {/* Show the loader while loading is true */}
//          {loading ? <div>Loading...</div> : null}

//          {/* Render the line chart with the data once it is loaded */}
//          {res && !loading && <Line className='' data={res} options={options} />}
//       </>
//    );
// };

// export default LineChart;


import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useSelector } from "react-redux";
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
      }}}


const LineChart = ({ res }) => {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchData = () => {
         setTimeout(() => {
            setLoading(false);
         }, 2000); // Replace 2000 with your actual data fetching code
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
         {!loading && <Line className='' data={res} options={options} />}
      </>
   );
};

export default LineChart;
