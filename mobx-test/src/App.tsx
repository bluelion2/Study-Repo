import React, { useEffect } from "react";
import Header from "./Component/Header";
import { getData } from "./apis";

const App: React.FC = () => {
  const axiosGetTodos = async () => {
    const {
      data: { todos }
    } = await getData();
  };

  useEffect(() => {
    axiosGetTodos();
  }, []);

  return (
    <>
      <Header />
      {/* <InputContainer text={text} onInsert={onInsert} onCreate={onCreate} />
      <TodoList todos={todos} onChange={onChange} onDelete={onDelete} /> */}
    </>
  );
};

export default App;
