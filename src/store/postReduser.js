import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "./constants/actionTypes";
const defaultstate = [
  {
    creator: 'Nic',
    title: "qout of the day",
    message:
      "You’ll find topics like simplicity, happiness, inner peace, success, stoicism, learning, focus, discipline, creativity, and of course, wisdom.",
  },
  {
    creator: 'Nic',
    title: "qout of the day",
    message:
      "You’ll find topics like simplicity, happiness, inner peace, success, stoicism, learning, focus, discipline, creativity, and of course, wisdom.",
  },
  {
    creator: 'Nic',
    title: "qout of the day",
    message:
      "You’ll find topics like simplicity, happiness, inner peace, success, stoicism, learning, focus, discipline, creativity, and of course, wisdom.",
  },
];

 const postReduser = (posts = defaultstate, action) => {
   switch (action.type) {
     case FETCH_ALL:
       return action.payload;
     case LIKE:
       return posts.map((post) =>
         post._id === action.payload._id ? action.payload : post
       );
     case CREATE:
       return [...posts, action.payload];
     case UPDATE:
       return posts.map((post) =>
         post._id === action.payload._id ? action.payload : post
       );
     case DELETE:
       return posts.filter((post) => post._id !== action.payload);
     default:
       return posts;
   }
 };

export default postReduser