import React from "react";
import styled from "styled-components";

const Container = props => <ContainerBox>{props.children}</ContainerBox>;

export default Container;

const ContainerBox = styled.main`
  height: 100vh;
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: lightslategrey;
`;
