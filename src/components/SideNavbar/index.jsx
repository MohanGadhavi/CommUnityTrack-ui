import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBell,
  faChartSimple,
  faHome,
  faCalendarDays,
  faCheckSquare,
  faCaretLeft,
  faTableColumns,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import api from "../../utils/api";
import { logout } from "../../../store/auth";
import UserProfile from "../../pages/UserProfile/UserProfile";
import { is } from "date-fns/locale/is";

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
    groupName: "",
    navList: [
      {
        label: "Home",
        href: "/home",
        icon: () => (
          <span className="w-7 h-7 shrink-0 grid place-items-center">
            <FontAwesomeIcon icon={faHome} className="text-base " />{" "}
          </span>
        ),
      },
      {
        label: "Notifications",
        href: "/notifications",
        icon: () => (
          <span className="w-7 h-7 shrink-0 grid place-items-center">
            <FontAwesomeIcon icon={faBell} className="text-base mt-[2px]" />
          </span>
        ),
      },
      {
        label: "Tasks",
        href: "/tasks",
        icon: () => (
          <span className="w-7 h-7 shrink-0 grid place-items-center">
            <FontAwesomeIcon
              icon={faCheckSquare}
              className="text-base mt-[2px]"
            />
          </span>
        ),
      },
      {
        label: "Events",
        href: "/events",
        icon: () => (
          <span className="w-7 h-7 shrink-0 grid place-items-center">
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="text-base mt-[2px]"
            />
          </span>
        ),
      },
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: () => (
          <span className="w-7 h-7 shrink-0 grid place-items-center">
            <FontAwesomeIcon
              icon={faChartSimple}
              className="text-base mt-[2px]"
            />
          </span>
        ),
      },
    ],
  },
  {
    groupName: "Events",
    navList: [
      {
        label: "Weekly Meeting",
        href: "/events",
        icon: (label) => (
          <span className="w-7 h-7 shrink-0 bg-purple-100 border grid place-items-center text-base text-center font-bold  rounded-full uppercase">
            {String(label).trim().charAt(0)}
          </span>
        ),
      },
      {
        label: "Samaya 2025",
        href: "/events",
        icon: (label) => (
          <span className="w-7 h-7 shrink-0 bg-purple-100 border grid place-items-center text-base text-center font-bold  rounded-full uppercase">
            {String(label).trim().charAt(0)}
          </span>
        ),
      },
      {
        label: "Ankut 2025",
        href: "/events",
        icon: (label) => (
          <span className="w-7 h-7 shrink-0 bg-purple-100 border grid place-items-center text-base text-center font-bold  rounded-full uppercase">
            {String(label).trim().charAt(0)}
          </span>
        ),
      },
      {
        label: "Hackathon",
        href: "/events",
        icon: (label) => (
          <span className="w-7 h-7 shrink-0 bg-purple-100 border grid place-items-center text-base text-center font-bold  rounded-full uppercase">
            {String(label).trim().charAt(0)}
          </span>
        ),
      },
    ],
  },
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

function SideNavbar({ isCollapse = false, setIsCollapse }) {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  return (
    <nav
      className="w-full h-full "
      // onMouseEnter={() => isCollapse && setIsCollapse(false)}
    >
      {/* Navbar Header */}
      <div className=" w-full relative h-14 p-2 flex items-center justify-between border-b border-gray-300 ">
        <div
          className="w-[90%] p-1 px-1.5 flex items-center gap-2 text-xl text-purple-600 hover:bg-purple-50 rounded-md cursor-pointer"
          title="Organization"
          onClick={() => isCollapse && setIsCollapse(false)}
        >
          <span className="w-8 h-8 shrink-0 grid place-items-center rounded-md text-sm font-semibold bg-black/10">
            S
          </span>
          {!isCollapse && (
            <div className=" py-1 flex items-center gap-1">
              <p className="max-w-[80%] truncate">SnehalYuvakMandallll</p>
              <FontAwesomeIcon
                icon={faAngleDown}
                className="font-thin text-sm"
              />
            </div>
          )}
        </div>
        {!isCollapse && (
          <button
            type="button"
            className={` w-8 h-8 hover:bg-gray-600/20 rounded-md cursor-pointer absolute -right-1 `}
            title={"Collapse"}
            onClick={() => setIsCollapse(!isCollapse)}
          >
            <FontAwesomeIcon
              icon={faTableColumns}
              className="text-lg text-black/70"
            />
          </button>
        )}
        {/* <button
          type="button"
          class="absolute  -right-0 w-4 h-full pl-1 bg-gray-600 rounded-l-full flex items-center justify-center shadow-md   text-white "
          title={"Collapse"}
        >
          <FontAwesomeIcon icon={faCaretLeft} className="text-lg " />
        </button> */}
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col gap-2">
        {navigationList.map((navGrp, i) => (
          <ul
            key={i}
            className={` p-2 text-gray-800 text-lg flex flex-col gap-2 ${
              i !== 0 && "border-t border-gray-300"
            }`}
          >
            {navGrp.groupName && !isCollapse && (
              <h3 className="text-base text-gray-800 px-2">
                {navGrp.groupName}
              </h3>
            )}

            {navGrp.navList.map((nav, i) => (
              <li key={i} className="">
                <NavLink
                  to={nav.href}
                  className={`p-2 flex items-center gap-2 rounded-md text-base hover:bg-purple-50 cursor-pointer`}
                  style={({ isActive }) =>
                    isActive
                      ? { background: "rgba(230,200,255,1)", color: "black" }
                      : {}
                  }
                  title={nav.label}
                  onClick={() => isCollapse && setIsCollapse(false)}
                >
                  {nav.icon(nav.label)}
                  {!isCollapse && <p className=" truncate">{nav.label}</p>}
                </NavLink>
              </li>
            ))}
          </ul>
        ))}
      </div>

      {/* Profile  */}
      <div className=" w-full  p-2 absolute bottom-0">
        <UserProfile
          userName={user.firstName + " " + user.lastName}
          ppUrl={user.image.url}
        />
      </div>
    </nav>
  );
}

export default SideNavbar;
