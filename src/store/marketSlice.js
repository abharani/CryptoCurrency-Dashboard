<<<<<<< HEAD
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import StatusCode from "../utils/StatusCode";

const initialState = {
   market: [
      {
         id: 'bitcoin',
         symbol: 'btc',
         name: 'Bitcoin',
         image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
         current_price: 25866,
         market_cap: 501959187464,
         market_cap_rank: 1,
         fully_diluted_valuation: 543359815905,
         total_volume: 9048280579,
         high_24h: 26164,
         low_24h: 25681,
         price_change_24h: 79.38,
         price_change_percentage_24h: 0.30782,
         market_cap_change_24h: 1343687257,
         market_cap_change_percentage_24h: 0.26841,
         circulating_supply: 19399931,
         total_supply: 21000000,
         max_supply: 21000000,
         ath: 69045,
         ath_change_percentage: -62.63466,
         ath_date: '2021-11-10T14:24:11.849Z',
         atl: 67.81,
         atl_change_percentage: 37946.29639,
         atl_date: '2013-07-06T00:00:00.000Z',
         roi: null,
         last_updated: '2023-06-12T06:39:54.739Z'
      },
      {
         id: 'ethereum',
         symbol: 'eth',
         name: 'Ethereum',
         image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
         current_price: 1744.16,
         market_cap: 209784122834,
         market_cap_rank: 2,
         fully_diluted_valuation: 209784122834,
         total_volume: 5626537090,
         high_24h: 1773.05,
         low_24h: 1723.49,
         price_change_24h: -13.273361087591638,
         price_change_percentage_24h: -0.75527,
         market_cap_change_24h: -1696400672.4752197,
         market_cap_change_percentage_24h: -0.80215,
         circulating_supply: 120226893.330775,
         total_supply: 120226893.330775,
         max_supply: null,
         ath: 4878.26,
         ath_change_percentage: -64.35281,
         ath_date: '2021-11-10T14:24:19.604Z',
         atl: 0.432979,
         atl_change_percentage: 401527.587,
         atl_date: '2015-10-20T00:00:00.000Z',
         roi: {
            times: 89.13719129939004,
            currency: 'btc',
            percentage: 8913.719129939005
         },
         last_updated: '2023-06-12T06:39:56.520Z'
      },
      {
         id: 'tether',
         symbol: 'usdt',
         name: 'Tether',
         image: 'https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663',
         current_price: 1,
         market_cap: 83405338153,
         market_cap_rank: 3,
         fully_diluted_valuation: 83405338153,
         total_volume: 16825356481,
         high_24h: 1.005,
         low_24h: 0.996988,
         price_change_24h: -0.000904256075857868,
         price_change_percentage_24h: -0.09034,
         market_cap_change_24h: -27054793.75706482,
         market_cap_change_percentage_24h: -0.03243,
         circulating_supply: 83366513300.21,
         total_supply: 83366513300.21,
         max_supply: null,
         ath: 1.32,
         ath_change_percentage: -24.41171,
         ath_date: '2018-07-24T00:00:00.000Z',
         atl: 0.572521,
         atl_change_percentage: 74.68444,
         atl_date: '2015-03-02T00:00:00.000Z',
         roi: null,
         last_updated: '2023-06-12T06:40:00.319Z'
      },
      {
         id: 'binancecoin',
         symbol: 'bnb',
         name: 'BNB',
         image: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850',
         current_price: 225.55,
         market_cap: 35167266180,
         market_cap_rank: 4,
         fully_diluted_valuation: 45128128009,
         total_volume: 944134650,
         high_24h: 238.2,
         low_24h: 224.26,
         price_change_24h: -11.663233477809797,
         price_change_percentage_24h: -4.9168,
         market_cap_change_24h: -1837183915.6545334,
         market_cap_change_percentage_24h: -4.96476,
         circulating_supply: 155855196,
         total_supply: 157900174,
         max_supply: 200000000,
         ath: 686.31,
         ath_change_percentage: -67.18013,
         ath_date: '2021-05-10T07:24:17.097Z',
         atl: 0.0398177,
         atl_change_percentage: 565590.58929,
         atl_date: '2017-10-19T00:00:00.000Z',
         roi: null,
         last_updated: '2023-06-12T06:39:56.232Z'
      },
      {
         id: 'usd-coin',
         symbol: 'usdc',
         name: 'USD Coin',
         image: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389',
         current_price: 0.999632,
         market_cap: 28421991392,
         market_cap_rank: 5,
         fully_diluted_valuation: 28422788568,
         total_volume: 2678982869,
         high_24h: 1.004,
         low_24h: 0.997471,
         price_change_24h: -0.000280609460782566,
         price_change_percentage_24h: -0.02806,
         market_cap_change_24h: 47299657,
         market_cap_change_percentage_24h: 0.1667,
         circulating_supply: 28383275349.8485,
         total_supply: 28384071439.8485,
         max_supply: null,
         ath: 1.17,
         ath_change_percentage: -14.67002,
         ath_date: '2019-05-08T00:40:28.300Z',
         atl: 0.877647,
         atl_change_percentage: 14.0174,
         atl_date: '2023-03-11T08:02:13.981Z',
         roi: null,
         last_updated: '2023-06-12T06:39:52.906Z'
      },
      {
         id: 'ripple',
         symbol: 'xrp',
         name: 'XRP',
         image: 'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731',
         current_price: 0.516415,
         market_cap: 26889445894,
         market_cap_rank: 6,
         fully_diluted_valuation: 51723386240,
         total_volume: 1125338495,
         high_24h: 0.529569,
         low_24h: 0.50668,
         price_change_24h: 0.00769475,
         price_change_percentage_24h: 1.51257,
         market_cap_change_24h: 419596210,
         market_cap_change_percentage_24h: 1.58519,
         circulating_supply: 51987017573,
         total_supply: 99988884267,
         max_supply: 100000000000,
         ath: 3.4,
         ath_change_percentage: -84.80453,
         ath_date: '2018-01-07T00:00:00.000Z',
         atl: 0.00268621,
         atl_change_percentage: 19124.52055,
         atl_date: '2014-05-22T00:00:00.000Z',
         roi: null,
         last_updated: '2023-06-12T06:39:57.190Z'
      },
      {
         id: 'staked-ether',
         symbol: 'steth',
         name: 'Lido Staked Ether',
         image: 'https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1608607546',
         current_price: 1744.6,
         market_cap: 12517639420,
         market_cap_rank: 7,
         fully_diluted_valuation: 12517639420,
         total_volume: 10771806,
         high_24h: 1770.97,
         low_24h: 1723.89,
         price_change_24h: -13.288162309685958,
         price_change_percentage_24h: -0.75592,
         market_cap_change_24h: -89641456.72227669,
         market_cap_change_percentage_24h: -0.71103,
         circulating_supply: 7176692.95195553,
         total_supply: 7177939.7823887,
         max_supply: 7176692.95195553,
         ath: 4829.57,
         ath_change_percentage: -63.99337,
         ath_date: '2021-11-10T14:40:47.256Z',
         atl: 482.9,
         atl_change_percentage: 260.11171,
         atl_date: '2020-12-22T04:08:21.854Z',
         roi: null,
         last_updated: '2023-06-12T06:39:35.967Z'
      },
      {
         id: 'cardano',
         symbol: 'ada',
         name: 'Cardano',
         image: 'https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860',
         current_price: 0.278324,
         market_cap: 9743219385,
         market_cap_rank: 8,
         fully_diluted_valuation: 12510903459,
         total_volume: 537131667,
         high_24h: 0.278462,
         low_24h: 0.260147,
         price_change_24h: 0.0121911,
         price_change_percentage_24h: 4.58082,
         market_cap_change_24h: 394056736,
         market_cap_change_percentage_24h: 4.21489,
         circulating_supply: 35045020830.3234,
         total_supply: 45000000000,
         max_supply: 45000000000,
         ath: 3.09,
         ath_change_percentage: -91.12933,
         ath_date: '2021-09-02T06:00:10.474Z',
         atl: 0.01925275,
         atl_change_percentage: 1322.28875,
         atl_date: '2020-03-13T02:22:55.044Z',
         roi: null,
         last_updated: '2023-06-12T06:39:53.430Z'
      },
      {
         id: 'dogecoin',
         symbol: 'doge',
         name: 'Dogecoin',
         image: 'https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256',
         current_price: 0.061049,
         market_cap: 8545332558,
         market_cap_rank: 9,
         fully_diluted_valuation: 8545302592,
         total_volume: 291759299,
         high_24h: 0.062539,
         low_24h: 0.060415,
         price_change_24h: -0.001115508730076376,
         price_change_percentage_24h: -1.79444,
         market_cap_change_24h: -143444452.59358215,
         market_cap_change_percentage_24h: -1.65092,
         circulating_supply: 139733126383.705,
         total_supply: 139733166383.705,
         max_supply: null,
         ath: 0.731578,
         ath_change_percentage: -91.68222,
         ath_date: '2021-05-08T05:08:23.458Z',
         atl: 0.0000869,
         atl_change_percentage: 69921.21776,
         atl_date: '2015-05-06T00:00:00.000Z',
         roi: null,
         last_updated: '2023-06-12T06:39:57.765Z'
      },
      {
         id: 'tron',
         symbol: 'trx',
         name: 'TRON',
         image: 'https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1547035066',
         current_price: 0.069969,
         market_cap: 6313816227,
         market_cap_rank: 10,
         fully_diluted_valuation: 6313850012,
         total_volume: 256241927,
         high_24h: 0.07062,
         low_24h: 0.06915,
         price_change_24h: 0.00053986,
         price_change_percentage_24h: 0.77757,
         market_cap_change_24h: 48724219,
         market_cap_change_percentage_24h: 0.77771,
         circulating_supply: 90111223464.1784,
         total_supply: 90111705644.4841,
         max_supply: null,
         ath: 0.231673,
         ath_change_percentage: -69.83921,
         ath_date: '2018-01-05T00:00:00.000Z',
         atl: 0.00180434,
         atl_change_percentage: 3772.5669,
         atl_date: '2017-11-12T00:00:00.000Z',
         roi: {
            times: 35.825543478888875,
            currency: 'usd',
            percentage: 3582.554347888887
         },
         last_updated: '2023-06-12T06:39:55.832Z'
      },
      {
         "id": "solana",
         "symbol": "sol",
         "name": "Solana",
         "image": "https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422",
         "current_price": 15.54,
         "market_cap": 6205613235,
         "market_cap_rank": 11,
         "fully_diluted_valuation": 8550721196,
         "total_volume": 156848253,
         "high_24h": 15.8,
         "low_24h": 15.38,
         "price_change_24h": -0.007191393269579295,
         "price_change_percentage_24h": -0.04626,
         "market_cap_change_24h": 3974262,
         "market_cap_change_percentage_24h": 0.06408,
         "circulating_supply": 399367503.58949,
         "total_supply": 550288915.603922,
         "max_supply": null,
         "ath": 259.96,
         "ath_change_percentage": -94.02262,
         "ath_date": "2021-11-06T21:54:35.825Z",
         "atl": 0.500801,
         "atl_change_percentage": 3002.77744,
         "atl_date": "2020-05-11T19:35:23.449Z",
         "roi": null,
         "last_updated": "2023-06-19T01:42:23.022Z"
       },
       {
         "id": "polkadot",
         "symbol": "dot",
         "name": "Polkadot",
         "image": "https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1639712644",
         "current_price": 4.56,
         "market_cap": 5673517765,
         "market_cap_rank": 12,
         "fully_diluted_valuation": 6042568049,
         "total_volume": 97729247,
         "high_24h": 4.66,
         "low_24h": 4.5,
         "price_change_24h": 0.058565,
         "price_change_percentage_24h": 1.30113,
         "market_cap_change_24h": 76968525,
         "market_cap_change_percentage_24h": 1.37529,
         "circulating_supply": 1244454653.52835,
         "total_supply": 1325403786.41484,
         "max_supply": null,
         "ath": 54.98,
         "ath_change_percentage": -91.73532,
         "ath_date": "2021-11-04T14:10:09.301Z",
         "atl": 2.7,
         "atl_change_percentage": 68.45491,
         "atl_date": "2020-08-20T05:48:11.359Z",
         "roi": null,
         "last_updated": "2023-06-19T01:42:20.749Z"
       },
       {
         "id": "litecoin",
         "symbol": "ltc",
         "name": "Litecoin",
         "image": "https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580",
         "current_price": 77.34,
         "market_cap": 5658323442,
         "market_cap_rank": 13,
         "fully_diluted_valuation": 6495373464,
         "total_volume": 260977449,
         "high_24h": 78.44,
         "low_24h": 76.65,
         "price_change_24h": 0.689762,
         "price_change_percentage_24h": 0.89984,
         "market_cap_change_24h": 53985965,
         "market_cap_change_percentage_24h": 0.96329,
         "circulating_supply": 73175033.2334713,
         "total_supply": 84000000,
         "max_supply": 84000000,
         "ath": 410.26,
         "ath_change_percentage": -81.15195,
         "ath_date": "2021-05-10T03:13:07.904Z",
         "atl": 1.15,
         "atl_change_percentage": 6630.77153,
         "atl_date": "2015-01-14T00:00:00.000Z",
         "roi": null,
         "last_updated": "2023-06-19T01:42:15.758Z"
       },
       {
         "id": "matic-network",
         "symbol": "matic",
         "name": "Polygon",
         "image": "https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912",
         "current_price": 0.598632,
         "market_cap": 5560080207,
         "market_cap_rank": 14,
         "fully_diluted_valuation": 5985358437,
         "total_volume": 207753998,
         "high_24h": 0.61828,
         "low_24h": 0.594885,
         "price_change_24h": -0.007688380073576529,
         "price_change_percentage_24h": -1.26804,
         "market_cap_change_24h": -62757306.32519531,
         "market_cap_change_percentage_24h": -1.11611,
         "circulating_supply": 9289469069.28493,
         "total_supply": 10000000000,
         "max_supply": 10000000000,
         "ath": 2.92,
         "ath_change_percentage": -79.47225,
         "ath_date": "2021-12-27T02:08:34.307Z",
         "atl": 0.00314376,
         "atl_change_percentage": 18942.26384,
         "atl_date": "2019-05-10T00:00:00.000Z",
         "roi": {
           "times": 226.61676255043255,
           "currency": "usd",
           "percentage": 22661.676255043254
         },
         "last_updated": "2023-06-19T01:42:15.336Z"
       },
       {
         "id": "dai",
         "symbol": "dai",
         "name": "Dai",
         "image": "https://assets.coingecko.com/coins/images/9956/large/4943.png?1636636734",
         "current_price": 1,
         "market_cap": 4427662548,
         "market_cap_rank": 15,
         "fully_diluted_valuation": 4428127305,
         "total_volume": 63339134,
         "high_24h": 1.001,
         "low_24h": 0.997441,
         "price_change_24h": 0.00053156,
         "price_change_percentage_24h": 0.05318,
         "market_cap_change_24h": 12845322,
         "market_cap_change_percentage_24h": 0.29096,
         "circulating_supply": 4426960187.53709,
         "total_supply": 4427424870.79914,
         "max_supply": 4427424870.79914,
         "ath": 1.22,
         "ath_change_percentage": -17.94785,
         "ath_date": "2020-03-13T03:02:50.373Z",
         "atl": 0.88196,
         "atl_change_percentage": 13.40184,
         "atl_date": "2023-03-11T07:50:50.514Z",
         "roi": null,
         "last_updated": "2023-06-19T01:40:00.452Z"
       },
       {
         "id": "binance-usd",
         "symbol": "busd",
         "name": "Binance USD",
         "image": "https://assets.coingecko.com/coins/images/9576/large/BUSD.png?1568947766",
         "current_price": 1.001,
         "market_cap": 4297298729,
         "market_cap_rank": 16,
         "fully_diluted_valuation": 4297298729,
         "total_volume": 1262111576,
         "high_24h": 1.003,
         "low_24h": 0.996755,
         "price_change_24h": 0.00019033,
         "price_change_percentage_24h": 0.01903,
         "market_cap_change_24h": 907836,
         "market_cap_change_percentage_24h": 0.02113,
         "circulating_supply": 4295869950.73,
         "total_supply": 4295869950.73,
         "max_supply": null,
         "ath": 1.15,
         "ath_change_percentage": -13.31143,
         "ath_date": "2020-03-13T02:35:42.953Z",
         "atl": 0.901127,
         "atl_change_percentage": 11.0346,
         "atl_date": "2021-05-19T13:04:37.445Z",
         "roi": null,
         "last_updated": "2023-06-19T01:42:21.051Z"
       },
       {
         "id": "shiba-inu",
         "symbol": "shib",
         "name": "Shiba Inu",
         "image": "https://assets.coingecko.com/coins/images/11939/large/shiba.png?1622619446",
         "current_price": 0.00000719,
         "market_cap": 4237265867,
         "market_cap_rank": 17,
         "fully_diluted_valuation": 7189771165,
         "total_volume": 223797361,
         "high_24h": 0.00000751,
         "low_24h": 0.00000693,
         "price_change_24h": 2.56507e-7,
         "price_change_percentage_24h": 3.69847,
         "market_cap_change_24h": 151176222,
         "market_cap_change_percentage_24h": 3.69978,
         "circulating_supply": 589340143816949.4,
         "total_supply": 999989357496139,
         "max_supply": null,
         "ath": 0.00008616,
         "ath_change_percentage": -91.66983,
         "ath_date": "2021-10-28T03:54:55.568Z",
         "atl": 5.6366e-11,
         "atl_change_percentage": 12732973.68208,
         "atl_date": "2020-11-28T11:26:25.838Z",
         "roi": null,
         "last_updated": "2023-06-19T01:42:19.479Z"
       },
       {
         "id": "wrapped-bitcoin",
         "symbol": "wbtc",
         "name": "Wrapped Bitcoin",
         "image": "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1548822744",
         "current_price": 26449,
         "market_cap": 4150190793,
         "market_cap_rank": 18,
         "fully_diluted_valuation": 4150190793,
         "total_volume": 53226296,
         "high_24h": 26629,
         "low_24h": 26363,
         "price_change_24h": -13.832131176954135,
         "price_change_percentage_24h": -0.05227,
         "market_cap_change_24h": -936363.7265548706,
         "market_cap_change_percentage_24h": -0.02256,
         "circulating_supply": 156927.1954425,
         "total_supply": 156927.1954425,
         "max_supply": 156927.1954425,
         "ath": 70643,
         "ath_change_percentage": -62.56324,
         "ath_date": "2021-11-10T14:40:19.650Z",
         "atl": 3139.17,
         "atl_change_percentage": 742.47024,
         "atl_date": "2019-04-02T00:00:00.000Z",
         "roi": null,
         "last_updated": "2023-06-19T01:42:21.597Z"
       },
       {
         "id": "avalanche-2",
         "symbol": "avax",
         "name": "Avalanche",
         "image": "https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png?1670992574",
         "current_price": 11.35,
         "market_cap": 3914716930,
         "market_cap_rank": 19,
         "fully_diluted_valuation": 8170741204,
         "total_volume": 107115226,
         "high_24h": 11.6,
         "low_24h": 11.3,
         "price_change_24h": -0.11166757825633233,
         "price_change_percentage_24h": -0.97412,
         "market_cap_change_24h": -38615599.69167948,
         "market_cap_change_percentage_24h": -0.97679,
         "circulating_supply": 344962117.768185,
         "total_supply": 431681596.343166,
         "max_supply": 720000000,
         "ath": 144.96,
         "ath_change_percentage": -92.1971,
         "ath_date": "2021-11-21T14:18:56.538Z",
         "atl": 2.8,
         "atl_change_percentage": 303.81693,
         "atl_date": "2020-12-31T13:15:21.540Z",
         "roi": null,
         "last_updated": "2023-06-19T01:42:21.993Z"
       },
       {
         "id": "uniswap",
         "symbol": "uni",
         "name": "Uniswap",
         "image": "https://assets.coingecko.com/coins/images/12504/large/uniswap-uni.png?1600306604",
         "current_price": 4.47,
         "market_cap": 3371606976,
         "market_cap_rank": 20,
         "fully_diluted_valuation": 4473011508,
         "total_volume": 32352081,
         "high_24h": 4.61,
         "low_24h": 4.45,
         "price_change_24h": -0.01434475825555026,
         "price_change_percentage_24h": -0.31976,
         "market_cap_change_24h": -10856626.82525158,
         "market_cap_change_percentage_24h": -0.32097,
         "circulating_supply": 753766667,
         "total_supply": 1000000000,
         "max_supply": 1000000000,
         "ath": 44.92,
         "ath_change_percentage": -90.07726,
         "ath_date": "2021-05-03T05:25:04.822Z",
         "atl": 1.03,
         "atl_change_percentage": 332.65657,
         "atl_date": "2020-09-17T01:20:38.214Z",
         "roi": null,
         "last_updated": "2023-06-19T01:42:19.088Z"
       },
       {
         "id": "leo-token",
         "symbol": "leo",
         "name": "LEO Token",
         "image": "https://assets.coingecko.com/coins/images/8418/large/leo-token.png?1558326215",
         "current_price": 3.55,
         "market_cap": 3298168158,
         "market_cap_rank": 21,
         "fully_diluted_valuation": 3493842306,
         "total_volume": 631957,
         "high_24h": 3.57,
         "low_24h": 3.51,
         "price_change_24h": 0.02904084,
         "price_change_percentage_24h": 0.82421,
         "market_cap_change_24h": 13042823,
         "market_cap_change_percentage_24h": 0.39703,
         "circulating_supply": 930060739.9,
         "total_supply": 985239504,
         "max_supply": null,
         "ath": 8.14,
         "ath_change_percentage": -56.33012,
         "ath_date": "2022-02-08T17:40:10.285Z",
         "atl": 0.799859,
         "atl_change_percentage": 344.16501,
         "atl_date": "2019-12-24T15:14:35.376Z",
         "roi": null,
         "last_updated": "2023-06-19T01:41:49.495Z"
       },
       {
         "id": "true-usd",
         "symbol": "tusd",
         "name": "TrueUSD",
         "image": "https://assets.coingecko.com/coins/images/3449/large/tusd.png?1618395665",
         "current_price": 1.003,
         "market_cap": 3119239742,
         "market_cap_rank": 22,
         "fully_diluted_valuation": 3119234567,
         "total_volume": 144210806,
         "high_24h": 1.005,
         "low_24h": 0.999624,
         "price_change_24h": 0.00058901,
         "price_change_percentage_24h": 0.05875,
         "market_cap_change_24h": 2392823,
         "market_cap_change_percentage_24h": 0.07677,
         "circulating_supply": 3110025804.89,
         "total_supply": 3110020645.69,
         "max_supply": null,
         "ath": 1.62,
         "ath_change_percentage": -38.03183,
         "ath_date": "2018-08-26T20:41:09.375Z",
         "atl": 0.88355,
         "atl_change_percentage": 13.51512,
         "atl_date": "2020-03-12T10:47:51.380Z",
         "roi": null,
         "last_updated": "2023-06-19T01:42:12.582Z"
       },
       {
         "id": "chainlink",
         "symbol": "link",
         "name": "Chainlink",
         "image": "https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1547034700",
         "current_price": 5.16,
         "market_cap": 2666856346,
         "market_cap_rank": 23,
         "fully_diluted_valuation": 5157332217,
         "total_volume": 98425613,
         "high_24h": 5.3,
         "low_24h": 5.12,
         "price_change_24h": -0.08405064584309763,
         "price_change_percentage_24h": -1.60326,
         "market_cap_change_24h": -43422892.99635935,
         "market_cap_change_percentage_24h": -1.60216,
         "circulating_supply": 517099972.2305644,
         "total_supply": 1000000000,
         "max_supply": 1000000000,
         "ath": 52.7,
         "ath_change_percentage": -90.21313,
         "ath_date": "2021-05-10T00:13:57.214Z",
         "atl": 0.148183,
         "atl_change_percentage": 3380.38687,
         "atl_date": "2017-11-29T00:00:00.000Z",
         "roi": null,
         "last_updated": "2023-06-19T01:42:22.773Z"
       },
       {
         "id": "cosmos",
         "symbol": "atom",
         "name": "Cosmos Hub",
         "image": "https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png?1555657960",
         "current_price": 8.55,
         "market_cap": 2500772853,
         "market_cap_rank": 24,
         "fully_diluted_valuation": null,
         "total_volume": 173350339,
         "high_24h": 8.84,
         "low_24h": 8.53,
         "price_change_24h": -0.2093057657575308,
         "price_change_percentage_24h": -2.38988,
         "market_cap_change_24h": -63333075.24930239,
         "market_cap_change_percentage_24h": -2.46999,
         "circulating_supply": 292586163.827428,
         "total_supply": null,
         "max_supply": null,
         "ath": 44.45,
         "ath_change_percentage": -80.77054,
         "ath_date": "2022-01-17T00:34:41.497Z",
         "atl": 1.16,
         "atl_change_percentage": 636.78309,
         "atl_date": "2020-03-13T02:27:44.591Z",
         "roi": {
           "times": 84.4868461970003,
           "currency": "usd",
           "percentage": 8448.68461970003
         },
         "last_updated": "2023-06-19T01:42:17.469Z"
       },
       {
         "id": "monero",
         "symbol": "xmr",
         "name": "Monero",
         "image": "https://assets.coingecko.com/coins/images/69/large/monero_logo.png?1547033729",
         "current_price": 137.18,
         "market_cap": 2488962788,
         "market_cap_rank": 25,
         "fully_diluted_valuation": null,
         "total_volume": 65679337,
         "high_24h": 141.15,
         "low_24h": 136.77,
         "price_change_24h": 0.182736,
         "price_change_percentage_24h": 0.13339,
         "market_cap_change_24h": 4601440,
         "market_cap_change_percentage_24h": 0.18522,
         "circulating_supply": 18147820.3764146,
         "total_supply": null,
         "max_supply": null,
         "ath": 542.33,
         "ath_change_percentage": -74.70808,
         "ath_date": "2018-01-09T00:00:00.000Z",
         "atl": 0.216177,
         "atl_change_percentage": 63350.1971,
         "atl_date": "2015-01-14T00:00:00.000Z",
         "roi": null,
         "last_updated": "2023-06-19T01:42:08.988Z"
       },
       {
         "id": "okb",
         "symbol": "okb",
         "name": "OKB",
         "image": "https://assets.coingecko.com/coins/images/4463/large/WeChat_Image_20220118095654.png?1642471050",
         "current_price": 41.21,
         "market_cap": 2472256371,
         "market_cap_rank": 26,
         "fully_diluted_valuation": 12361281855,
         "total_volume": 2712224,
         "high_24h": 41.97,
         "low_24h": 41.13,
         "price_change_24h": -0.24555702931519363,
         "price_change_percentage_24h": -0.59231,
         "market_cap_change_24h": -16153639.514248371,
         "market_cap_change_percentage_24h": -0.64916,
         "circulating_supply": 60000000,
         "total_supply": 235957685.3,
         "max_supply": 300000000,
         "ath": 58.66,
         "ath_change_percentage": -29.75583,
         "ath_date": "2023-02-18T01:21:37.582Z",
         "atl": 0.580608,
         "atl_change_percentage": 6996.74478,
         "atl_date": "2019-01-14T00:00:00.000Z",
         "roi": null,
         "last_updated": "2023-06-19T01:42:19.785Z"
       },
       {
         "id": "ethereum-classic",
         "symbol": "etc",
         "name": "Ethereum Classic",
         "image": "https://assets.coingecko.com/coins/images/453/large/ethereum-classic-logo.png?1547034169",
         "current_price": 15.22,
         "market_cap": 2154131330,
         "market_cap_rank": 27,
         "fully_diluted_valuation": 3206838433,
         "total_volume": 67494851,
         "high_24h": 15.5,
         "low_24h": 15.14,
         "price_change_24h": -0.038110856198549925,
         "price_change_percentage_24h": -0.24974,
         "market_cap_change_24h": -3067636.947116852,
         "market_cap_change_percentage_24h": -0.1422,
         "circulating_supply": 141533625.961592,
         "total_supply": 210700000,
         "max_supply": 210700000,
         "ath": 167.09,
         "ath_change_percentage": -90.89089,
         "ath_date": "2021-05-06T18:34:22.133Z",
         "atl": 0.615038,
         "atl_change_percentage": 2374.64228,
         "atl_date": "2016-07-25T00:00:00.000Z",
         "roi": {
           "times": 32.827113279265866,
           "currency": "usd",
           "percentage": 3282.711327926587
         },
         "last_updated": "2023-06-19T01:42:20.880Z"
       },
       {
         "id": "stellar",
         "symbol": "xlm",
         "name": "Stellar",
         "image": "https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1552356157",
         "current_price": 0.079731,
         "market_cap": 2144452779,
         "market_cap_rank": 28,
         "fully_diluted_valuation": 3985875233,
         "total_volume": 31972639,
         "high_24h": 0.080973,
         "low_24h": 0.079442,
         "price_change_24h": -0.000121218813798576,
         "price_change_percentage_24h": -0.1518,
         "market_cap_change_24h": -1585899.2128362656,
         "market_cap_change_percentage_24h": -0.0739,
         "circulating_supply": 26901612686.506,
         "total_supply": 50001787309.4738,
         "max_supply": 50001787309.4738,
         "ath": 0.875563,
         "ath_change_percentage": -90.89532,
         "ath_date": "2018-01-03T00:00:00.000Z",
         "atl": 0.00047612,
         "atl_change_percentage": 16642.97942,
         "atl_date": "2015-03-05T00:00:00.000Z",
         "roi": null,
         "last_updated": "2023-06-19T01:42:13.161Z"
       },
       {
         "id": "bitcoin-cash",
         "symbol": "bch",
         "name": "Bitcoin Cash",
         "image": "https://assets.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1594689492",
         "current_price": 107.09,
         "market_cap": 2079700729,
         "market_cap_rank": 29,
         "fully_diluted_valuation": 2248501647,
         "total_volume": 54848800,
         "high_24h": 108.59,
         "low_24h": 106.16,
         "price_change_24h": 0.791155,
         "price_change_percentage_24h": 0.74425,
         "market_cap_change_24h": 15739930,
         "market_cap_change_percentage_24h": 0.76261,
         "circulating_supply": 19423474.8966508,
         "total_supply": 21000000,
         "max_supply": 21000000,
         "ath": 3785.82,
         "ath_change_percentage": -97.17181,
         "ath_date": "2017-12-20T00:00:00.000Z",
         "atl": 76.93,
         "atl_change_percentage": 39.16986,
         "atl_date": "2018-12-16T00:00:00.000Z",
         "roi": null,
         "last_updated": "2023-06-19T01:42:14.797Z"
       },
   ],
   status: StatusCode.IDLE
}

