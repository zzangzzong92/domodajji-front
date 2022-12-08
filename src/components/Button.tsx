import React from "react";
import styled from "styled-components";

interface ButtonProps {
  title: string;
  width: string;
  height: string;
  onChange?: () => void;
}

const Button = ({ title, width, height, onChange }: ButtonProps) => {
  return (
    <ButtonContainer width={width} height={height} onChange={onChange}>
      <Title>{title}</Title>
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.div<{ width: string; height: string }>`
  width: ${(props) => (props.width ? props.width : "0")};
  height: ${(props) => (props.height ? props.height : "0")};
  margin: 14px 0 0 18px;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 16px;
`;
