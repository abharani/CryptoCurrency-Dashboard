import { useState } from 'react'
import SearchType from './searchtype';
import Searchlist from './SearchList';



function Searchbar() {
   const [search, setSearch] = useState([]);

   return (
      <div className='relative w-full shadow-md bg-white border-2 px-4  border-none rounded-lg p-0 m-0'>
         <SearchType setSearch={setSearch} />
         <Searchlist search={search} />
      </div>
   )
}

export default Searchbar
