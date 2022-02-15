import React, { useEffect, useState } from 'react';
import './styles.scss';

const SearchBar = ({ categories, formSubmit, value, handleSearchKey, clearSearch }) => {
  
  

  return (
    <div className='navbar-wrap'>
      <div className='navbar'>
        {categories.map((item) => {return (
          <div className='navbar--item'>
            {item}
            <Submenu item={item} />
          </div>
        )})}
      </div>
      <div className='searchBar-wrap'>
        <form onSubmit={formSubmit}>
          <input
            type='text'
            placeholder='Search By Category'
            value={value}
            onChange={handleSearchKey}
          />
          {value && <span onClick={clearSearch}>X</span>}
          <button>Go</button>
        </form>
      </div>
    </div>
  )
};

function Submenu({item}) {
  return (
    <div className='navbar--submenu'>Display searching for {item} topics</div>
  )
}

export default SearchBar;
