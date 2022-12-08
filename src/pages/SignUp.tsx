import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const SignUp = () => {
  const navigate = useNavigate();
  const [nameInput, setNameInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");
  const [pwInput, setPwInput] = useState<string>("");
  const [pwCheckInput, setPwCheckInput] = useState<string>("");
  const [buttonColor, setButtonColor] = useState<boolean>(false);

  const nameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  };

  const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };

  const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPwInput(e.target.value);
  };

  const passwordCheckHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPwCheckInput(e.target.value);
  };

  const onClickSignInHanlder = () => {
    navigate("/");
  };

  useEffect(() => {
    if (nameInput && emailInput && pwInput === pwCheckInput) {
      setButtonColor(true);
    } else if (pwInput !== pwCheckInput) {
      setButtonColor(false);
    }
  }, [nameInput, emailInput, pwInput, pwCheckInput]);

  return (
    <SignUpContainer>
      <Title>Sign up</Title>
      <Form>
        <NameInput
          type="text"
          placeholder="성함을 입력해주세요"
          required
          onChange={nameHandler}
        />
        <EmailInput
          type="email"
          placeholder="이메일을 입력해주세요"
          required
          onChange={emailHandler}
        />
        <PasswordInput
          type="password"
          placeholder="비밀번호를 입력해주세요"
          required
          onChange={passwordHandler}
        />
        <PasswordCheckInput
          type="password"
          placeholder="비밀번호를 한번 더 입력해주세요"
          required
          onChange={passwordCheckHandler}
        />
      </Form>
      <ConfirmButton state={buttonColor}>회원가입</ConfirmButton>
      <InduceLogin>
        <AlreadyAccount>아이디가 있으신가요?</AlreadyAccount>
        <GotoSignIn onClick={onClickSignInHanlder}>로그인하기</GotoSignIn>
      </InduceLogin>
    </SignUpContainer>
  );
};

export default SignUp;

const SignUpContainer = styled.div`
  width: 412px;
  height: 506px;
  margin: 127px auto;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  user-select: none;
`;

const Title = styled.div`
  width: fit-content;
  font-size: 30px;
  margin: 60px 0 10px 40px;
`;

const Form = styled.form``;

const NameInput = styled.input`
  width: 80%;
  padding: 14px 16px;
  margin: 20px 0 20px 40px;
  background-color: #f5f7fa;
  outline: none;
  border: none;

  :focus {
    border-bottom: 2px solid blue;
  }
`;

const EmailInput = styled.input`
  width: 80%;
  padding: 14px 16px;
  margin: 0 0 20px 40px;
  background-color: #f5f7fa;
  outline: none;
  border: none;

  :focus {
    border-bottom: 2px solid blue;
  }
`;

const PasswordInput = styled.input`
  width: 80%;
  padding: 14px 16px;
  margin: 0 0 20px 40px;
  background-color: #f5f7fa;
  outline: none;
  border: none;

  :focus {
    border-bottom: 2px solid blue;
  }
`;

const PasswordCheckInput = styled.input`
  width: 80%;
  padding: 14px 16px;
  margin: 0 0 0 40px;
  background-color: #f5f7fa;
  outline: none;
  border: none;

  :focus {
    border-bottom: 2px solid blue;
  }
`;

const ConfirmButton = styled.div<{ state: boolean }>`
  width: 320px;
  height: 36px;
  margin: 40px auto;
  line-height: 36px;
  text-align: center;
  color: #ffffff;
  border-radius: 24px;
  background-color: ${(props) => (props.state ? "blue" : "green")};
  cursor: pointer;
`;

const InduceLogin = styled.div`
  width: 80%;
  text-align: center;
  display: flex;
`;

const AlreadyAccount = styled.span`
  margin-left: 112px;
  font-family: "NanumSquare_ac";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #58606e;
`;

const GotoSignIn = styled.span`
  margin-left: 15px;
  font-family: "NanumSquare_ac";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #58606e;
  cursor: pointer;
`;
