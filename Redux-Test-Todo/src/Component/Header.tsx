import React from "react";
import styled from "styled-components";

const Header = () => (
  <HeaderBox>
    <HeaderTitle>Hello Todo</HeaderTitle>
  </HeaderBox>
);

export default Header;

const HeaderBox = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 30px;
`;

const HeaderTitle = styled.h1`
  font-weight: bold;
  text-align: center;
  text-decoration-line: underline;
`;
