const CREATE_TODO = "CREATE_TODO";
const DELETE_TODO = "DELETE_TODO";

const defaultState = {
  todo: [
    {id: 1,title: "delectus aut autem",completed: false,},
    {id: 2,title: "quis ut nam facilis et officia qui",completed: false,},
    {id: 3,title: "fugiat veniam minus",completed: false,},
    {id: 4, title: "et porro tempora", completed: true, },
    {id: 5, title: "laboriosam mollitia et enim ", completed: false, },
    {id: 6,title: "qui ullam ratione quibusdam",completed: false,},
  ],
};
const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todo: [...state.todo, action.paylouad],
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

export const deleteAC = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export default todoReducer;
