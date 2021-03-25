import * as axios from "axios";
import * as api from "../api/axio.js";
const GET_NEWS = "GET_NEWS"
const SELECT_NEWS = "SELECT_NEWS";

const defaultState = {
  totalPage: 0,
  articles: [],
};

const newsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        articles: [...state.articles, ...action.paylouad.articles],
        totalPage: action.paylouad.totalResults,
      };
    case SELECT_NEWS:
      return {
        ...state,
        articles: [ ...action.paylouad.articles],
        totalPage: action.paylouad.totalResults,
      };
    default:
      return state;
  }
};

export const getNewsAc = (paylouad) => {
  return {
    type: GET_NEWS,
    paylouad,
  };
}

export const selectNewsAc = (paylouad) => {
  return {
    type: SELECT_NEWS,
    paylouad,
  };
};


export const getNewsThunk = (currentPage, searchData, sortBy) => async (dispatch) => {
  try {
    const response = await api.getNews(currentPage, searchData, sortBy);
    dispatch(getNewsAc(response.data));
  } catch (error) {
    console.log(error.message);
  }
};

export const selectNewsThunk = (currentPage, searchData, sortBy) => async (dispatch) => {
  try {
    const response = await api.getNews(currentPage, searchData, sortBy);
    dispatch(selectNewsAc(response.data));
  } catch (error) {
    console.log(error.message);
  }
};


export default newsReducer;
