import React from 'react';
import BlogItem from './BlogItem';
import './styles.css';
import adsImage from '../../../images/ads.JPG';

//remember to clean folder since it was copied

const BlogList = ({ blogs }) => {
  return (
    <div className='sidebar-wrap'>
            
      <h3>SUBSCRIBE US</h3>
      <img src={adsImage} alt='ads'></img>
      <h3>AD SPACE</h3>
      <img src={adsImage} alt='ads'></img>
      <h3>MOST POPULAR</h3>
      {blogs.map((blog) => (
        <BlogItem blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;



