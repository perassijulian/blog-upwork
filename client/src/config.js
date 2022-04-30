import axios from 'axios';

const baseURL = "https://blog-perassi.herokuapp.com/post";

export const axiosInstance = axios.create({
    baseURL
})