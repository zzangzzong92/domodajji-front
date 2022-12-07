import React from "react";
import styled from "styled-components";

interface InputBoxProps {
  type: string;
  placeholder: string;
  autoComplete: boolean;
  handleInput?: React.ChangeEventHandler<HTMLInputElement>;
}

const InputBox = ({
  type,
  placeholder,
  autoComplete,
  handleInput,
}: InputBoxProps) => {
  return (
    <InputBoxContainer>
      <Content
        type={type}
        placeholder={placeholder}
        autoComplete="true"
        required
        onChange={handleInput}
      />
    </InputBoxContainer>
  );
};

export default InputBox;

const InputBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 55px;
  border-radius: 4px;
  background-color: #ebeff5;
`;

const Content = styled.input`
  outline: none;
  border: none;
  margin-left: 10px;
  background-color: #ebeff5;
`;
