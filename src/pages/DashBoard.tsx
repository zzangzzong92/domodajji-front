import DashboardNav from "components/DashboardNav";
import React from "react";
import { Route, Routes } from "react-router";
import styled from "styled-components";
import AccountBook from "./dashboard/AccountBook";
import Album from "./dashboard/Album";
import Reservation from "./dashboard/Reservation";
import Setting from "./dashboard/Setting";

const DashBoard: React.FC = () => {
  return (
    <DashBoardLayout>
      <DashboardNav />
      <DashBoardTopSection></DashBoardTopSection>
      <Routes>
        <Route path="reservation" element={<Reservation />} />
        <Route path="album" element={<Album />} />
        <Route path="accountbook" element={<AccountBook />} />
        <Route path="setting" element={<Setting />} />
      </Routes>
    </DashBoardLayout>
  );
};

export default DashBoard;

const DashBoardLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  border: 1px solid black;
`;

const DashBoardTopSection = styled.div`
  display: flex;
`;
