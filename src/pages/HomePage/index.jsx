import React, { useRef, useState } from "react";
import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faCheckDouble,
  faClockRotateLeft,
  faDownLeftAndUpRightToCenter,
  faEllipsis,
  faFilePen,
  faHome,
  faListCheck,
  faUpRightAndDownLeftFromCenter,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import DataFeeder from "../../components/DataFeeder";
import Tasks from "../Tasks";
import Events from "../Events";
import DoughnutChart from "../../components/Charts/DoughnutChart";
import {
  faCalendar,
  faCalendarCheck,
  faCircleDot,
} from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const eventList = [
  {
    event_id: 1,
    event_date: "Nov 23, Sat",
    event_name: "Weekly Meeting",
  },
  {
    event_id: 2,
    event_date: "Dec 10, Mon",
    event_name: "Hackathon",
  },
  {
    event_id: 3,
    event_date: "Dec 25, Thu",
    event_name: "Christmas party",
  },
];
const taskList = [
  {
    task_id: 1,
    task_due_date: "Nov 23, Sat",
    task_name: "Attend Weekly Meeting",
  },
  {
    task_id: 2,
    task_due_date: "Nov 30, Fri",
    task_name: "Register in Hackathon",
  },
  {
    task_id: 3,
    task_due_date: "Dec 10, Mon",
    task_name: "Inform friends about Hackathon",
  },
  {
    task_id: 4,
    task_due_date: "Dec 25, Thu",
    task_name: "Arrange Lightings",
  },
  {
    task_id: 5,
    task_due_date: "Dec 25, Thu",
    task_name: "Decoration",
  },
];

function HomeCards({
  title,
  href,
  icon,
  actions,
  children,
  className,
  childClass,
}) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogBox = () => setDialogOpen(!dialogOpen);

  const navigate = useNavigate();

  return (
    <div
      className={`min-h-64 max-h-full p-3 bg-gray-200 rounded-md border border-gray-300 shadow-sm ${className}`}
    >
      {/* header */}
      <div className="pb-2 flex justify-between items-center border-b border-gray-500">
        <p className="text-lg flex items-center">
          {icon && (
            <span className="mr-3 opacity-70 text-purple-600">{icon}</span>
          )}
          {title}
          <button
            onClick={() => navigate(href)}
            className="w-6 h-6 grid place-items-center ml-2 text-sm  text-gray-800 hover:text-black cursor-pointer"
          >
            <FontAwesomeIcon icon={faUpRightFromSquare} className="" />
          </button>
        </p>
        <div className="flex items-center gap-2">
          {/* <button>
            <FontAwesomeIcon icon={faGear} className="text-sm" />
          </button> */}
          <button className="w-6 h-6" onClick={handleDialogBox}>
            <FontAwesomeIcon
              icon={faUpRightAndDownLeftFromCenter}
              className="text-xs"
            />
          </button>
          <button className="w-6 h-6">
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
        </div>
      </div>

      {/* content */}
      <div className={`p-2 mt-2 w-full ${childClass}`}>{children}</div>

      {/* Dialog */}
      <Dialog
        open={dialogOpen}
        handler={handleDialogBox}
        size="xl"
        className="h-[80%] px-2 "
      >
        <DialogHeader className="pb-2 flex justify-between items-center border-b border-gray-300">
          <p className="text-lg">
            {icon && (
              <span className="mr-3 opacity-70 text-purple-600">{icon}</span>
            )}
            {title}
          </p>
          <div className="flex items-center gap-4">
            {/* <button>
            <FontAwesomeIcon icon={faGear} className="text-sm" />
          </button> */}
            <button
              className="w-6 h-6 grid place-items-center"
              onClick={handleDialogBox}
            >
              <FontAwesomeIcon
                icon={faDownLeftAndUpRightToCenter}
                className="text-sm "
              />
            </button>
            <button className="w-6 h-6 grid place-items-center">
              <FontAwesomeIcon icon={faEllipsis} />
            </button>
          </div>
        </DialogHeader>
        <DialogBody className="h-[85%]">{children}</DialogBody>
        {/* <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleDialogBox}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="green" onClick={handleDialogBox}>
              <span>Confirm</span>
            </Button>
          </DialogFooter> */}
      </Dialog>
    </div>
  );
}

export default function HomePage() {
  // const [activeTab, setActiveTab] = useState("tasks");
  // const [showHidden, setShowHidden] = useState(false)

  const user = useSelector((state) => state.auth.user);
  console.log("user::: ", user);
  const tabRef = useRef(null);

  const data = [
    {
      label: "Tasks",
      value: "tasks",
      extraInfo: "Tasks",
      icon: faListCheck,
      desc: <Tasks />,
    },
    {
      label: "Events",
      value: "events",
      extraInfo: "Upcoming Events",
      icon: faCalendarCheck,
      desc: <Events />,
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
    <div className=" ">
      {/* header */}
      <div className="h-14 py-2 px-4 border-b flex items-center gap-2 bg-gray-50 sticky top-0">
        <FontAwesomeIcon icon={faHome} className="text-sm" />
        <p className="pt-[4px]">Home</p>
      </div>

      {/* main */}
      <div className="p-6 ">
        {/* greeting */}
        <div>
          <h3 className="px-2 text-3xl font-">
            Good Morning, {user.firstName}
          </h3>
        </div>

        {/* cardSection */}
        <div className="mt-5 grid grid-cols-2 gap-4">
          {/* Event Card */}
          <HomeCards
            title={"Events this week"}
            href={"/events"}
            icon={<FontAwesomeIcon icon={faCalendar} />}
          >
            <ul className="flex flex-col gap-2">
              {eventList.map((event, i) => (
                <li key={event.event_id} className="flex gap-4 ">
                  <p className="text-nowrap">
                    <FontAwesomeIcon
                      icon={faCalendarCheck}
                      className="mr-3 opacity-60 "
                    />
                    {event.event_date}
                  </p>
                  <p>{event.event_name}</p>
                </li>
              ))}
            </ul>
          </HomeCards>

          {/* Activity Card */}
          <HomeCards
            title={"My Activities"}
            href={"/dashboard"}
            className={" row-span-2"}
            childClass={" h-[90%]  "}
            icon={<FontAwesomeIcon icon={faClockRotateLeft} />}
          >
            <DoughnutChart />
          </HomeCards>

          {/* Task Card */}
          <HomeCards
            title={"My Tasks"}
            href={"/tasks"}
            icon={<FontAwesomeIcon icon={faCheckDouble} />}
          >
            <ul className="flex flex-col gap-2">
              {taskList.map((task, i) => (
                <li key={task.task_id} className="flex gap-4">
                  <p className="text-nowrap">
                    <FontAwesomeIcon
                      icon={faCircleDot}
                      className="mr-3 opacity-60 "
                    />
                    {task.task_due_date}
                  </p>
                  <p>{task.task_name}</p>
                </li>
              ))}
            </ul>
          </HomeCards>
        </div>
      </div>
    </div>
  );
}
