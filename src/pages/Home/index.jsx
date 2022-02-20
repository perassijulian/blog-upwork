import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


import EmptyList from '../../components/common/EmptyList';
import BlogList from '../../components/Home/BlogList';
import Sidebar from '../../components/Home/Sidebar';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';
import { blogList } from '../../config/data';

import './styles.css';

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const list = [];
    for (let i = 0; i < blogList.length; i++) {
      if (list.indexOf(blogList[i].category.toUpperCase()) === -1) {
        
        list.push(blogList[i].category.toUpperCase());
      }
    }
    setCategories(list)
    
  }, []);

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };

  return (
    <div>
      {/* Page Header */}
      <Header />

      {/* Search Bar */}
      <SearchBar
        blogList= {blogList}
        categories = {categories}
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      <div className='main-content'>
        {/* Blog List & Empty View */}
        {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
        <Sidebar blogs={blogs} />
      </div>
    </div>
  );
};

export default Home;
