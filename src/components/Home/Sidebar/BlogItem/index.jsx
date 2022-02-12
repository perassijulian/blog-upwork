import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip';
import './styles.css';

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  return (
    <div className='blogItem-wrap-side'>
      <div>
        <Chip label={category} />
        <figure>
          <img className='blogItem-cover-side' src={cover} alt='cover' />
        </figure>
      </div>
      <div className='blogItem-desc-wrap-side' >
        <Link to={`/blog/${id}`}>
            <h3>{title}</h3>
        </Link>
  {/**
        <footer>
          <div className='blogItem-author-side'>
            <img src={authorAvatar} alt='avatar' />
            <div>
              <h6>{authorName}</h6>
              <p>{createdAt}</p>
            </div>
          </div>
        </footer>
   */}
        <p className='blogItem-desc-side'>{description}</p>
   {/**
        <Link className='blogItem-link-side' to={`/blog/${id}`}>
            Read more ➝
        </Link>
     */}
      </div>
    </div>
  );
};

export default BlogItem;
