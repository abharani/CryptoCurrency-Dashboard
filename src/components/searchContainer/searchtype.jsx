import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FaSearch } from "react-icons/fa"
const SearchType = ({ setSearch }) => {


   const [input, setInput] = useState("")
   const fetchData = (value) => {
      fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
         .then((response) => response.json())
         .then((json) => {
            const results = json.filter((user) => {
               return value && user && user.name && user.name.toLowerCase().includes(value);
            });
            // console.log(results);
            setSearch(results);
         });
   };

   const changeHandler = (value) => {
      setInput(value)
      fetchData(value)
   }
   return (
      <div className='bg-white flex items-center flex-1 w-full py-4 gap-2'>
         <FaSearch className='' />
         <input type='text' placeholder='Search by Coin' value={input}
            className='w-full  outline-none border-none p-0 m-0 text-black  ' onChange={(e) => changeHandler(e.target.value)}>
         </input>
      </div>
   )
}

export default SearchType