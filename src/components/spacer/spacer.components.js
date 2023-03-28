import React from "react";
import styled from "styled-components/native";

const spaceVariant = {
  small: "8px",
  medium: "16px",
  large: "32px",
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position, sapce) => {
  const property = positionVariant[position];
  const value = spaceVariant[sapce];
  return `${property}:${value}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position, space, children }) => {
  const variant = getVariant(position, space);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
