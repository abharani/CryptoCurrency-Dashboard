# CryptoCurrency Dashboard

This is a web application that provides a comprehensive dashboard for tracking and analyzing various cryptocurrencies. It provides historical prices, real-time market values and trading volumes for different cryptocurrencies in the form of charts and tables. it is also integrated with a cryptocurrency exchange feature, which helps in updating your crypto assets.


## Demo

Insert gif or link to demo


## Installation

Install Cryptocurrency Dashboard with npm


```bash
   npm install 
   npm run dev
 
```
    
## Features

- Tailwind Design.
- responsive and user-friendly.
- Multiple currencies data visualization and comparison on the same graph.
- Duration buttons display historical prices up to one year.
-  Different types of charts can be selected by users.
- User can search the cryptocurrency required in the search bar. 
- Exchange feature allows users to sell or buy coins.
- Sidebar displays Cryptocurrencies according to market cap from API
- User can select the type of Currency but USD is the default base currency
- Error handling using react-hot-toast.

## API Reference

```https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en

```
```https://api.coingecko.com/api/v3/exchange_rates
```
```https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=${currency}&days=${days}&interval=${interval}
```


## Framework/dependencies

- ReactJs - https://reactjs.org/
- React-redux - https://react-redux.js.org/
- Redux-Toolkit - https://redux-toolkit.js.org/
- TailwindCSS - https://tailwindcss.com/
- Chart.js - https://www.chartjs.org/
- React-chartjs-2 - https://react-chartjs-2.js.org/
- Coingecko API - https://www.coingecko.com/en/api/documentation
- ReactIcon - https://react-icons.github.io/react-icons/
- React-Hot-Toast - https://react-hot-toast.com/

## Authors

- [Lavesh Kumar Sahu](https://www.github.com/Lavesh1208)
- [Abha Rani](https://www.github.com/abharani)

## Screenshots

[App Screenshot](https://drive.google.com/file/d/1AuAfq57UabSChS-841zdDtZ2qt0Wcfkc/view?usp=drive_link)

