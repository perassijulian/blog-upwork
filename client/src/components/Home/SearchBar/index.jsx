import React, { useEffect, useState } from 'react';
import './styles.scss';
import BlogItem from './BlogItem';

const SearchBar = ({ blogList, categories, formSubmit, value, handleSearchKey, clearSearch }) => {
    const handleBlogsToDisplay = (item) => {   
      const allBlogs = blogList;
      const filteredBlogs = allBlogs.filter((blog) =>
        blog.category.toLowerCase().includes(item.toLowerCase().trim())
      );
      return filteredBlogs;
   };

   const handleLogIn = () => {

   }

   const handleSignUp = () => {

   }

  return (
    <div className='navbar-wrap'>
      <div className='navbar'>
        {categories.map((item) => {return (
          <div className='navbar--item'>
            {item}
            <Submenu blogsToDispaly={handleBlogsToDisplay(item)} />
          </div>
        )})}
      </div>
      <div className='searchBar-wrap'>
        <div className='accountManager'>
          <button onClick={handleLogIn}>Log in</button>
          <button onClick={handleSignUp}>Sign up</button>
        </div>
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


function Submenu({blogsToDispaly}) {
  
  return (
    <div className='navbar--submenu'>
    {blogsToDispaly.map((blog) => (
      <BlogItem blog={blog} />
    ))}
    </div>
  )
}

export default SearchBar;
