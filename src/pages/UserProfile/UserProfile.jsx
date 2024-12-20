import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
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
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faCircleExclamation,
  faGear,
  faPowerOff,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import api from "../../utils/api";

// function UserProfile({ userName, ppUrl }) {
//   const [openProfile, setOpenProfile] = useState(false);
//   const [confirmLogout, setConfirmLogout] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [userProfile, setUserProfile] = useState(null);
//   const [editProfileData, setEditProfileData] = useState({});

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Fetch profile data
//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const response = await api.get("/me");
//         setUserProfile(response.data);
//       } catch (error) {
//         console.error("Error fetching profile data", error);
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   const handleEditProfile = async () => {
//     try {
//       setLoading(true);
//       const response = await api.get("/update/me", editProfileData);
//       setUserProfile(response.data); // Update the userProfile state with the new data
//       setLoading(false);
//       // Optionally show success message
//     } catch (error) {
//       console.error("Error updating profile", error);
//       setLoading(false);
//     }
//   };

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

const UserProfile = ({ userName, ppUrl }) => {
  const [openProfile, setOpenProfile] = useState(false);
  const [confirmLogout, setConfirmLogout] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userProfile, setUserProfile] = useState(null); // State to hold the profile data
  const [editProfileData, setEditProfileData] = useState({}); // State for profile edit form data

  const navigate = useNavigate();
  const dispatch = useDispatch();


  // Fetch profile data
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await api.get("/user/me");
        setUserProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile data", error);
      }
    };

    fetchUserProfile();
  }, []);

  // Handle edit profile form submit

  const handleEditProfile = async () => {
    try {
      setLoading(true);
      const response = await api.get("/user/update/me", editProfileData);
      setUserProfile(response.data); // Update the userProfile state with the new data
      setLoading(false);
      // Optionally show success message
    } catch (error) {
      console.error("Error updating profile", error);
      setLoading(false);
    }
  };

  // Logout
  const handleLogout = async () => {
    try {
      setLoading(true);
      await api
        .get("/user/logout")
        .then((res) => {
          console.log("LogOutresssssssssssss ", res);
        })
        .catch(() => {
          // localStorage.removeItem("authToken"); // Remove invalid token
        });
      dispatch(logout());
      localStorage.removeItem("authToken");
      navigate("/"); // Redirect to login
      setConfirmLogout(!confirmLogout);
    } catch (error) {
      console.error("Logout error: ", error);
      // localStorage.removeItem("authToken"); // Remove corrupted token
    } finally {
      setLoading(false); // Stop loading
    }
  };
  return (
    <>
      <Accordion
        open={openProfile}
        className={`border border-gray-400 rounded-lg shadow-lg ${
          openProfile ? "bg-purple-50 " : "bg-purple-50"
        }`}
        icon={
          <FontAwesomeIcon
            icon={faAngleDown}
            className={`font-thin text-sm ${openProfile ? "" : "rotate-180"}`}
          />
        }
      >
        <AccordionHeader
          onClick={() => setOpenProfile(!openProfile)}
          className="p-2 px-3 border-none text-base w-full"
        >
          <div className="flex items-center gap-2">
            <Avatar
              className="w-8 h-8 outline outline-2"
              src={ppUrl}
              alt="avatar"
            />
            <p className="text-lg">{userName}</p>
          </div>
        </AccordionHeader>
        <AccordionBody className="mt-2 p-0 pt-1 border-t border-gray-400 ">
          <List className="px-1">
            <ListItem className="hover:bg-gray-300 active:bg-purple-100 focus:bg-transparent focus:outline-gray-800">
              <ListItemPrefix>
                <FontAwesomeIcon icon={faUser} className="font-thin text-sm" />
              </ListItemPrefix>
              My Profile
            </ListItem>
            <ListItem
              className="hover:bg-gray-300 active:bg-purple-100 focus:bg-transparent focus:outline-gray-800"
              onClick={() => {
                // Open edit profile modal or form
              }}
            >
              <ListItemPrefix>
                <FontAwesomeIcon icon={faGear} className="font-thin text-sm" />
              </ListItemPrefix>
              Edit Profile
            </ListItem>
            <hr className="bg-gray-400 h-0.5" />
            <ListItem
              className="hover:bg-red-100 focus:bg-transparent focus:outline-red-800 text-red-500 focus:text-red-500"
              onClick={() => setConfirmLogout(!confirmLogout)}
            >
              <ListItemPrefix>
                <FontAwesomeIcon
                  icon={faPowerOff}
                  className="font-thin text-sm"
                />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>
        </AccordionBody>
      </Accordion>

      {/* Edit Profile Dialog */}
      <Dialog
        className="bg-red-50 rounded-2xl"
        open={confirmLogout}
        handler={() => setConfirmLogout(!confirmLogout)}
      >
        <DialogBody>
          <div className="w-1/2 mx-auto flex flex-col items-center">
            <FontAwesomeIcon
              icon={faCircleExclamation}
              className="text-5xl text-red-400"
            />
            <p className="text-3xl text-red-400 mt-3">Are you sure?</p>
            <p>You will be returned to the login screen.</p>
            <div className="w-full mt-5 flex justify-between gap-4 ">
              <Button
                className="w-full text-sm normal-case bg-gray-200 text-gray-800 outline outline-1 outline-gray-600 active:outline-2 focus:outline-2 active:outline-gray-800 focus:outline-gray-800"
                onClick={() => setConfirmLogout(!confirmLogout)}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button
                className="w-full text-sm normal-case bg-red-600 justify-center"
                onClick={handleLogout}
                loading={loading}
              >
                Logout
              </Button>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default UserProfile;
