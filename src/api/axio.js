import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const deletePost = (id) => axios.delete(`${url}/${id}`);

const urlNews = "https://newsapi.org/v2/everything?qInTitle=";

export const getNews = (currentPage, searchData, sortBy) =>
  axios.get(
    `${urlNews}${searchData}&sortBy=${sortBy}&page=${currentPage}&apiKey=9748adcb12234d12a12ddfbb5d9ce6cc`
  );