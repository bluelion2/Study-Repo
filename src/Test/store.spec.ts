import {
  createTodo,
  changeTodo,
  deleteTodo,
  insertText,
  reducer,
  DefaultState
} from "../Store/Store";
import {
  CREATE_TODO,
  DELETE_TODO,
  CHANGE_TODO,
  INSERT_TEXT
} from "../Store/types";

describe("redux store test", () => {
  const text = "Insert text";

  it("init reducer test", () => {
    expect(reducer({}, { type: "" }).createTodoStore).toEqual(DefaultState);
  });

  describe("input에 입력할 때", () => {
    it("action test", () => {
      const expectedAction = {
        type: INSERT_TEXT,
        text
      };
      expect(insertText(text)).toEqual(expectedAction);
    });

    it("reducer test", () => {
      const expectedReducer = {
        ...DefaultState,
        text
      };
      expect(reducer({}, { type: INSERT_TEXT, text }).createTodoStore).toEqual(
        expectedReducer
      );
    });
  });

  describe("Todo를 만들때", () => {
    it("action test", () => {
      const expectedAction = {
        type: CREATE_TODO
      };
      expect(createTodo()).toEqual(expectedAction);
    });

    it("빈문자일때 test", () => {
      const expectedReducer = {
        ...DefaultState,
        todos: [
          {
            complete: false,
            content: "",
            id: 1
          }
        ]
      };
      expect(reducer({}, { type: CREATE_TODO }).createTodoStore).toEqual(
        expectedReducer
      );
    });
  });

  describe("완료 상태 바꾸는 test", () => {
    const content = "change text";
    beforeEach(() => {
      insertText(content);
      createTodo();
    });
    it("action test", () => {
      const expectedAction = {
        type: CHANGE_TODO,
        id: 1
      };
      expect(changeTodo(1)).toEqual(expectedAction);
    });

    it("action test", () => {
      const expectedReducer = {
        ...DefaultState,
        todos: [{ id: 1, content, complete: true }]
      };
      expect(reducer({}, { type: CHANGE_TODO, id: 1 }).createTodoStore).toEqual(
        expectedReducer
      );
    });
  });

  it("Delete Todo Test", () => {
    const expectedAction = {
      type: DELETE_TODO,
      id: 1
    };

    expect(deleteTodo(1)).toEqual(expectedAction);
  });
});
