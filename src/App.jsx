import "./App.css"; // Make sure this path is correct
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
import { Alert } from "@material-tailwind/react";
import Wrapper from "./components/Wrapper";
import Events from "./pages/Events";
import { getRouteList } from "./routes/AppRoute";

function App() {
  const [loading, setloading] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const token = localStorage.getItem("authToken");
      if (token) {
        try {
          console.log("Fethingggggggggggggggggg");

          // Optionally verify the token by making a request to the server
          api
            .get("/user/verify-token")
            .then((res) => {
              console.log("resssssssssssss ", res);
              dispatch(loginSuccess(res.data.user));
              setloading(false);
              navigate("/home", { replace: true }); // Redirect to logi
            })
            .catch(() => {
              localStorage.removeItem("authToken"); // Remove invalid token
              dispatch(logout());
              setloading(false);
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
        setloading(false);
        navigate("/login", { replace: true });
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  const isAuthenticated = () =>
    useSelector((state) => state.auth.isAuthenticated);
  console.log("isAuthenticated::::: ", isAuthenticated());

  const routeList = getRouteList(isAuthenticated());

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-teal-100 to-cyan-100">
        <div className="w-max">
          <h1 className="project-title text-7xl font-bold text-teal-700 animate-typing whitespace-nowrap overflow-hidden border-r-4 border-r-teal-700 pr-5">
            Community Track
          </h1>
        </div>
        <p className="text-xl mt-2 text-teal-700 animate-fadeIn">
          Empowering Communities, Every Effort Counts
        </p>
        <div className="mt-5 spinner"></div>
      </div>
    );
  }

  return (
    // <div className=" flex">
    //   <>
    //     {isAuthenticated && <Header isLogin={isAuthenticated} />}
    //     <div className=" min-h-screen w-full bg-gray-50 ">
    //       <Routes>
    //         <Route
    //           index
    //           path="/"
    //           element={
    //             isAuthenticated ? (
    //               <Navigate to="/home" />
    //             ) : (
    //               <Navigate to="/login" />
    //             )
    //           }
    //         />
    //         <Route path="/login" element={<Login />} />
    //         <Route
    //           path="/home"
    //           element={
    //             <ProtectedRoute>
    //               {" "}
    //               <HomePage />
    //             </ProtectedRoute>
    //           }
    //         />

    //         {/* <Route path="/notificaions" element={<div></div>} /> */}
    //         <Route path="/tasks" element={<Tasks />} />
    //         <Route path="/events" element={<Event />} />
    //         <Route path="/dashboard" element={<Dashboard />} />
    //         <Route path="/registration" element={<Registration />} />

    //         {/* Catch-all for undefined routes */}
    //         <Route path="*" element={<Navigate to="/" />} />
    //       </Routes>
    //     </div>
    //     {/* <Footer /> */}
    //   </>
    // </div>
    <div className=" ">
      <Routes>
        {/* <Route
        path="/login"
        element={!isAuthenticated() ? <Login /> : <Navigate to="/home" />}
      />
      <Route
        path="/"
        element={isAuthenticated() ? <Wrapper /> : <Navigate to="/login" />}
      >
        <Route path="/home" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/events" element={<Events />} />
      </Route> */}

        {routeList.map((route, i) =>
          route.children && route.children.length > 0 ? (
            <Route key={i} path={route.path} element={route.element}>
              {route.children.map((child, i) => (
                <Route key={i} path={child.path} element={child.element} />
              ))}
            </Route>
          ) : (
            <Route key={i} path={route.path} element={route.element} />
          )
        )}
      </Routes>
    </div>
    // <Wrapper />
  );
}

export default App;
