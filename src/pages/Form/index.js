import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../actions/blog';
import './styles.scss';

const Form = () => {
  const [cover, setCover] = useState("");
  const [authorAvatar, setAuthorAvatar] = useState("");
  const [formData, setFormData] = useState({
    authorName:"",
    title:"",
    description:"",
    category:"",
    cover:"",
    authorAvatar:"",
    createdAt:""
  });

  const blogsAPI = useSelector((state) => state.blogs);

  console.log(blogsAPI);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData(prevState => {
      return {...prevState, [name]: value}
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(formData));
  }

  return (
    
    <div className='postForm-wrap'>
      <form className='postForm' onSubmit={handleSubmit}>
        <input type='text' name='authorName' placeholder='Author name' onChange={handleChange} value={formData.authorName} />
        <input type='text' name='title' placeholder='Post title' onChange={handleChange} value={formData.title} />
        <input type='text' name='description' placeholder='Post description' onChange={handleChange} value={formData.description} />
        <input type='text' name='category' placeholder='Category' onChange={handleChange} value={formData.category} />
        <input type='file' name='authorAvatar' onChange={handleChange} value={formData.authorAvatar} />
        <input type='file' name='cover' onChange={handleChange} value={formData.cover} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form