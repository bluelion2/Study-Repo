import React from "react";
import styled from "styled-components";

type Props = {
  onInsert: (text: string) => void;
  text: string;
  onCreate: () => void;
};

const InputContainer = ({ onInsert, text, onCreate }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    if (!text) return;
    onInsert(text);
  };
  return (
    <InputBox>
      <Title>Insert!</Title>
      <TextInputStyle
        className="input"
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Insert Todo"
      />
      <ClickButton className="add" onClick={() => onCreate()}>
        Add
      </ClickButton>
    </InputBox>
  );
};

export default InputContainer;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  height: 40px;
`;

const Title = styled.h2`
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
