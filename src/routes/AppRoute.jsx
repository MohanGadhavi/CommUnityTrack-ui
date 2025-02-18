import Wrapper from "../components/Wrapper";
import Dashboard from "../pages/Dashboard";
import Events from "../pages/Events";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Tasks from "../pages/Tasks";
import Logout from "../components/Logout";
import { Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faChartSimple,
  faCheckSquare,
  faHome,
  faTableColumns,
  faUser,
  faUserPlus,
  faUserXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

export const getRouteList = (isAuthenticated) => {
  return [
    {
      name: "Login",
      path: "/login",
      element: !isAuthenticated ? <Login /> : <Navigate to="/home" />,
      iconName: <FontAwesomeIcon icon={faUser} className="" />,
      children: [],
    },
    {
      name: "",
      path: "/",
      element: isAuthenticated ? <Wrapper /> : <Navigate to="/login" />,
      iconName: <FontAwesomeIcon icon={faTableColumns} className="" />,
      children: [
        {
          name: "Home",
          path: "/home",
          element: <HomePage />,
          iconName: <FontAwesomeIcon icon={faHome} className="" />,
          children: [],
        },
        {
          name: "Notifications",
          path: "/notifications",
          element: <div> Notification </div>,
          iconName: <FontAwesomeIcon icon={faBell} className="" />,
          children: [],
        },
        {
          name: "Dashboard",

          path: "/dashboard",
          element: <Dashboard />,
          iconName: <FontAwesomeIcon icon={faChartSimple} className="" />,
          children: [],
        },
        {
          name: "Tasks",

          path: "/tasks",
          element: <Tasks />,
          iconName: <FontAwesomeIcon icon={faCheckSquare} className="" />,
          children: [],
        },
        {
          name: "Events",
          path: "/events",
          element: <Events />,
          iconName: <FontAwesomeIcon icon={faCalendarDays} className="" />,
          children: [],
        },
        {
          name: "Registration",
          path: "/registration",
          element: <Registration />,
          iconName: <FontAwesomeIcon icon={faUserPlus} className="" />,
          children: [],
        },
      ],
    },
    {
      name: "Logout",
      path: "/logout",
      element: isAuthenticated ? <Logout /> : <Navigate to="/login" />,
      iconName: <FontAwesomeIcon icon={faUserXmark} className="" />,
      children: [],
    },
  ];
};
