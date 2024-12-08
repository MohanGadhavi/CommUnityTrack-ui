import React from "react";
import { motion } from "framer-motion";
import KanbanDropIndicator from "./kanbanDropIndicator";
import { faFlag, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

export default function KanbanCard({ title, id, column, handleDragStart }) {
  const tags = ["Meeting", "Urgent", "stayFocused"];

  return (
    <>
      <KanbanDropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        className="cursor-grab rounded-md border border-gray-400 bg-white p-3 active:cursor-grabbing"
      >
        <p className="text-sm font-semibold ">{title}</p>
        <div className="text-sm mt-2 flex flex-col gap-1 ">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faUser} className="text-xs text-gray-700" />
            <span>-</span>
            <p className=" w-2/3 truncate">
              Akshay, Mohan, Vishal, Sajju, nilesh
            </p>
          </div>
          <hr />
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faCalendar}
              className="text-xs text-gray-700"
            />
            <span>-</span>
            <p className=" w-2/3 truncate">31 November 2024</p>
          </div>
          <hr />
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faFlag} className="text-xs text-gray-700" />
            <span>-</span>
            <p className=" px-3 rounded-lg text-center text-xs bg-red-400 bg-opacity-40">
              Important
            </p>
          </div>
          <hr />
          <div className="flex gap-2 mt-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 text-xs bg-gray-400 rounded-full text-center text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
