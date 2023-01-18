import React from "react";
import { Route, Routes } from "react-router-dom";

import { Main } from "./Pages/Main/Main";
import { Login } from "./Pages/Login/Login";
import { Registration } from "./Pages/Registration/Registration";

import "./App.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
};
export default App;
