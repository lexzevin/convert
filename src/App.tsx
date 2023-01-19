import React from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "./Pages/Login/Login";
import { Registration } from "./Pages/Registration/Registration";
import { Main } from "./Pages/Main/Main";

import "./App.scss";

const App = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/login" element={<Login />} />
    <Route path="/registration" element={<Registration />} />
  </Routes>
);

export default App;
