import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip';
import './styles.scss';

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    _id,
  },
}) => {
  return (
    <Link className='blogItem-link-search' to={`/blog/${_id}`}>
    <div className='blogItem-wrap-search'>
      <div>
        <Chip label={category} />
        <figure>
            <img className='blogItem-cover-search' src={cover} alt='cover' />      
        </figure>
      </div>
      <div className='blogItem-desc-wrap-search' >
        <h3>{title}</h3>
        <footer>
          <div className='blogItem-author-search'>
            <img src={authorAvatar} alt='avatar' />
            <div>
              <h6>{authorName}</h6>
              <p>{createdAt}</p>
            </div>
          </div>
        </footer>
      </div>
      </div>
      </Link>
  );
};

export default BlogItem;
