import React from "react";
import styled from "styled-components";

export default {
  title: "Header"
};

const HeaderBox = styled.div`
  height: 50px;
`;

const HeaderTitle = styled.h1`
  font-weight: bold;
  text-align: center;
  text-decoration-line: underline;
`;

export const Header = () => (
  <HeaderBox>
    <HeaderTitle>Hello world</HeaderTitle>
  </HeaderBox>
);
