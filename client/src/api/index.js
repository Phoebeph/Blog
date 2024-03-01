import axios from 'axios';   //for api calls like request

const url = 'http://localhost:5000/posts';  // pointing to backend route 

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);