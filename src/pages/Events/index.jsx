import React, { useState } from "react";
import KanbanBoard from "../../components/KanbanBoard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import TaskTable from "../../components/TaskTable";

const eventList = ["Balsabha", "samaya", "YuvakSabha"];

const Events = () => {
  const [open, setOpen] = React.useState(-1);

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  }

  const handleOpen = (value) => setOpen(open === value ? -1 : value);
  return (
    <div className="w-full">
      <div className="h-14 py-2 px-4 border-b flex items-center gap-2 bg-gray-50 sticky top-0 z-50">
        <FontAwesomeIcon icon={faCalendarDays} className="text-sm" />
        <p className="pt-[2px]">Events</p>
      </div>
      <div className="px-2">
        {eventList.map((event, i) => (
          <Accordion
            key={i}
            open={open === i}
            icon={<Icon id={i} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(i)}>
              {event}
            </AccordionHeader>
            <AccordionBody>
              <div className=" ">
                {/* <KanbanBoard /> */}
                <TaskTable />
              </div>
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Events;
