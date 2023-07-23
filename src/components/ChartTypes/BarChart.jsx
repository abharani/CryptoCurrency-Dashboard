import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// Register necessary plugins for ChartJS 
ChartJS.register(
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend
);

const BarChart = ({ res }) => {
   return (
      <>
         {/* Render the bar chart with the data */}
          {res && <Bar data={res} />}
      </>
   )
}

export default BarChart