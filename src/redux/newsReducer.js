import * as axios from "axios";
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

export const getNewsThunk = (currentPage, searchData, sortBy) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?qInTitle=${searchData}&sortBy=${sortBy}&page=${currentPage}&apiKey=9748adcb12234d12a12ddfbb5d9ce6cc`
    );
    dispatch(getNewsAc(response.data));
  };
};

export const selectNewsThunk = (currentPage, searchData, sortBy) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?qInTitle=${searchData}&sortBy=${sortBy}&page=${currentPage}&apiKey=9748adcb12234d12a12ddfbb5d9ce6cc`
    );
    dispatch(selectNewsAc(response.data));
  };
};



export default newsReducer;
