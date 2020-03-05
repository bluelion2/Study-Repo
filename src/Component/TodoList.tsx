// @ts-nocheck
import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { changeTodo, deleteTodo } from "../Store/types";
import { ClickButton } from "./Input";

const TodoList = ({ todos, changeTodo, deleteTodo }) => {
  return (
    <ListBox className="todo-list">
      {todos.map(todo => (
        <ListItem
          key={todo.id}
          complete={todo.complete ? "none" : "line-through"}
        >
          {todo.id} | {todo.content}
          <div>
            <ClickButton className="change" onClick={() => changeTodo(todo.id)}>
              {todo.complete ? "Complete" : "Back"}
            </ClickButton>
            <ClickButton className="delete" onClick={() => deleteTodo(todo.id)}>
              Delete
            </ClickButton>
          </div>
        </ListItem>
      ))}
    </ListBox>
  );
};

const mapToStateProps = state => ({
  todos: state.createTodoStore.todos
});

const mapDispatchToProps = dispatch => ({
  changeTodo: id => dispatch(changeTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id))
});

export default connect(mapToStateProps, mapDispatchToProps)(TodoList);

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
  text-decoration: ${props => props?.complete};
  display: flex;
  justify-content: space-between;
  button {
    margin-right: 10px;
  }
`;
