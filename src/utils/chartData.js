// This is an array named "colors" that contains objects representing different color styles.
// Each object has "backgroundColor" and "borderColor" properties, defining the colors for the corresponding element.

const colors = [
   {
      backgroundColor: 'red',
      borderColor: '#800000', // Darker shade of red
   },
   {
      backgroundColor: 'green',
      borderColor: '#006400', // Darker shade of green
   },
   {
      backgroundColor: 'brown',
      borderColor: '#5D4037', // Darker shade of brown
   },
   {
      backgroundColor: 'darkblue',
      borderColor: '#00008B', // Darker shade of dark blue
   },
   {
      backgroundColor: 'purple',
      borderColor: '#800080', // Darker shade of purple
   },
   {
      backgroundColor: 'orange',
      borderColor: '#FF4500', // Darker shade of orange
   },
   {
      backgroundColor: 'teal',
      borderColor: '#008080', // Darker shade of teal
   },
   {
      backgroundColor: 'navy',
      borderColor: '#000080', // Darker shade of navy
   },
   {
      backgroundColor: 'maroon',
      borderColor: '#800000', // Darker shade of maroon
   },
   {
      backgroundColor: 'indigo',
      borderColor: '#4B0082', // Darker shade of indigo
   },
];
// This is a function named "unixToData" that converts a Unix time stamp to a formatted date string.
// It takes a Unix time stamp and an interval as input and returns a formatted date string.

const unixToData = (unixTime, interval) => {
   const date = new Date(unixTime);
   const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', year: 'numeric', month: 'numeric', day: 'numeric' };
   const i = interval === 'hourly' ? 1 : 0;
   const formattedTime = date.toLocaleString('en-US', options).split(',')[i];
   return formattedTime;
}


// This is a function named "createDataSet" that creates a data set object for a chart.
// It takes an item, an index, and a coin object as input and returns a data set object.
const createDataSet = (item, idx, coin) => {
   const label = coin.name;
   const prices = item.map((item) => item[1]);
   const backgroundColor = colors[idx].backgroundColor;
   const borderColor = colors[idx].borderColor;

   return {
      label,
      data: prices,
      backgroundColor,
      borderColor
   }
}


// This is an export statement for the "formateData" function.
// The "formateData" function takes a response, an array of coins, and an interval as input.
//It formats the response data to a format suitable for displaying in a chart.

export const formateData = (response, coins, interval) => {
   const dates = response[0].map((item) => unixToData(item[0], interval));

   const dataSets = response.map((item, idx) => createDataSet(item, idx, coins[idx]));

   const data = {
      labels: dates,
      datasets: dataSets
   }

   return data;
}

// This is an export statement for the "pieChartData" function.
// The "pieChartData" function takes raw data as input and generates formatted data for displaying a pie chart.

export const pieChartData = async (rawData) => {

   const label = [];
   const dataSets = [];

   for (const element of rawData) {
      dataSets.push(Number(element.market_cap.toFixed(0)));
      label.push(element.name);
   }

   const formatedData = {
      labels: label,
      datasets: [
         {
            label: [],
            data: dataSets,
            backgroundColor: ["#5ac8ae", "#eae31f", "#50a3f0", "#f98e8e"],
            borderColor: ["white"],
            borderWidth: 0,
            hoverOffset: 10,
            hoverBorderwidth: 4,
         },
      ],
   };
   
   const totalValue = (
      dataSets.reduce((accumulator, currentValue) => accumulator + currentValue, 0).toFixed(0)
   );

   return {
      formatedData,
      totalValue,
   }
}