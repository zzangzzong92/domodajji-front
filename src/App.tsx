import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GroupCard from "./components/GroupCard";
import FindId from "./pages/account/FindId";
import FindPw from "./pages/account/FIndPw";
import ListPage from "./pages/ListPage";
import SignIn from "./pages/account/SignIn";
import SignUp from "./pages/account/SignUp";
import DashBoard from "pages/DashBoard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/findid" element={<FindId />} />
        <Route path="/findpw" element={<FindPw />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/card" element={<GroupCard grouInfo={undefined} />} />
        <Route path="/group/:id/*" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
