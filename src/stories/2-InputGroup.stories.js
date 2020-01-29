import React from "react";
import styled from "styled-components";

const InputBox = styled.input`
  border: 1px solid #c11b1b;
  box-sizing: border-box;
  height: 58px;
  width: 600px;
`;

const ButtonBox = styled.button`
  width: 127px;
  height: 58px;
  background: #524d4d;
  border-radius: 10px;
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 34px;
`;

const InputGroupBox = styled.div`
  display: flex;
`;

export const Input = () => <InputBox />;

export const Button = () => <ButtonBox>추가</ButtonBox>;

export const InputGroup = () => (
  <InputGroupBox>
    <InputBox />
    <ButtonBox>추가</ButtonBox>;
  </InputGroupBox>
);

export default {
  title: "Input Group"
};
