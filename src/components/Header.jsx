import React from "react";
import { Avatar } from "@material-tailwind/react";

function Header({ isLogin }) {
  return (
    <div className="w-full p-5 bg-black text-white flex justify-between ">
      <h1 className="text-4xl font-bold">
        Comm<span className="text-orange-600">Unity</span>Track
      </h1>
      {isLogin && (
        <Avatar
          src="src\assets\profile_pic.png"
          alt="profile_pic"
          variant="rounded"
        />
      )}
    </div>
  );
}

export default Header;
