import { useDispatch } from 'react-redux';
import { setSelectedCoinsList } from '../../store/global';

// A component for displaying search suggestions
const SearchSuggestions = ({ suggestions, setSearchValue, setShowSuggestions }) => {

   const dispatch = useDispatch();

   // Handle click on a suggestion
   const handleSuggestionClick = (suggestion) => {
      setSearchValue(suggestion.name);
      dispatch(setSelectedCoinsList([
         {
            id: suggestion.name.toLowerCase(),
            name: suggestion.name.charAt(0).toUpperCase() + suggestion.name.slice(1),
         }
      ]));
      setShowSuggestions(false);
   };

   return (
      <> {/* List of search suggestions */}
         <ul className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
            {suggestions.map((suggestion) => (
               <li
                  key={suggestion.id}
                  className="py-2 px-3 cursor-pointer hover:bg-red-100 hover:font-medium"
                  onMouseDown={() => handleSuggestionClick(suggestion)}
               >
                  {suggestion.name}
               </li>
            ))}
         </ul>
      </>
   );
};

export default SearchSuggestions;
