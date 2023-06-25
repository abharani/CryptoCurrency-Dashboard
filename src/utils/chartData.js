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

const unixToData = (unixTime, interval) => {
   const date = new Date(unixTime);
   const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', year: 'numeric', month: 'numeric', day: 'numeric' };
   const i = interval === 'hourly' ? 1 : 0;
   const formattedTime = date.toLocaleString('en-US', options).split(',')[i];
   return formattedTime;
}

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

export const formateData = (response, coins, interval) => {
   const dates = response[0].map((item) => unixToData(item[0], interval));

   const dataSets = response.map((item, idx) => createDataSet(item, idx, coins[idx]));

   const data = {
      labels: dates,
      datasets: dataSets
   }

   return data;
}