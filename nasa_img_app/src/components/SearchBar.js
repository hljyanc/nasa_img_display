import React, {useRef} from 'react';
import classes from './SearchBar.module.css';

const SearchBar = props => {
  const searchTermRef = useRef();
  const handleSearch = () =>{
    const term = searchTermRef.current.value;
    props.onSearch(term);
  }
  return (
    <div className={classes.wrap}>
        <div className={classes.search}>
           <input 
            type="text" 
            className={classes.searchTerm} 
            placeholder="Search" 
            ref={searchTermRef}/>
           <button 
            type="search" 
            className={classes.searchButton}
            onClick={handleSearch}>
              Search
          </button>
        </div>
     </div>
    );
  };
  
  export default SearchBar;