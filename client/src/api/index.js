import {axiosInstance} from '../config';

const url = 'https://blog-perassi.herokuapp.com/post';

export const fetchPosts = () => axiosInstance.get(url);
export const createPost = (newPost) => axiosInstance.post(url, newPost);