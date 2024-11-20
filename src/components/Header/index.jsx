import React from "react";
import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBell,
  faChartSimple,
  faCheckDouble,
  faHome,
  faTableColumns,
  faCalendar,
  faCalendarCheck,
  faCalendarDay,
  faCalendarDays,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";

// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
  },
  {
    label: "Edit Profile",
  },
  {
    label: "Inbox",
  },
  {
    label: "Help",
  },
  {
    label: "Sign Out",
  },
];

const navigationList = [
  {
    label: "Home",
    href: "/home",
    icon: <FontAwesomeIcon icon={faHome} className="text-base h-4 w-5" />,
  },
  {
    label: "Notification",
    href: "/notificaion",
    icon: (
      <FontAwesomeIcon icon={faBell} className="text-base h-4 w-5 mt-[2px]" />
    ),
  },
  {
    label: "Tasks",
    href: "/tasks",
    icon: (
      <FontAwesomeIcon
        icon={faCheckSquare}
        className="text-base h-4 w-5 mt-[2px]"
      />
    ),
  },
  {
    label: "Events",
    href: "/events",
    icon: (
      <FontAwesomeIcon
        icon={faCalendarDays}
        className="text-base h-4 w-5 mt-[2px]"
      />
    ),
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: (
      <FontAwesomeIcon
        icon={faChartSimple}
        className="text-base h-4 w-5 mt-[2px]"
      />
    ),
  },
];

const eventNameList = [
  "Leekly Meeting",
  "Samaya 2025",
  "Ankut 2025",
  "Hackathon",
];

function Header({ isLogin, heading }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigate = useNavigate();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className=" w-[25%] min-w-fit h-screen border border-r-gray-400 shadow-md sticky top-0">
      {/* Sidebar Header */}
      <div className=" h-14 p-2 flex items-center justify-between border-b ">
        <div className=" px-2 py-1 flex items-center gap-3 text-xl text-purple-600 hover:bg-gray-100 rounded-md cursor-pointer">
          <div className="px-2 py-1 rounded-md text-sm font-semibold bg-black/10">
            S
          </div>
          <div className=" py-1 flex items-center gap-2">
            <p className="truncate max-w-32">SnehalYuvakMandal</p>
            <FontAwesomeIcon icon={faAngleDown} className="font-thin text-sm" />
          </div>
        </div>
        <div className="hover:bg-gray-200 px-1 pt-1 rounded-md cursor-pointer">
          <FontAwesomeIcon
            icon={faTableColumns}
            className="text-lg text-black/70"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <ul className=" p-2 text-gray-700 border-b text-lg flex flex-col gap-2">
        {navigationList.map((nav, i) => (
          <li key={i} className="">
            <NavLink
              to={nav.href}
              className={`py-2 px-2 flex items-center gap-3 rounded-md text-base hover:bg-gray-100 cursor-pointer`}
              style={({ isActive }) =>
                isActive ? { background: "rgba(230,200,255,1)" } : {}
              }
            >
              {nav.icon}
              <p className="h-5">{nav.label}</p>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Project List */}
      <div className="py-4 px-2">
        <h3 className="text-base font- text-gray-800 px-2">Events</h3>
        <ul className="flex flex-col gap-2  mt-4">
          {eventNameList.map((eName, i) => (
            <li
              key={i}
              className=" p-2 rounded-md hover:bg-gray-100 flex items-center space-x-2 text-gray-700 cursor-pointer"
            >
              <span className="bg-gray-200 text-sm font-bold px-2 py-1 rounded-full uppercase">
                {String(eName).trim().charAt(0)}
              </span>
              <span>{eName}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
