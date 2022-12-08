import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
// import InputBox from "../components/InputBox";

const SignIn = () => {
  const navigate = useNavigate();
  const [buttonColor, setButtonColor] = useState<boolean>(false);
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");

  const emailInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };

  const passwordInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
  };

  const onClickSignUp = () => {
    navigate("/signup");
  };

  const onClickFindIp = () => {
    navigate("/findid");
  };

  const onClickFindPw = () => {
    navigate("/findpw");
  };

  useEffect(() => {
    if (emailInput && passwordInput) {
      setButtonColor(true);
    } else {
      setButtonColor(false);
    }
  }, [emailInput, passwordInput]);

  return (
    <SignInContainer>
      <SignInSpanSection>
        <TomodajjiLogo>토모다찌</TomodajjiLogo>
        <TomodajjiIntro>우리끼리만 은밀하게</TomodajjiIntro>
      </SignInSpanSection>
      <Form>
        <SignInFormSection>
          <EmailInput
            type="email"
            value={emailInput}
            placeholder="이메일을 입력해주세요"
            required
            autoComplete="true"
            onChange={emailInputHandler}
          />
          <PasswordInput
            type="password"
            value={passwordInput}
            placeholder="비밀번호를 입력해주세요"
            required
            autoComplete="false"
            onChange={passwordInputHandler}
          />
          <SignInButton state={buttonColor}>로그인</SignInButton>
        </SignInFormSection>
      </Form>

      <FindInfoSection>
        <SignUp onClick={onClickSignUp}>회원가입</SignUp>
        <Wall>|</Wall>
        <FindId onClick={onClickFindIp}>아이디찾기</FindId>
        <Wall>|</Wall>
        <FindPw onClick={onClickFindPw}>비밀번호찾기</FindPw>
      </FindInfoSection>

      <Horizontal />

      <SnsSection>
        <KakaoButton></KakaoButton>
        <NaverButton></NaverButton>
        <GoogleButton></GoogleButton>
      </SnsSection>
    </SignInContainer>
  );
};

export default SignIn;

const SignInContainer = styled.div`
  width: 568px;
  height: 488px;
  margin: 156px auto;
  position: relative;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

//로고섹션
const SignInSpanSection = styled.section`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const TomodajjiLogo = styled.div`
  width: 80%;
  margin: 30px 0 20px 55px;
  text-align: center;
  display: block;
  font-size: 50px;
`;

const TomodajjiIntro = styled.p`
  font-size: 14px;
  margin: 0 0 20px 175px;
`;

//폼 섹션
const SignInFormSection = styled.section`
  width: 80%;
  flex-direction: column;
  margin: 0 atuo;
`;

const EmailInput = styled.input`
  width: 100%;
  padding: 14px 16px;
  margin-bottom: 20px;
  background-color: #f5f7fa;
  outline: none;
  border: none;

  :focus {
    border-bottom: 2px solid blue;
  }
`;

const PasswordInput = styled.input`
  width: 100%;
  padding: 14px 16px;
  background-color: #f5f7fa;
  outline: none;
  border: none;

  :focus {
    border-bottom: 2px solid blue;
  }
`;

const SignInButton = styled.div<{ state: boolean }>`
  width: 182px;
  height: 36px;
  margin: 20px auto;
  background: #c8d1e0;
  border-radius: 24px;
  text-align: center;
  font-family: "NanumSquare_ac";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 36px;
  background: ${(props) => (props.state ? "#f44016" : "#C8D1E0")};
  color: #ffffff;
  cursor: pointer;
`;

//나머지 섹션
const FindInfoSection = styled.section`
  width: 245px;
  display: flex;
  margin: 10px auto;
  justify-content: space-around;
  color: #58606e;
`;

const SignUp = styled.span`
  cursor: pointer;
`;
const FindId = styled.span`
  cursor: pointer;
`;
const FindPw = styled.span`
  cursor: pointer;
`;

const Wall = styled.div``;

const Horizontal = styled.hr`
  width: 80%;
  height: 2px;
  margin: 20px auto;
  background-color: 1px solid gray;
`;

//소셜로그인섹션
const SnsSection = styled.section`
  width: 300px;
  display: flex;
  margin: 30px auto;
  justify-content: space-around;
`;

const KakaoButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;
const NaverButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;
const GoogleButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;
