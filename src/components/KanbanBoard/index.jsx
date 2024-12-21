import React, { useState } from "react";
// import { FiPlus, FiTrash } from "react-icons/fi";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import KanbanColumn from "./KanbanColumn";
// import { FaFire } from "react-icons/fa";

const tasks = [
  // BACKLOG
  { title: "Look into render bug in dashboard", id: "1", column: "backlog" },
  { title: "SOX compliance checklist", id: "2", column: "backlog" },
  { title: "[SPIKE] Migrate to Azure", id: "3", column: "backlog" },
  { title: "Document Notifications service", id: "4", column: "backlog" },
  // TODO
  {
    title: "Research DB options for new microservice",
    id: "5",
    column: "planning",
  },
  { title: "Postmortem for outage", id: "6", column: "planning" },
  { title: "Sync with product on Q3 roadmap", id: "7", column: "planning" },

  // DOING
  {
    title: "Refactor context providers to use Zustand",
    id: "8",
    column: "inProgress",
  },
  { title: "Add logging to daily CRON", id: "9", column: "inProgress" },
  // DONE
  {
    title: "Set up DD dashboards for Lambda listener",
    id: "10",
    column: "done",
  },
];

const kanbanColumns = [
  {
    title: "Backlog",
    column: "backlog",
    color: "default",
  },
  {
    title: "Planning",
    column: "planning",
    color: "purple",
  },
  {
    title: "In Progress",
    column: "in_progress",
    color: "blue",
  },
  {
    title: "Done",
    column: "done",
    color: "green",
  },
];

const Board = ({ taskList }) => {
  const [cards, setCards] = useState(tasks);

  return (
    <div className="flex h-full gap-3 overflow-x-auto">
      {kanbanColumns.map((col, i) => (
        <KanbanColumn
          key={i}
          cards={taskList}
          setCards={setCards}
          title={col.title}
          column={col.column}
          color={col.color}
        />
      ))}
    </div>
  );
};

export default function KanbanBoard({ taskList }) {
  return (
    <div className="w-full bg-gray-100">
      <Board taskList={taskList} />
    </div>
  );
}
