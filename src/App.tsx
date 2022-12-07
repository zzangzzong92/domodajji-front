import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./pages/signIn";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
