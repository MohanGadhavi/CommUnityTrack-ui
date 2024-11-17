import React, { useState } from "react";
import { motion } from "framer-motion";

const eventList = [
  {
    eventId: 0,
    eventName: "Meeting",
    eventDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus culpa quae assumenda recusandae debitis? Animi iure error qui labore mollitia beatae, itaque aperiam corrupti quae sunt reprehenderit, quos delectus nostrum soluta. Ipsum dolorem voluptatem enim, non corporis sunt dolor omnis ex impedit velit pariatur voluptatum. Dolorem maxime saepe unde omnis.",
  },
  {
    eventId: 1,
    eventName: "Lunch",
    eventDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus culpa quae assumenda recusandae debitis? Animi iure error qui labore mollitia beatae, itaque aperiam corrupti quae sunt reprehenderit, quos delectus nostrum soluta. Ipsum dolorem voluptatem enim, non corporis sunt dolor omnis ex impedit velit pariatur voluptatum. Dolorem maxime saepe unde omnis.",
  },
];

const Event = () => {
  const [expand, setExpand] = useState(-1);

  return (
    <div className="flex flex-col gap-4">
      {eventList.map((event, id) => (
        <motion.div
          key={id}
          className="relative w-full group flex text-lg border-2 border-black/20 bg-purple-200  rounded-xl cursor-pointer shadow-md"
          animate={{ backgroundColor: id === expand ? "#e1bee7" : "#ce93d8" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onClick={() => setExpand(id === expand ? -1 : id)}
        >
          <div className=" flex flex-col items-center rounded-s-[10px] bg-white/70 px-6 pr-6 py-3">
            <p className="text-5xl font-extrabold">13</p>
            <p className="text-3xl text-justify">Sep</p>
            <p className="text-3xl text-justify">{}</p>
          </div>
          <div className="px-4 py-3">
            <div>
              <p className="text-3xl leading-8 font-medium">
                Event: <span className="text-3xl">{event.eventName}</span>
              </p>
            </div>
            <motion.div
              className={
                " text-left leading-6  line-clamp-1 max-h-[10rem] mt-1 overflow-auto " +
                (expand === id && " line-clamp-none ")
              }
              animate={{
                height: expand === id ? "18rem" : "1.5rem",
                overflow: expand === id ? "visible" : "hidden",
                display: expand === id ? "block" : "-webkit-box",
                "-webkit-box-orient": expand === id ? "horizontal" : "vertical",
                "-webkit-line-clamp ": expand === id ? "none" : 1,
              }}
              transition={{
                height: { duration: 0.6, ease: "anticipate" },
                overflow: {
                  duration: 1,
                  delay: 0.2,
                },
                display: {
                  delay: 1,
                },
                "-webkit-box-orient": {
                  delay: 1,
                },
                "-webkit-line-clamp ": { delay: 1 },
              }}
            >
              Details: {event.eventDescription}
            </motion.div>

            {/*  */}
            <motion.div
              className={`bg-white/60 rounded-md mt-2 py-2 px-4`}
              animate={{
                display: expand === id ? " block " : " none ",
              }}
            >
              <p className="text-xl"> Assigned Task</p>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Event;
