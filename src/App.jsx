import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
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
import { loginSuccess, logout } from "../store/auth";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log("isAuthenticated::::: ", isAuthenticated);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
            navigate("/home", { replace: true }); // Redirect to logi
          })
          .catch(() => {
            localStorage.removeItem("authToken"); // Remove invalid token
            dispatch(logout());
            navigate("/login", { replace: true }); // Redirect to logi
            console.log("error while verifying token");
          });
      } catch (error) {
        console.log("Invalid token:", error);
        console.error("Invalid token:", error);
        localStorage.removeItem("authToken"); // Remove corrupted token
      }
    } else {
      // No token found, redirect to login
      navigate("/login", { replace: true });
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
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  {" "}
                  <HomePage />
                </ProtectedRoute>
              }
            />

            {/* <Route path="/notificaions" element={<div></div>} /> */}
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
