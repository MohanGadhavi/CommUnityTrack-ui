import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/index";
import Registration from "./pages/Registration/index";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen relative">
      <Header isLogin />
      <Routes>
        <Route index path="/" element={<Navigate to="/Login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
