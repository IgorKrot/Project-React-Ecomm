import debounce from 'lodash.debounce';
import React, { useCallback } from 'react';   
import { useSelector, useDispatch } from 'react-redux'

import { setValue, setSearchQuery } from '../redux/slices/categorySlice'
import { RootState } from '../redux/store';
            
function Search () {
   const value = useSelector((state: RootState) => state.filter.value);
   
   const dispatch = useDispatch();


   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setValue(event.target.value));
      debounceSearch(event.target.value);
   };

   const debounceSearch = useCallback(
      debounce((value: string) => {
      dispatch(setSearchQuery(value));
      }, 1000), []);

   
   return (           
      <input 
      placeholder='Search' 
      className='header__search' 
      type="search" 
      value={value}
      onChange={onChange} />
   );
}

export default Search;


























   // const updateQuery = useCallback(
   //    debounce((event) => {
   //       setSearchQuery(event.target.value)
   //       setValue(setSearchQuery(searchQuery));
   //    }, 500), [],
   // );

   // const updateQuery = (event) => setSearchQuery(event.target.value);   

      // const updateQuery = debounce(() => {
   //    //setValue(searchQuery);
   //    console.log("ghbdtn");
   //  }, 3);


      // const {searchQuery, setSearchQuery} = useContext(dataContext);
   // const {value, setValue} = useContext(dataContext);