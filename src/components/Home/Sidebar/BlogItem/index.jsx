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
    _id,
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
        <Link to={`/blog/${_id}`}>
            <h3>{title}</h3>
        </Link>
        <p className='blogItem-desc-side'>{description}</p>
      </div>
    </div>
  );
};

export default BlogItem;
