import React from 'react'
import { useState } from 'react';

const Searchlist = ({ search }) => {
   const [searchValue, setSearchValue] = useState();

   const handleClick = (value) => {
      console.log(value)
   }

   return (
      <div className='absolute box-border  bg-white flex flex-col   max-h-52 overflow-y-scroll'>
         {
            search.map((search, id) => (
               <div
                  className='hover:bg-red-100  pl-1 justify-left justify-items-start'
                  onClick={() => handleClick(search.name)} key={id}>
                  {search.name}
               </div>
            ))
         }
      </div>
   )
}

export default Searchlist

// alert(`you clicked on ${search.name}`