import { Checkbox, Option, Select } from "@material-tailwind/react";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const tasks = [
  {
    taskId: 0,
    status: "completed",
    event: {
      eventId: 0,
      eventName: "Meeting",
    },
    taskName: "Attend Meeting",
    taskDescription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consequuntur exercitationem, tempora necessitatibus quaerat enim veniam error harum magni consequatur pariatur quo minima tempore dolores hic perferendis nihil possimus quisquam ipsa non distinctio sint nisi nesciunt. Consequuntur, nemo doloribus. Voluptatibus fugit, animi voluptas nisi soluta cupiditate nulla deserunt rem ratione. ",
    taskDueDate: "29 Sep",
  },
  {
    taskId: 0,
    status: "incomplete",
    event: {
      eventId: 1,
      eventName: "Lunch",
    },
    taskName: "Have a Lunch",
    taskDescription:
      " Eat Healty, Leave Healthy Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consequuntur exercitationem, tempora necessitatibus quaerat enim veniam error harum magni consequatur pariatur quo minima tempore dolores hic perferendis nihil possimus quisquam ipsa non distinctio sint nisi nesciunt. Consequuntur, nemo doloribus. Voluptatibus fugit, animi voluptas nisi soluta cupiditate nulla deserunt rem ratione. ",
    taskDueDate: "09 Sep",
  },
  {
    taskId: 0,
    status: "incomplete",
    event: {
      eventId: 1,
      eventName: "Lunch",
    },
    taskName: "Have a Lunch",
    taskDescription:
      " Eat Healty, Leave Healthy Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consequuntur exercitationem, tempora necessitatibus quaerat enim veniam error harum magni consequatur pariatur quo minima tempore dolores hic perferendis nihil possimus quisquam ipsa non distinctio sint nisi nesciunt. Consequuntur, nemo doloribus. Voluptatibus fugit, animi voluptas nisi soluta cupiditate nulla deserunt rem ratione. ",
    taskDueDate: "09 Sep",
  },
  {
    taskId: 0,
    status: "incomplete",
    event: {
      eventId: 1,
      eventName: "Lunch",
    },
    taskName: "Have a Lunch",
    taskDescription:
      " Eat Healty, Leave Healthy Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consequuntur exercitationem, tempora necessitatibus quaerat enim veniam error harum magni consequatur pariatur quo minima tempore dolores hic perferendis nihil possimus quisquam ipsa non distinctio sint nisi nesciunt. Consequuntur, nemo doloribus. Voluptatibus fugit, animi voluptas nisi soluta cupiditate nulla deserunt rem ratione. ",
    taskDueDate: "09 Sep",
  },
];

const statusOptionList = [
  { name: "Incomplete", value: "incomplete" },
  { name: "Completed", value: "completed" },
];

const ToDo = () => {
  const [expand, setExpand] = useState(-1);

  const statusSelectRefList = useRef([]);

  const handleSelectEle = (e, id) => {
    console.log("handle clickedddddddd");
    e.stopPropagation();
    console.log(id, statusSelectRefList.current);
    statusSelectRefList.current[id]?.querySelector("button")?.click();
  };

  return (
    <div className="flex flex-col gap-4">
      {tasks.map((task, id) => (
        <motion.div
          key={id}
          className="relative w-full px-4 py-3 group flex text-lg border border-black/20  bg-purple-200  rounded-xl cursor-pointer shadow-md"
          animate={{ backgroundColor: id === expand ? "#e1bee7" : "#ce93d8" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onClick={() => setExpand(id === expand ? -1 : id)}
        >
          <div className="max-w-[70%] flex">
            <div className="w-10 py-[2px] flex flex-col  items-start justify-between">
              <div className="-mt-[6px] -ml-3">
                <Checkbox
                  onClick={(e) => handleSelectEle(e, id)}
                  title={task.status}
                  ripple={false}
                  className="border-2 border-gray-900"
                  checked={task.status === "completed"}
                  onChange={() => {}}
                  // iconProps={{ className: "top-[-6px] left-[10px]" }}
                />
              </div>
              <div
                title={`${expand === id ? "Minimize" : "Expand"}`}
                className="h-full flex items-end"
              >
                <FontAwesomeIcon
                  icon={faAngleUp}
                  className={` ${
                    expand === id
                      ? "rotate-0 opacity-100"
                      : "-rotate-180 opacity-0"
                  } ml-[2px] text-xl group-hover:opacity-100  transition-all duration-200 ease-linear`}
                />
              </div>
            </div>
            <div className="w-[90%]">
              <div className="flex items-center">
                <h3 className="text-[26px] leading-8 font-semibold truncate">
                  {task.taskName}
                </h3>
                <div
                  title={`Event : ${task.event.eventName}`}
                  className=" ml-4  px-6 py-1 bg-white rounded-full text-sm font-semibold opacity-70 hover:opacity-90 hover:px-7 hover:border-2 transition-all ease-linear"
                >
                  {task.event.eventName}
                </div>
              </div>
              <motion.div
                className={
                  " text-left leading-6  line-clamp-1 max-h-[10rem] mt-1 " +
                  (expand === id && " line-clamp-none ")
                }
                animate={{
                  height: expand === id ? "18rem" : "1.5rem",
                  overflow: expand === id ? "visible" : "hidden",
                  display: expand === id ? "block" : "-webkit-box",
                  "-webkit-box-orient":
                    expand === id ? "horizontal" : "vertical",
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
                {task.taskDescription}
              </motion.div>
              <p className="mt-2">
                Due Date:{" "}
                <span className="font-semibold">{task.taskDueDate}</span>
              </p>
            </div>
          </div>
          <div
            title="Update Task Status"
            className="w-full max-h-24 bg-white/70 rounded-md p-3 py-5 flex items-center"
            onClick={(e) => handleSelectEle(e, id)}
          >
            <Select
              ref={(ele) => (statusSelectRefList.current[id] = ele)}
              variant="standard"
              label="Status"
              className=" text-base font-medium "
              labelProps={{
                className: " text-xs tracking-wider ",
              }}
              value={task.status}
              // onChange={() => {}}
              error={task.status === "incomplete"}
              success={task.status === "completed"}
            >
              {statusOptionList.map((option, i) => (
                <Option key={i} value={option.value} className=" text-base ">
                  {option.name}
                </Option>
              ))}
            </Select>
          </div>
          {/* <div className="absolute bottom-0 left-0 h-1 w-[60%] bg-gradient-to-l from-orange-900/60 to-red-500"></div> */}
        </motion.div>
      ))}
    </div>
  );
};

export default ToDo;
