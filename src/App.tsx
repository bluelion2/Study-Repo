import React from "react";
import "./App.scss";
import Header from "./Component/Header";
import InputContainer from "./Component/Input";
import TodoList from "./Component/TodoList";
import { useSelector, useDispatch } from "react-redux";
import {
  RootState,
  changeTodo,
  deleteTodo,
  insertText,
  createTodo
} from "./Store/Store";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { todos, text } = useSelector(
    (state: RootState) => state.createTodoStore
  );

  const onChange = (id: number) => {
    dispatch(changeTodo(id));
  };

  const onDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const onCreate = () => {
    dispatch(createTodo());
  };

  const onInsert = (text: string) => {
    dispatch(insertText(text));
  };

  return (
    <>
      <Header />
      <InputContainer text={text} onInsert={onInsert} onCreate={onCreate} />
      <TodoList todos={todos} onChange={onChange} onDelete={onDelete} />
    </>
  );
};

export default App;
