import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

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

  const SignInHandler = async () => {
    if (!emailInput) {
      return alert("이메일을 입력해주세요");
    } else if (!passwordInput) {
      return alert("비밀번호를 입력해주세요");
    }
    try {
      const response = await axios.post("loginurl", {
        email: emailInput,
        password: passwordInput,
      });
      if (response.status === 200) {
        localStorage.setItem("access_token", response.data.access_token);
        navigate("/list");
      }
    } catch (error) {
      console.log("로그인에 실패하였습니다.", error);
    }
  };

  useEffect(() => {
    if (emailInput && passwordInput) {
      setButtonColor(true);
    } else {
      setButtonColor(false);
    }
  }, [emailInput, passwordInput]);

  return (
    <SignInLayout>
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
          <SignInButton state={buttonColor} onClick={SignInHandler}>
            로그인
          </SignInButton>
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
        <KakaoLoginButton></KakaoLoginButton>
      </SnsSection>
    </SignInLayout>
  );
};

export default SignIn;

const SignInLayout = styled.div`
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
    border-bottom: 1px solid #526dee;
  }
`;

const PasswordInput = styled.input`
  width: 100%;
  padding: 14px 16px;
  background-color: #f5f7fa;
  outline: none;
  border: none;

  :focus {
    border-bottom: 1px solid #526dee;
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
  background: ${(props) => (props.state ? "#526dee" : "#C8D1E0")};
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
  height: 52px;
  display: flex;
  margin: 30px auto;
  border-radius: 4px;
  justify-content: space-around;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

const KakaoLoginButton = styled.button``;
