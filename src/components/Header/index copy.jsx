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
import { useNavigate } from "react-router-dom";

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

function Header({ isLogin, heading }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigate = useNavigate();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="w-full py-3 px-10 bg-black text-white/85 flex justify-between ">
      {heading ? (
        <h1 className="text-3xl font-bold select-none pt-1">
          &#128075; hello! {heading}
        </h1>
      ) : (
        <h1 className="text-3xl font-bold select-none pt-1">
          Comm<span className="text-white">Unity</span>Track
        </h1>
      )}
      <div className="flex">
        <ul className="flex gap-6 items-center mr-10 text-lg cursor-pointer select-none">
          <li onClick={() => navigate("/tasks")}>Tasks</li>
          <li onClick={() => navigate("/events")}>Events</li>
          <li onClick={() => navigate("/dashboard")}>Dashboard</li>
          <li onClick={() => navigate("/dashboard")}>My Activities</li>
        </ul>
        {isLogin && (
          <Menu
            open={isMenuOpen}
            handler={setIsMenuOpen}
            placement="bottom-end"
          >
            <MenuHandler>
              <Button
                variant="text"
                color="blue-gray"
                className="flex items-center rounded-full p-0"
              >
                <Avatar
                  variant="circular"
                  size="md"
                  alt="profile_pic"
                  color="blue-gray"
                  className=" p-0.5"
                  src="src\assets\profile_pic.png"
                />
              </Button>
            </MenuHandler>
            <MenuList className="p-1">
              {profileMenuItems.map(({ label }, i) => {
                const isLastItem = i === profileMenuItems.length - 1;
                return (
                  <>
                    {isLastItem && (
                      <hr key={i} className=" my-1 border-black/20 " />
                    )}
                    <MenuItem
                      key={i}
                      onClick={closeMenu}
                      className={` gap-2 rounded ${
                        isLastItem
                          ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                          : ""
                      }`}
                    >
                      <Typography
                        as="span"
                        variant="small"
                        className="font-normal"
                        color={isLastItem ? "red" : "inherit"}
                      >
                        {label}
                      </Typography>
                    </MenuItem>
                  </>
                );
              })}
            </MenuList>
          </Menu>
        )}
      </div>
    </div>
  );
}

export default Header;
