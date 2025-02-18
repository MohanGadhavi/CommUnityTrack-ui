import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Avatar,
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
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
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import { logout } from "../../../store/auth";

const UserProfile = ({ userName, ppUrl, customClassName }) => {
  const [openProfile, setOpenProfile] = useState(false);
  const [confirmLogout, setConfirmLogout] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [editProfileOpen, setEditProfileOpen] = useState(false); // State to handle edit profile dialog visibility
  const [editProfileData, setEditProfileData] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch profile data
  // useEffect(() => {
  //   const fetchUserProfile = async () => {
  //     try {
  //       const response = await api.get("/user/me");
  //       setUserProfile(response.data);
  //     } catch (error) {
  //       console.error("Error fetching profile data", error);
  //     }
  //   };

  //   fetchUserProfile();
  // }, []);

  // Handle edit profile
  const handleEditProfile = async () => {
    try {
      setLoading(true);
      const response = await api.put("/user/update/me", editProfileData);
      setUserProfile(response.data);
      setLoading(false);
      setEditProfileOpen(false); // Close the dialog after updating
    } catch (error) {
      console.error("Error updating profile", error);
      setLoading(false);
    }
  };

  // Logout functionality
  const handleLogout = async () => {
    try {
      setLoading(true);
      await api.get("/user/logout");
      dispatch(logout());
      localStorage.removeItem("authToken");
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Accordion
        open={openProfile}
        className={`border border-gray-400 rounded-lg shadow-lg bg-purple-50 ${customClassName}`}
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
        <AccordionBody className="mt-2 p-0 pt-1 border-t border-gray-400">
          <List className="px-1">
            <ListItem className="hover:bg-gray-300 active:bg-purple-100">
              <ListItemPrefix>
                <FontAwesomeIcon icon={faUser} className="font-thin text-sm" />
              </ListItemPrefix>
              My Profile
            </ListItem>
            <ListItem
              className="hover:bg-gray-300 active:bg-purple-100"
              onClick={() => setEditProfileOpen(true)} // Open edit profile dialog
            >
              <ListItemPrefix>
                <FontAwesomeIcon icon={faGear} className="font-thin text-sm" />
              </ListItemPrefix>
              Edit Profile
            </ListItem>
            <hr className="bg-gray-400 h-0.5" />
            <ListItem
              className="hover:bg-red-100 text-red-500"
              onClick={() => setConfirmLogout(true)}
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

      <Dialog
        open={editProfileOpen}
        handler={() => setEditProfileOpen(!editProfileOpen)}
      >
        <DialogHeader>Edit Profile</DialogHeader>
        <DialogBody>
          <div className="flex flex-col gap-4">
            <Input
              label="First Name"
              type="firstName"
              value={editProfileData.firstName || ""}
              onChange={(e) =>
                setEditProfileData({
                  ...editProfileData,
                  firstName: e.target.value,
                })
              }
            />
            <Input
              label="Last Name"
              type="lastName"
              value={editProfileData.lastName || ""}
              onChange={(e) =>
                setEditProfileData({
                  ...editProfileData,
                  lastName: e.target.value,
                })
              }
            />
            <Input
              label="Email"
              type="email"
              value={editProfileData.email || ""}
              onChange={(e) =>
                setEditProfileData({
                  ...editProfileData,
                  email: e.target.value,
                })
              }
            />
            <Input
              label="Contact Number"
              type="phone"
              value={editProfileData.phone || ""}
              onChange={(e) =>
                setEditProfileData({
                  ...editProfileData,
                  phone: e.target.value,
                })
              }
            />
            <Input
              label="Password"
              type="password"
              value={editProfileData.password || ""}
              onChange={(e) =>
                setEditProfileData({
                  ...editProfileData,
                  password: e.target.value,
                })
              }
            />
            <Input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setEditProfileData({
                  ...editProfileData,
                  image: e.target.value,
                })
              }
              className="block w-full text-sm text-gray-500 file:mr-4 file:py- file:px-3 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setEditProfileOpen(false)}
            className="mr-1"
          >
            Cancel
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={handleEditProfile}
            disabled={loading}
          >
            Save
          </Button>
        </DialogFooter>
      </Dialog>

      {/* Confirm Logout Dialog */}
      <Dialog
        open={confirmLogout}
        handler={() => setConfirmLogout(!confirmLogout)}
        size="sm"
      >
        <DialogBody className="py-5 px-8">
          <div className="text-center">
            <FontAwesomeIcon
              icon={faCircleExclamation}
              className="text-5xl text-red-400"
            />
            <p className="text-xl font-semibold mt-3 text-gray-800">
              Are you sure?
            </p>
            <p className="text-gray-600 mt-1">
              You will be logged out and redirected to the login screen.
            </p>
            <div className="mt-5 flex justify-end gap-2">
              <Button
                variant="outlined"
                color="black"
                onClick={() => setConfirmLogout(false)}
              >
                Cancel
              </Button>
              <Button
                variant="gradient"
                color="red"
                onClick={handleLogout}
                disabled={loading}
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
