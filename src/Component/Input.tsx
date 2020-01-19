import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { insertText, createTodo } from "../Store/types";

const InputContainer = ({ insertText, text, createTodo }) => {
  const handleChange = event => {
    const text = event.target.value;
    if (!text) return;
    insertText(text);
  };
  return (
    <InputBox>
      <Title>Insert!</Title>
      <TextInputStyle type="text" value={text} onChange={handleChange} />
      <ClickButton onClick={() => createTodo()}>Add</ClickButton>
    </InputBox>
  );
};

const mapToStateProps = state => ({
  text: state.createTodoStore.text
});

const mapDispatchToProps = dispatch => ({
  insertText: text => dispatch(insertText(text)),
  createTodo: () => dispatch(createTodo())
});

export default connect(mapToStateProps, mapDispatchToProps)(InputContainer);

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  height: 40px;
`;

const Title = styled.h1`
  width: 110px;
  margin-right: 10px;
  text-align: center;
  padding: 0 10px 0 0;
  margin: 0;
`;

const TextInputStyle = styled.input`
  width: 400px;
  height: 30px;
  border-radius: 5px;
  margin-right: 30px;
`;

export const ClickButton = styled.button`
  background-color: white;
  border-radius: 5px;
  font-size: 16px;
  color: white;
  background-color: skyblue;
  width: 80px;
`;
