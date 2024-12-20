import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from "./pages/Login/index";
import Registration from "./pages/Registration/index";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import { useEffect, useState } from "react";
import Tasks from "./pages/Tasks";
import Event from "./pages/Events";
import Dashboard from "./pages/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import api from "./utils/api";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log("isAuthenticated::::: ", isAuthenticated);

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      try {
        // Optionally verify the token by making a request to the server
        api
          .get("/user/verify-token")
          .then((res) => {
            console.log("resssssssssssss ", res);
            dispatch(loginSuccess(res.data.user));
          })
          .catch(() => {
            localStorage.removeItem("authToken"); // Remove invalid token
            console.log("error while verifying token");
          });
      } catch (error) {
        console.log("Invalid token:", error);
        console.error("Invalid token:", error);
        localStorage.removeItem("authToken"); // Remove corrupted token
      }
    }
  }, [dispatch]);

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
