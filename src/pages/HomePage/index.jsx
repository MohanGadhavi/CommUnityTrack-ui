import React, { useRef, useState } from "react";
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
  faFilePen,
  faListCheck,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import DataFeeder from "../../components/DataFeeder";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("tasks");
  const [showHidden, setShowHidden] = useState(false);

  const tabRef = useRef(null);

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
    {
      label: "Data Feeder",
      value: "data-feeder",
      extraInfo: "Update your activity",
      icon: faFilePen,
      desc: <DataFeeder />,
      ref: tabRef,
      canHide: true,
    },
  ];
  return (
    <div className="px-5 ">
      <Tabs value={activeTab} className={"   rounded-lg "}>
        <TabsHeader
          className=" p-2 bg-opacity-100 bg-[hsl(20,70,10)] rounded-none h-14 text-white "
          indicatorProps={{ className: " bg-white  bg-opacity-10 " }}
        >
          {data.map(
            ({ label, value, icon, extraInfo, className, ref, canHide }) =>
              canHide ? (
                showHidden && (
                  <Tab
                    key={value}
                    ref={ref}
                    value={value}
                    className={` text-lg transition-all ease-in  ${
                      activeTab === value ? "text-[#ED6D5A]" : " text-inherit "
                    } ${className}`}
                    onClick={() => setActiveTab(value)}
                    title={extraInfo}
                  >
                    <div className="flex items-center gap-4">
                      <FontAwesomeIcon icon={icon} />
                      {label}
                    </div>
                  </Tab>
                )
              ) : (
                <Tab
                  key={value}
                  ref={ref}
                  value={value}
                  className={` text-lg transition-all ease-in  ${
                    activeTab === value
                      ? "text-[hsl(20,100,70)]"
                      : " text-inherit "
                  } ${className}`}
                  onClick={() => {
                    setActiveTab(value);
                    setShowHidden(false);
                  }}
                  title={extraInfo}
                >
                  <div className="flex items-center gap-4">
                    <FontAwesomeIcon icon={icon} />
                    {label}
                  </div>
                </Tab>
              )
          )}
        </TabsHeader>
        <TabsBody className="min-h-[50vh]  bg-[hsl(20,100,10)]/30">
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value} className="text-black text-lg">
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>

      {/* Data Feeder */}
      {!showHidden && (
        <div
          className=" fixed bottom-20 right-14 w-40 h-16 px-3 rounded-xl flex items-center justify-between gap-4  bg-[hsl(20,70,10)] text-[hsl(20,100,70)] hover:bg-[hsl(20,70,15)] hover:scale-105 transition-all ease-linear cursor-pointer "
          onClick={() => {
            setShowHidden(true);
            setTimeout(() => {
              tabRef.current.click();
            }, 10);
          }}
        >
          <div className="min-w-10 h-10 p-1 text-white text-xl flex justify-center items-center rounded-md bg-[hsl(20,100,70)]/60">
            <FontAwesomeIcon icon={faPlus} />
          </div>

          <p className=" w-fit font-semibold text-wrap ">Update Activity</p>
        </div>
      )}
    </div>
  );
}
