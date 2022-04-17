import {axiosInstance} from '../config';

const url = 'http://localhost:3001/post';

export const fetchPosts = () => axiosInstance.get(url);
export const createPost = (newPost) => axiosInstance.post(url, newPost);