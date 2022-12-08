import React from "react";
import styled from "styled-components";

interface InputBoxProps {
  type: string;
  placeholder: string;
  name: string;
  handleInput?: React.ChangeEventHandler<HTMLInputElement>;
}

const InputBox = ({ type, placeholder, name, handleInput }: InputBoxProps) => {
  return (
    <InputBoxContainer>
      <Content
        type={type}
        placeholder={placeholder}
        name={name}
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
  height: 46px;
  margin-bottom: 20px;
  border-radius: 4px;
  background-color: #ebeff5;
`;

const Content = styled.input`
  outline: none;
  border: none;
  padding: 14px 16px;
  background-color: #ebeff5;

  :focus {
    border-bottom: 2px solid blue;
  }
`;
