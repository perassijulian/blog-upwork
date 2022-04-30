import {axiosInstance} from '../config';

export const fetchPosts = () => axiosInstance.get("/");
export const createPost = (newPost) => axiosInstance.post("/", newPost);