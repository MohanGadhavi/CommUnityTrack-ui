import { Button } from "@material-tailwind/react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/index";
import Registration from './pages/Registration/index'

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route index path="/" element={<Navigate to="/Login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
