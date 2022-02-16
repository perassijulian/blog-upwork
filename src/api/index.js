import axios from 'axios';

const url = 'http://localhost:3001/blog';

export const fetchPosts = () => axios.get(url);