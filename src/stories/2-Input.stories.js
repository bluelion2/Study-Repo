import React from "react";
import styled from "styled-components";

const InputBox = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  min-height: 200px;
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const Title = styled.h1`
  width: 10%;
  margin-right: 10px;
  text-align: center;
  padding: 0 10px 0 0;
  margin: 0;
`;

const TextInputStyle = styled.input`
  width: 90%;
  height: 30px;
  border-radius: 5px;
`;

export const TextInputBox = () => <InputBox />;

export const InputTitle = () => <Title>Insert</Title>;

export const TextInput = () => <TextInputStyle type="text" />;

export const Complete = () => (
  <InputBox>
    <InputTitle />
    <TextInput />
  </InputBox>
);

export default {
  title: "Title with Input"
};
