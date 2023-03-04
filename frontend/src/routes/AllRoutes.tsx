import React from "react";
import { Routes, Route } from "react-router-dom";
import Difficulty from "../Pages/Difficulty";
import Game from "../Pages/Game";
import Home from "../Pages/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game/:condition" element={<Game />} />
      <Route path="/level" element={<Difficulty />} />
    </Routes>
  );
};

export default AllRoutes;
