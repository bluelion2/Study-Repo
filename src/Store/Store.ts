import {
  CREATE_TODO,
  DELETE_TODO,
  CHANGE_TODO,
  INSERT_TEXT,
  TodoAction,
  TDefaultState
} from "./types";
import { combineReducers } from "redux";

export const createTodo = () => ({ type: CREATE_TODO });
export const changeTodo = (id: number) => ({ type: CHANGE_TODO, id });
export const deleteTodo = (id: number) => ({ type: DELETE_TODO, id });
export const insertText = (text: string) => ({ type: INSERT_TEXT, text });

const DefaultState: TDefaultState = {
  todos: [
    { id: 1, content: "HTML", complete: false },
    { id: 2, content: "CSS", complete: true },
    { id: 3, content: "JS", complete: false }
  ],
  text: ""
};

const createTodoStore = (
  state: TDefaultState = DefaultState,
  action: TodoAction
) => {
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

export const reducer = combineReducers({
  createTodoStore
});

export type RootState = ReturnType<typeof reducer>;

const getId = todos => {
  return todos.length
    ? Math.max.apply(
        null,
        todos.map(todo => todo.id)
      ) + 1
    : 1;
};
