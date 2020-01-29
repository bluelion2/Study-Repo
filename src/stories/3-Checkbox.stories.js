import React from "react";
import styled from "styled-components";

const UncheckedBox = styled.div`
  border: 1px solid #000000;
  width: 40px;
  height: 40px;
`;

const CheckedBox = styled.span`
  display: inline-block;
  width: 40px;
  height: 40px;
  transform: rotate(45deg);
`;

const CheckedLeft = styled.div`
  position: absolute;
  width: 6px;
  height: 16px;
  background-color: #ccc;
  left: 20px;
  top: 10px;
`;

const CheckedRight = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: #ccc;
  left: 14px;
  top: 20px;
`;

export const Unchecked = () => <UncheckedBox />;

export const Checked = () => (
  <UncheckedBox>
    <CheckedBox>
      <CheckedLeft />
      <CheckedRight />
    </CheckedBox>
  </UncheckedBox>
);

export default {
  title: "CheckBox"
};
