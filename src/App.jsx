import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/index";
import Registration from "./pages/Registration/index";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const colorPalette = ["#1C1F21", "#f6f7eb", "ED6D5A"];
  return (
    <div className=" relative">
      <Header isLogin={isLogin} />
      <div className=" min-h-screen py-6 ">
        <Routes>
          <Route index path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
