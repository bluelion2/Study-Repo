import React from "react";
import styled from "styled-components";

export default {
  title: "List"
};

const ListBox = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

const ListItem = styled.li`
  list-style: none;
  border-bottom: 1px solid black;
  padding: 10px;
  height: 20px;
  border-radius: 5px;
  margin: 20px 0;
`;

const LineItem = styled.li`
  list-style: none;
  border-bottom: 1px solid black;
  padding: 10px;
  height: 20px;
  border-radius: 5px;
  margin: 20px 0;
  text-decoration: line-through;
`;

export const List = () => (
  <ListBox>
    <ListItem>Todo 1</ListItem>
    <ListItem>Todo 2</ListItem>
    <LineItem>Todo 3</LineItem>
  </ListBox>
);

export const Item = () => <ListItem>hello world</ListItem>;
