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
  padding: 40px 20px;
`;

const ListItem = styled.li`
  list-style: none;
  border-bottom: 1px solid black;
  padding: 10px;
  height: 20px;
  border-radius: 5px;
  margin: 20px 0;
`;

export const List = () => (
  <ListBox>
    <ListItem>Todo 1</ListItem>
    <ListItem>Todo 2</ListItem>
    <ListItem>Todo 3</ListItem>
  </ListBox>
);

export const Item = () => <ListItem>hello world</ListItem>;
