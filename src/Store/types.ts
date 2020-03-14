import {
  createTodo,
  changeTodo,
  deleteTodo,
  insertText,
  initTodo
} from "./Store";

export const CREATE_TODO = "CREATE_TODO" as const;
export const CHANGE_TODO = "CHANGE_TODO" as const;
export const DELETE_TODO = "DELETE_TODO" as const;
export const INSERT_TEXT = "INSERT_TEXT" as const;
export const INIT_TODO = "INIT_TODO" as const;

export type TodoAction =
  | ReturnType<typeof createTodo>
  | ReturnType<typeof changeTodo>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof insertText>
  | ReturnType<typeof initTodo>;

export type Todo = {
  id: number;
  content: string;
  complete: boolean;
};

export type TDefaultState = {
  todos: Todo[];
  text: string;
};
