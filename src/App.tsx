import React from "react";
import "./App.css";
import Container from "./Container/Container";
import InputContainer from "./Component/Input";
import Header from "./Component/Header";
import TodoList from "./Component/TodoList";

const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <InputContainer />
      <TodoList />
    </Container>
  );
};

export default App;
