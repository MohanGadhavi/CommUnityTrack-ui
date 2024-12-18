import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from "./pages/Login/index";
import Registration from "./pages/Registration/index";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import { useState } from "react";
import Tasks from "./pages/Tasks";
import Event from "./pages/Events";
import Dashboard from "./pages/Dashboard";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log("isAuthenticated::::: ", isAuthenticated);

  return (
    <div className=" flex">
      <>
        {isAuthenticated && <Header isLogin={isAuthenticated} />}
        <div className=" min-h-screen w-full bg-gray-50 ">
          <Routes>
            <Route
              index
              path="/"
              element={
                isAuthenticated ? (
                  <Navigate to="/home" />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<HomePage />} />

            <Route path="/notificaions" element={<div></div>} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/events" element={<Event />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/registration" element={<Registration />} />

            {/* Catch-all for undefined routes */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </>
    </div>
  );
}

export default App;
