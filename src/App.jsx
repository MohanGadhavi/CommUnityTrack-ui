import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/index";
import Registration from "./pages/Registration/index";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import { useState } from "react";
import Tasks from "./pages/Tasks";
import Event from "./pages/Events";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const colorPalette = ["#1C1F21", "#f6f7eb", "ED6D5A"];
  return (
    <div className=" relative">
      <Header isLogin={isLogin} />
      <div className=" min-h-screen py-6 px-6 ">
        <Routes>
          <Route index path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />

          <Route path="/home" element={<HomePage />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/events" element={<Event />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/home" element={<HomePage />} /> */}
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
