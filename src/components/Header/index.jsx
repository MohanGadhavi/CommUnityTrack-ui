import React, { useState } from "react";
import {} from "@fortawesome/free-regular-svg-icons";
import { useLocation } from "react-router-dom";
import { getRouteList } from "../../routes/AppRoute";
import UserProfile from "../../pages/UserProfile/UserProfile";
import { useSelector } from "react-redux";

const findCurrentRoute = (routes, pathname) => {
  for (let route of routes) {
    if (route.path === pathname) {
      return route;
    }
    if (route.children) {
      const childRoute = findCurrentRoute(route.children, pathname);
      if (childRoute) {
        return childRoute;
      }
    }
  }
  return null;
};

function Header() {
  const location = useLocation();
  console.log("location::::: ", location.pathname);

  const user = useSelector((state) => state.auth.user);

  const currentRouteObj = findCurrentRoute(getRouteList(), location.pathname);
  console.log("currentRouteObj::::: ", currentRouteObj);

  return (
    <header className="relative h-14 bg-white flex items-center justify-between gap-2 px-4 text-gray-800 border-b border-gray-300">
      <div className="flex items-center gap-2">
        <span className=" ">
          {currentRouteObj.iconName && currentRouteObj.iconName}
        </span>
        <h1 className="text-lg ">{currentRouteObj.name}</h1>
      </div>
      {/* <div className="absolute top-2 right-2 ">
        <UserProfile
          userName={user.firstName + " " + user.lastName}
          ppUrl={user.image.url}
          customClassName={"  "}
        />
      </div> */}
    </header>
  );
}

export default Header;