const marketSlice = createSlice({
   name: "Crypto Market",
   initialState,
   extraReducers: (builder) => {
      builder
         .addCase(getCryptos.pending, (state) => {
            state.status = StatusCode.LOADING;
         })
         .addCase(getCryptos.fulfilled, (state, action) => {
            state.market = action.payload;
            state.status = StatusCode.IDLE;
         })
         .addCase(getCryptos.rejected, (state) => {
            state.status = StatusCode.ERROR;
         })
   }
})

export const { fetchCryptos } = marketSlice.actions;
export default marketSlice.reducer;

export const getCryptos = createAsyncThunk(
   'cryptoMarket/get',
   async (url) => {
      const apiData = await axios.get(url);
      const data = apiData.data;
      return data;
   }
)
=======
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import StatusCode from "../utils/StatusCode";

const initialState = {
   market: [], // The array to hold the crypto market data
   status: StatusCode.IDLE, // The initial status of the market slice
};

const marketSlice = createSlice({
   name: "Crypto Market",
   initialState,
   extraReducers: (builder) => {
      // Handle the pending action when fetching cryptos
      builder.addCase(getCryptos.pending, (state) => {
         state.status = StatusCode.LOADING;
      });

      // Handle the fulfilled action when fetching cryptos
      builder.addCase(getCryptos.fulfilled, (state, action) => {
         state.market = action.payload; // Update the market data with the fetched data
         state.status = StatusCode.IDLE; // Set the status to idle
      });

      // Handle the rejected action when fetching cryptos
      builder.addCase(getCryptos.rejected, (state) => {
         state.status = StatusCode.ERROR; // Set the status to error
      });
   },
});

export const { fetchCryptos } = marketSlice.actions; // Export the fetchCryptos action
export default marketSlice.reducer; // Export the reducer

export const getCryptos = createAsyncThunk(
   'cryptoMarket/get',
   async (url) => {
      const apiData = await axios.get(url); // Fetch data from the specified URL
      const data = apiData.data; // Extract the data from the response
      return data; // Return the fetched data
   }
);
>>>>>>> master
