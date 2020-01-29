import React from "react";
import styled from "styled-components";

const ContainerBox = styled.main`
  background-color: #dfd7d7;
  border-radius: 22px;
  height: 596px;
  width: 800px;
  display: flex;
  justify-content: center;
`;

const TitleBox = styled.h1`
  font-size: 36px;
  line-height: 42px;
  display: flex;
  text-align: center;
`;

export const Container = () => (
  <ContainerBox>
    <TitleBox>Test Todo</TitleBox>
  </ContainerBox>
);

export default {
  title: "Container"
};
