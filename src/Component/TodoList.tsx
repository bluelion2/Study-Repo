// @ts-nocheck
import React from "react";
import styled from "styled-components";

const TodoList = () => {
  const todos = [
    { id: 1, content: "html", complete: false },
    { id: 2, content: "css", complete: true },
    { id: 3, content: "JS", complete: false }
  ];
  return (
    <ListBox>
      {todos.map(todo => (
        <ListItem
          onClick={() => console.log("click", todo.id)}
          key={todo.id}
          complete={todo.complete ? "none" : "line-through"}
        >
          {todo.id} | {todo.content}
        </ListItem>
      ))}
    </ListBox>
  );
};

const ListBox = styled.ul`
  list-style: none;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 40px 20px;
  width: 600px;
`;

const ListItem = styled.li`
  list-style: none;
  border-bottom: 1px solid black;
  padding: 10px;
  height: 20px;
  border-radius: 5px;
  margin: 20px 0;
  text-decoration: ${props => props?.complete};
`;

export default TodoList;
