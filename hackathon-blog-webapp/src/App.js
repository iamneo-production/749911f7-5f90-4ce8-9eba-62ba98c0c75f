import React from "react";
import { Route, Routes } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Layout from "./layout/Layout";

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createPost" element={<CreatePost/>} />
    </Route>
  </Routes>
);

export default App;
