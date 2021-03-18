import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import newsReducer from "./newsReducer";
import todoReducer from "./todoReduser";
import postReduser from "./postReduser";


let reducers = combineReducers({
  todoState: todoReducer,
  newsData: newsReducer,
  postData: postReduser,
});

let store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));

export default store
