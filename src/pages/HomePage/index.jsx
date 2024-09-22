import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faChartSimple,
  faClockRotateLeft,
  faListCheck,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("tasks");

  const data = [
    {
      label: "Tasks",
      value: "tasks",
      extraInfo: "Personal Tasks",
      icon: faListCheck,
      desc: `Because it's about motivating the doers. Because I'm here
            to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Events",
      value: "events",
      extraInfo: "Upcoming Events",
      icon: faCalendarCheck,
      desc: `Because it's about motivating the doers. Because I'm here
            to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Dashboard",
      value: "dashboard",
      extraInfo: "Dashboard",
      icon: faChartSimple,
      desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people
          who are like offended by it, it doesn't matter.`,
    },

    {
      label: "Activities",
      value: "activities",
      extraInfo: "Personal Activities",
      icon: faClockRotateLeft,
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  return (
    <div className="px-5 ">
      <Tabs value={activeTab} className={" min-h-96 bg-black/15  rounded-lg "}>
        <TabsHeader
          className=" p-2 bg-opacity-100 bg-[#1C1F21] rounded-none h-14 text-white "
          indicatorProps={{ className: " bg-white  bg-opacity-10 " }}
        >
          {data.map(({ label, value, icon, extraInfo }) => (
            <Tab
              key={value}
              value={value}
              className={` text-lg transition-all ease-in  ${
                activeTab === value ? "text-[#ED6D5A]" : " text-inherit "
              }`}
              onClick={() => setActiveTab(value)}
              title={extraInfo}
            >
              <div className="flex items-center gap-4">
                <FontAwesomeIcon icon={icon} />
                {label}
              </div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="">
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
