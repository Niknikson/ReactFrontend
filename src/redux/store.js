import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import newsReducer from "./newsReducer";
import todoReducer from "./todoReduser";


let reducers = combineReducers({
  todoState: todoReducer,
  newsData: newsReducer,

});

let store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));

export default store
