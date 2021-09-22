import React from 'react';
import classes from './SearchBar.module.css';

const SearchBar = props => {
    return (
    <div className={classes.wrap}>
        <div className={classes.search}>
           <input type="text" className={classes.searchTerm} placeholder="test" />
           <button 
            type="submit" 
            className={classes.searchButton}
            onClick={props.onSearch}>
              Search
          </button>
        </div>
     </div>
    );
  };
  
  export default SearchBar;