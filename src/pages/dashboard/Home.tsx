import React, { FC } from "react";
import styled from "styled-components";

const Home: FC = () => {
  return (
    <HomeLayout>
      <DashboardTopContainer>
        <TopLeftSection>
          <LeftContent>
            {/* 멤버 */}
            <ContentTop>
              <MemberTitle>인원 수</MemberTitle>
              <MemberFullView>
                전체보기 <p>&gt;</p>
              </MemberFullView>
            </ContentTop>
            <ContentBottom>
              <MemberNumber>
                <p>4</p>명
              </MemberNumber>
            </ContentBottom>
          </LeftContent>
          {/* 약속 */}
          <LeftContent>
            <ReservationTitle>다음 만날 날짜</ReservationTitle>
            <ReservationDate>22년 1월 15일</ReservationDate>
          </LeftContent>
        </TopLeftSection>
        <TopRightSection>
          <NoticeSection>
            <NoticeTitle>공지사항</NoticeTitle>
          </NoticeSection>
        </TopRightSection>
      </DashboardTopContainer>
    </HomeLayout>
  );
};

export default Home;

const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const DashboardTopContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  padding-top: 2.2rem;
`;

const TopLeftSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;

const LeftContent = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  border: 0 solid #e7eaed;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0.95rem 2rem rgb(56 65 74 / 3%);

  :first-child {
    margin-bottom: 20px;
  }
`;

const ContentTop = styled.div`
  display: flex;
  margin-bottom: 60px;
  justify-content: space-between;
`;

const MemberTitle = styled.span`
  font-size: 20px;
`;

const MemberFullView = styled.span`
  display: flex;
  font-size: 14px;
  color: #526dee;
  cursor: pointer;

  p {
    font-size: 20px;
  }
`;

const ContentBottom = styled.div`
  display: flex;
  padding-left: 0.2rem;
`;

const MemberNumber = styled.span`
  display: flex;
  font-size: 20px;

  p {
    font-size: 14px;
    color: #526dee;
    margin-top: -5px;
    margin-right: 10px;
  }
`;

const ReservationTitle = styled.span`
  font-size: 20px;
  margin-bottom: 60px;
`;

const ReservationDate = styled.span`
  font-size: 20px;
  color: #526dee;
`;

const TopRightSection = styled.div`
  width: 50%;
  padding: 1.5rem;
`;

const NoticeSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.2rem;
  border: 0 solid #e7eaed;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0.95rem 2rem rgb(56 65 74 / 3%);
`;

const NoticeTitle = styled.span`
  font-size: 20px;
`;
