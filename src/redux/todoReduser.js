const CREATE_TODO = "CREATE_TODO"
const DELETE_TODO = "DELETE_TODO"
const UPDATE_TODO = "UPDATE_TODO"
const CHECK_TODO = "CHECK_TODO"


const defaultState = {
  todo: [
    { id: 1, title: "delectus aut autem", completed: false },
    { id: 2, title: "quis ut nam facilis et officia qui", completed: false },
    { id: 3, title: "fugiat veniam minus", completed: true },
    { id: 4, title: "et porro tempora", completed: true },
    { id: 5, title: "laboriosam mollitia et enim ", completed: false },
    { id: 6, title: "qui ullam ratione quibusdam", completed: false },
  ],
}

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todo: [...state.todo, action.paylouad],
      };
    case UPDATE_TODO:
      return {
        ...state,
        todo: state.todo.map((t) => {
          if (t.id === action.id) {
            return { ...t, title: action.paylouad };
          }
          return t;
        }),
      };
    case CHECK_TODO:
      return {
        ...state,
        todo: state.todo.map((t) => {
          if (t.id === action.id) {
            return { ...t, completed: !t.completed };
          }
          return t;
        }),
      };
    case DELETE_TODO:
      return {
        ...state,
        todo: [...state.todo.filter((t) => t.id !== action.id)],
      };

    default:
      return state;
  }
};
export const createTodoAC = (paylouad) => {
  return {
    type: CREATE_TODO,
    paylouad,
  };
};
export const upDateTodoAc = (id, paylouad) => {
  debugger;
  return {
    type: UPDATE_TODO,
    id,
    paylouad,
  };
};
export const checkTodoAc = (id) => {
  debugger
  return {
    type: CHECK_TODO,
    id,
  };
}
export const deleteAc = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};


export default todoReducer;
