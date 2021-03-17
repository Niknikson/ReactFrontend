import * as axios from "axios";
import { getNewsApi } from '../api/axio'

const GET_NEWS = "GET_NEWS"


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

export const getNewsThunk = (currentPage, searchData, sortBy) => {
  return async (dispatch) => {
    debugger;
    const response = await axios.get(
      `https://newsapi.org/v2/everything?qInTitle=${searchData}&sortBy=${sortBy}&page=${currentPage}&apiKey=9748adcb12234d12a12ddfbb5d9ce6cc`
    );
    dispatch(getNewsAc(response.data));
  };
};

// export const getNewsThunk = () => {
//   return async (dispatch) => {
//     debugger
//       const response = await axios.get(
//         `https://newsapi.org/v2/everything?q=business&from=2021-03-15&sortBy=popularity&pageSize=20&page=2&apiKey=9748adcb12234d12a12ddfbb5d9ce6cc`
//       );
//       debugger
//       dispatch(getNewsAc(response.data));
//     };
//   };

export default newsReducer;
