import { useState } from 'react';
import SearchSuggestions from './SearchSuggestions';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCoinsList } from '../../store/global';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const SearchBar = () => {
   const [searchValue, setSearchValue] = useState('');
   const [showSuggestions, setShowSuggestions] = useState(false);
   const [suggestions, setSuggestions] = useState([]);
   const [selectedCoin, setSelectedCoin] = useState('');

   const dispatch = useDispatch();

   // Get the market data from the store
   const { market } = useSelector(state => state.cryptoMarket);

   // Store the list of coins
   const [coins, setCoins] = useState();

   // Handle input change event
   const handleInputChange = (event) => {
      const inputValue = event.target.value;
      setSearchValue(inputValue);

      // Check if the input contains a number or special character
      if (/[\d~`!@#$%^&*()_+=\-[\]\\';,/{}|\\":<>?]/.test(inputValue)) {
         toast.error('Special characters and Numbers are not allowed');
         return;
      }

      // Perform search for suggestions
      const newSuggestions = inputValue ? performSearch(inputValue) : [];
      setSuggestions(newSuggestions);

      setShowSuggestions(newSuggestions.length > 0);
   };

   const performSearch = (inputValue) => {
      return coins.filter(({ id, name }) =>
         name.toLowerCase().includes(inputValue.toLowerCase())
      );
   };

   // Handle key press event
   const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
         // Set the selected coin
         setSelectedCoin({
            id: searchValue.toLowerCase(),
            name: searchValue.charAt(0).toUpperCase() + searchValue.slice(1),
         });

         // Dispatch the action to set the selected coins in the store
         dispatch(setSelectedCoinsList([{
            id: searchValue.toLowerCase(),
            name: searchValue.charAt(0).toUpperCase() + searchValue.slice(1),
         }]));

         setShowSuggestions(false);
      }
   };

   // Update the list of coins when market data changes
    useEffect(() => {
      setCoins(market.map((coin) => ({
         id: coin.id,
         name: coin.name,
      })))
   }, [market])
   return (
      <div className="shadow-md rounded-lg relative w-full">
         {/* Search input */}
         <input
            type="search"
            value={searchValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder="Search..."
            className="w-full py-3 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/70"
         />
         {/* Render search suggestions if available */}
         {showSuggestions && (
            <SearchSuggestions suggestions={suggestions} setSearchValue={setSearchValue} setShowSuggestions={setShowSuggestions} />
         )}
         {/* The toast container */}
         <Toaster />
      </div>
   );
};

export default SearchBar;
