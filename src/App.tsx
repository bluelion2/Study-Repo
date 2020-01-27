import React from "react";
import "./App.scss";
import Header from "./Component/Header";
import InputContainer from "./Component/Input";
import TodoList from "./Component/TodoList";

const App: React.FC = () => (
  <>
    <Header />
    <InputContainer />
    <TodoList />
  </>
);

export default App;
