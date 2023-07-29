import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register necessary plugins for ChartJS 
ChartJS.register(
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend
);

export const options = {
   indexAxis: "y",
   elements: {
      bar: {
         borderWidth: 2,
      },
   },
   responsive: true,
   plugins: {
      legend: {
         position: "top",
      },
   },
};

const HorizontalBar = ({ res }) => {
   return (
      <>
         {/* Render the Bar chart with the data once it is loaded */}
         {res && <Bar data={res} options={options} />}
      </>
   )
};
export default HorizontalBar;
