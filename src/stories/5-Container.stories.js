import React from "react";
import styled from "styled-components";

export default {
  title: "Container"
};

export const Container = () => <ContainerBox />;

const ContainerBox = styled.main`
  background-color: lightgray;
  height: 100%;
  width: 100%;
  min-height: 600px;
`;
