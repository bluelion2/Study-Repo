import { createTodo, changeTodo, deleteTodo, insertText } from "../Store/Store";
import {
  CREATE_TODO,
  DELETE_TODO,
  CHANGE_TODO,
  INSERT_TEXT
} from "../Store/types";

describe("redux store test", () => {
  const text = "Insert text";
  it("insert Todo test", () => {
    const expectedAction = {
      type: INSERT_TEXT,
      text
    };
    expect(insertText(text)).toEqual(expectedAction);
  });

  it("Create Todo test", () => {
    insertText(text);
    const expectedAction = {
      type: CREATE_TODO
    };
    expect(createTodo()).toEqual(expectedAction);
  });

  it("Change Todo test", () => {
    const expectedAction = {
      type: CHANGE_TODO,
      id: 1
    };
    expect(changeTodo(1)).toEqual(expectedAction);
  });

  it("Delete Todo Test", () => {
    const expectedAction = {
      type: DELETE_TODO,
      id: 1
    };

    expect(deleteTodo(1)).toEqual(expectedAction);
  });
});
