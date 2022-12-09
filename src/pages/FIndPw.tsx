import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const FindPw = () => {
  const navigate = useNavigate();

  const signInHandler = () => {
    navigate("/");
  };

  const findIdHandler = () => {
    navigate("/findid");
  };

  const authenticationHandler = () => {
    if (!EmailInput) {
      return alert("가입하신 이메일 주소를 입력해주세요");
    }
    //여기에 pass Api 로직 들어가야함
    alert("인증 준비중 입니다");
  };

  return (
    <FindIdContainer>
      <Title>비밀번호 찾기</Title>
      <FindIdSpan>토모다찌의 비밀번호를 잊어버리셨나요?</FindIdSpan>
      <EmailInput
        type="email"
        placeholder="이메일을 입력해주세요"

        //onKeyPress={e => {
      />

      <ExplainFindPw>
        토모다찌에 가입하신 이메일 주소를 입력해주세요
      </ExplainFindPw>

      <AuthenticationButton onClick={authenticationHandler}>
        인증하기
      </AuthenticationButton>

      <OtherButtonSection>
        <GotoSignIn onClick={signInHandler}>로그인</GotoSignIn>
        <Wall>|</Wall>
        <GotoFindPw onClick={findIdHandler}>아이디 찾기</GotoFindPw>
      </OtherButtonSection>
    </FindIdContainer>
  );
};

export default FindPw;

const FindIdContainer = styled.div`
  width: 568px;
  height: 488px;
  display: flex;
  margin: 156px auto;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin: 60px auto;
  margin-bottom: 20px;
`;

const FindIdSpan = styled.span`
  margin: 0 auto;
  font-size: 400;
`;

const EmailInput = styled.input`
  width: 50%;
  padding: 14px 16px;
  margin: 30px auto;
  background-color: #f5f7fa;
  outline: none;
  border: none;

  :focus {
    border-bottom: 2px solid blue;
  }
`;

const ExplainFindPw = styled.span`
  margin: 20px auto;
  text-align: center;
  font-size: 12px;
`;

const AuthenticationButton = styled.div`
  width: 182px;
  height: 36px;
  margin: 10px auto;
  margin-bottom: 0;
  border-radius: 24px;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  line-height: 36px;
  color: #ffffff;
  background: skyblue;
  cursor: pointer;
`;

const OtherButtonSection = styled.div`
  margin: 30px auto;
  width: 200px;
  display: flex;
  justify-content: space-around;
`;

const GotoSignIn = styled.span`
  cursor: pointer;
`;

const GotoFindPw = styled.span`
  cursor: pointer;
`;

const Wall = styled.div``;
