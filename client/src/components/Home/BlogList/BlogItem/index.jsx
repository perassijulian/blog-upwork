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
    <div className='blogItem-wrap'>
      <div>
        <Chip label={category} />
        <figure>
          <img className='blogItem-cover' src={cover} alt='cover' />
        </figure>
      </div>
      <div className='blogItem-desc-wrap' >
        <h3>{title}</h3>
        <footer>
          <div className='blogItem-author'>
            <img src={authorAvatar} alt='avatar' />
            <div>
              <h6>{authorName}</h6>
              <p>{createdAt}</p>
            </div>
          </div>
        </footer>
        <p className='blogItem-desc'>{description}</p>
        <Link className='blogItem-link' to={`/blog/${_id}`}>
            Read more ➝
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
