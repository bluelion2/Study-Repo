import { CREATE_TODO, DELETE_TODO, CHANGE_TODO, INSERT_TEXT } from "./types";

const DefaultState = {
  todos: [
    { id: 1, content: "HTML", complete: false },
    { id: 2, content: "CSS", complete: true },
    { id: 3, content: "JS", complete: false }
  ],
  text: ""
};

const createTodoStore = (state = DefaultState, action) => {
  switch (action.type) {
    case INSERT_TEXT:
      return {
        ...state,
        text: action.text
      };
    case CREATE_TODO:
      const newTodo = {
        id: getId(state.todos),
        content: state.text,
        complete: false
      };
      const todos = [...state.todos, newTodo];
      return {
        ...state,
        text: "",
        todos
      };
    case DELETE_TODO:
      const filtered = state.todos.filter(todo => todo.id !== action.id);
      return {
        ...state,
        todos: filtered
      };
    case CHANGE_TODO:
      const changed = state.todos.map(todo => {
        if (todo.id === action.id) {
          todo.complete = !todo.complete;
        }
        return todo;
      });
      return {
        ...state,
        todos: changed
      };
    default:
      return state;
  }
};

export default createTodoStore;

const getId = todos => {
  return todos.length
    ? Math.max.apply(
        null,
        todos.map(todo => todo.id)
      ) + 1
    : 1;
};
