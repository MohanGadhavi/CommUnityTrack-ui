import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Avatar,
  Button,
  Dialog,
  DialogBody,
  List,
  ListItem,
  ListItemPrefix,
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
  faHome,
  faTableColumns,
  faCalendarDays,
  faCheckSquare,
  faPerson,
  faGear,
  faPowerOff,
  faUser,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import api from "../../utils/api";
import { logout } from "../../../store/auth";
import UserProfile from "../../pages/UserProfile/UserProfile";

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
    label: "Notifications",
    href: "/notificaions",
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
  "Weekly Meeting",
  "Samaya 2025",
  "Ankut 2025",
  "Hackathon",
];

// function UserProfile({ userName, ppUrl }) {
//   const [openProfile, setOpenProfile] = useState(false);
//   const [confirmLogout, setConfirmLogout] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleLogout = async () => {
//     try {
//       setLoading(true);
//       await api
//         .get("/user/logout")
//         .then((res) => {
//           console.log("LogOutresssssssssssss ", res);
//         })
//         .catch(() => {
//           // localStorage.removeItem("authToken"); // Remove invalid token
//         });
//       dispatch(logout());
//       localStorage.removeItem("authToken");
//       navigate("/"); // Redirect to login
//       setConfirmLogout(!confirmLogout);
//     } catch (error) {
//       console.error("Logout error: ", error);
//       // localStorage.removeItem("authToken"); // Remove corrupted token
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   return (
//     <>
//       <Accordion
//         open={openProfile}
//         className={`  border border-gray-400 rounded-lg shadow-lg ${
//           openProfile ? "bg-purple-50 " : "bg-purple-50"
//         } `}
//         icon={
//           <FontAwesomeIcon
//             icon={faAngleDown}
//             className={` font-thin text-sm ${
//               openProfile ? "  " : " rotate-180 "
//             }`}
//           />
//         }
//         // onBlur={}
//       >
//         <AccordionHeader
//           onClick={() => setOpenProfile(!openProfile)}
//           className="p-2 px-3 border-none text-base w-full"
//         >
//           <div className="flex items-center gap-2">
//             <Avatar
//               className="w-8 h-8 outline outline-2 "
//               src={ppUrl}
//               alt="avatar"
//             />
//             <p className="text-lg ">{userName}</p>
//           </div>
//         </AccordionHeader>
//         <AccordionBody className="mt-2 p-0 pt-1 border-t border-gray-400 ">
//           <List className="px-1">
//             <ListItem className=" hover:bg-gray-300 active:bg-purple-100 focus:bg-transparent  focus:outline-gray-800 ">
//               <ListItemPrefix>
//                 <FontAwesomeIcon icon={faUser} className="font-thin text-sm" />
//               </ListItemPrefix>
//               My Profile
//             </ListItem>
//             <ListItem className=" hover:bg-gray-300 active:bg-purple-100 focus:bg-transparent  focus:outline-gray-800 ">
//               <ListItemPrefix>
//                 <FontAwesomeIcon icon={faGear} className="font-thin text-sm" />
//               </ListItemPrefix>
//               Edit Profile
//             </ListItem>
//             <hr className="bg-gray-400 h-0.5" />
//             <ListItem
//               className=" hover:bg-red-100 focus:bg-transparent focus:outline-red-800  text-red-500 focus:text-red-500 "
//               onClick={() => setConfirmLogout(!confirmLogout)}
//             >
//               <ListItemPrefix>
//                 <FontAwesomeIcon
//                   icon={faPowerOff}
//                   className="font-thin text-sm"
//                 />
//               </ListItemPrefix>
//               Log Out
//             </ListItem>
//           </List>
//         </AccordionBody>
//       </Accordion>
//       <Dialog
//         className="bg-red-50 rounded-2xl"
//         open={confirmLogout}
//         handler={() => setConfirmLogout(!confirmLogout)}
//       >
//         {/* <DialogHeader>Its a simple dialog.</DialogHeader> */}
//         <DialogBody className="">
//           <div className=" w-1/2 mx-auto flex flex-col items-center">
//             <FontAwesomeIcon
//               icon={faCircleExclamation}
//               className=" text-5xl text-red-400"
//             />
//             <p className="text-3xl text-red-400 mt-3">Are you sure?</p>
//             <p>You will be returned to the login screen.</p>
//             <div className="w-full mt-5 flex justify-between gap-4 ">
//               <Button
//                 className=" w-full text-sm normal-case bg-gray-200 text-gray-800 outline outline-1 outline-gray-600 active:outline-2 focus:outline-2 active:outline-gray-800 focus:outline-gray-800"
//                 onClick={() => setConfirmLogout(!confirmLogout)}
//                 disabled={loading}
//               >
//                 Cencel
//               </Button>
//               <Button
//                 className=" w-full text-sm normal-case bg-red-600 justify-center"
//                 onClick={handleLogout}
//                 loading={loading}
//               >
//                 Logout
//               </Button>
//             </div>
//           </div>
//         </DialogBody>
//       </Dialog>
//     </>
//   );
// }

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className=" min-w-72 bg-white  h-screen border-r border-gray-400 shadow-md sticky top-0 left-0 z-50 ">
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
      <ul className=" p-2 text-gray-800 border-b text-lg flex flex-col gap-2">
        {navigationList.map((nav, i) => (
          <li key={i} className="">
            <NavLink
              to={nav.href}
              className={`py-2 px-2 flex items-center gap-3 rounded-md text-base hover:bg-gray-100 cursor-pointer`}
              style={({ isActive }) =>
                isActive
                  ? { background: "rgba(230,200,255,1)", color: "black" }
                  : {}
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
        <h3 className="text-base text-gray-800 px-2">Events</h3>
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
      {/* Profile  */}
      <div className=" w-full  p-2 absolute bottom-0">
        <UserProfile
          userName={user.firstName + " " + user.lastName}
          ppUrl={user.image.url}
        />
      </div>
    </div>
  );
}

export default Header;
