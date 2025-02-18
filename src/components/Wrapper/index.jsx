import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import { motion } from "framer-motion";
import SideNavbar from "../SideNavBar";

export default function Wrapper() {
  const [isCollapse, setIsCollapse] = useState(false);
  return (
    <div className="animate-fadeIn flex h-screen overflow-hidden">
      {/* Side Panel */}
      <motion.div
        initial={false}
        animate={{ width: isCollapse ? "4em" : "18em" }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className=" flex-shrink-0 bg-white text-white border-r border-gray-300 drop-shadow-lg "
      >
        <SideNavbar isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
      </motion.div>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className=" flex-1 overflow-auto p-6 max-w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
