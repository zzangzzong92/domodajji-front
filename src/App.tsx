import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FindId from "./pages/FindId";
import FindPw from "./pages/FIndPw";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/findid" element={<FindId />} />
        <Route path="/findpw" element={<FindPw />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
