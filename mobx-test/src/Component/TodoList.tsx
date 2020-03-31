import React from "react";
import styled from "styled-components";
import { ClickButton } from "./Input";
import { Todo } from "../Store/types";

type Props = {
  todos: Todo[];
  onChange: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoList = ({ todos, onChange, onDelete }: Props) => {
  return (
    <ListBox className="todo-list">
      {todos.map(todo => (
        <ListItem
          key={todo.id}
          complete={todo.complete ? "none" : "line-through"}
        >
          {todo.id} | {todo.content}
          <div>
            <ClickButton className="change" onClick={() => onChange(todo.id)}>
              {todo.complete ? "Complete" : "Back"}
            </ClickButton>
            <ClickButton className="delete" onClick={() => onDelete(todo.id)}>
              Delete
            </ClickButton>
          </div>
        </ListItem>
      ))}
    </ListBox>
  );
};

export default TodoList;

const ListBox = styled.ul`
  list-style: none;
  margin: auto;
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
  text-decoration: ${({ complete }: { complete: string }) => complete};
  display: flex;
  justify-content: space-between;
  button {
    margin-right: 10px;
  }
`;
