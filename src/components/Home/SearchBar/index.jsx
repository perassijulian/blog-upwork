import React from 'react';
import './styles.css';

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className='navbar-wrap'>
    <div className='navbar'>
      <div className='navbar--item'>HOME</div>
      <div className='navbar--item'>FEATURES</div>
      <div className='navbar--item'>DOCUMENTATION</div>
      <div className='navbar--item'>ABOUT</div>
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
);

export default SearchBar;
