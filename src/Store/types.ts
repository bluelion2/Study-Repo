export const CREATE_TODO = "CREATE_TODO";
export const CHANGE_TODO = "CHANGE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const INSERT_TEXT = "INSERT_TEXT";

export const createTodo = () => ({ type: CREATE_TODO });
export const changeTodo = id => ({ type: CHANGE_TODO, id });
export const deleteTodo = id => ({ type: DELETE_TODO, id });
export const insertText = text => ({ type: INSERT_TEXT, text });
