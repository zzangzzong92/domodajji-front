import DashboardNav from "components/DashboardNav";
import React, { useEffect } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router";
import styled from "styled-components";
import Album from "./dashboard/Album";
import Home from "./dashboard/Home";
import Reservation from "./dashboard/Reservation";
import Setting from "./dashboard/Setting";

const DashBoard: React.FC = () => {
  const param = useParams();
  const navigator = useNavigate();
  useEffect(() => {
    if (param) {
      return navigator(`home`);
    }
  }, []);
  return (
    <DashBoardLayout>
      <DashboardNav />

      {/* Sub Routes */}
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="reservation" element={<Reservation />} />
        <Route path="album" element={<Album />} />
        <Route path="setting" element={<Setting />} />
      </Routes>
    </DashBoardLayout>
  );
};

export default DashBoard;

const DashBoardLayout = styled.div`
  width: 1300px;
  min-height: 100vh;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  background-color: #f7f7f7;
  box-shadow: 0 0 45px 0 rgb(0 0 0 / 12%);
`;
