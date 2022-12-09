import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const FindId = () => {
  const navigate = useNavigate();

  const signInHandler = () => {
    navigate("/");
  };

  const findPwHandler = () => {
    navigate("/findpw");
  };

  const authenticationHandler = () => {
    //여기에 pass Api 로직 들어가야함
    alert("인증 준비중 입니다");
  };

  return (
    <FindIdContainer>
      <Title>아이디 찾기</Title>
      <FindIdSpan>토모다찌의 아이디를 잊어버리셨나요?</FindIdSpan>
      <FindIdIcon>🔒</FindIdIcon>
      <ExplainFindId>
        본인인증을 통해 <br />
        아이디(이메일)을 찾을 수 있습니다
      </ExplainFindId>

      <AuthenticationButton onClick={authenticationHandler}>
        인증하기
      </AuthenticationButton>

      <OtherButtonSection>
        <GotoSignIn onClick={signInHandler}>로그인</GotoSignIn>
        <Wall>|</Wall>
        <GotoFindPw onClick={findPwHandler}>비밀번호 찾기</GotoFindPw>
      </OtherButtonSection>
    </FindIdContainer>
  );
};

export default FindId;

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
  margin: 60px 0 20px 240px;
`;

const FindIdIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 30px auto;
  background-color: skyblue;
  text-align: center;
  line-height: 80px;
  font-size: 30px;
`;

const FindIdSpan = styled.span`
  margin: 0 auto;
  font-size: 400;
`;

const ExplainFindId = styled.span`
  margin: 15px auto;
  text-align: center;
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
