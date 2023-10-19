import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { MovieList } from "../pages/MovieList"
import { MovieDetail } from "../pages/MovieDetail"
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";

export const Assync = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList/>} />
        <Route path="/movie/:id" element={<MovieDetail/>} />
        <Route path="/regist" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  )
}
