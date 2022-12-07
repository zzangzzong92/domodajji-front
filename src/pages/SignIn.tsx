import React from "react";
import styled from "styled-components";
import InputBox from "../components/InputBox";

export const SignIn: React.FC = () => {
  return (
    <SignInContainer>
      <SignInSpanSection>
        <TomodajjiLogo>토모다찌</TomodajjiLogo>
        <TomodajjiIntro>우리끼리만 은밀하게</TomodajjiIntro>
      </SignInSpanSection>

      <SignInFormSection>
        <InputBox type="email" placeholder="Email" autoComplete={true} />
        <InputBox type="password" placeholder="Password" autoComplete={false} />
        {/* <InputBackground>
          <EmailInput type="email" placeholder="이메일" />
        </InputBackground>
        <InputBackground>
          <PwInput
            type="password"
            placeholder="비밀번호"
            autoComplete="false"
          />
        </InputBackground> */}
      </SignInFormSection>

      <FindInfoSection></FindInfoSection>
    </SignInContainer>
  );
};

const SignInContainer = styled.div`
  width: 568px;
  height: 488px;
  margin: 156px auto;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
`;

//로고섹션
const SignInSpanSection = styled.section`
  flex-direction: column;
`;

const TomodajjiLogo = styled.span`
  font-size: bold;
`;

const TomodajjiIntro = styled.p`
  font-size: 14px;
`;

//폼 섹션
const SignInFormSection = styled.span`
  flex-direction: column;
`;

//나머지 섹션
const FindInfoSection = styled.span`
  display: flex;
`;
