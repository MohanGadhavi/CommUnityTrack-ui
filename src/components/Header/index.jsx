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

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="w-full p-5 px-10 bg-[#1C1F21] text-[#f6f7eb] flex justify-between ">
      {heading ? (
        <h1 className="text-4xl font-bold select-none">
          &#128075; hello! {heading}
        </h1>
      ) : (
        <h1 className="text-4xl font-bold select-none">
          Comm<span className="text-[#ED6D5A]">Unity</span>Track
        </h1>
      )}
      {isLogin && (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
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
            {profileMenuItems.map(({ label }, key) => {
              const isLastItem = key === profileMenuItems.length - 1;
              return (
                <>
                  {isLastItem && <hr className=" my-1 border-black/20 " />}
                  <MenuItem
                    key={label}
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
  );
}

export default Header;
