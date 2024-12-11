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
    column: "inProgress",
    color: "blue",
  },
  {
    title: "Done",
    column: "done",
    color: "green",
  },
];

// const BurnBarrel = ({ setCards }) => {
//   const [active, setActive] = useState(false);

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     setActive(true);
//   };

//   const handleDragLeave = () => {
//     setActive(false);
//   };

//   const handleDragEnd = (e) => {
//     const cardId = e.dataTransfer.getData("cardId");

//     setCards((pv) => pv.filter((c) => c.id !== cardId));

//     setActive(false);
//   };

//   return (
//     <div
//       onDrop={handleDragEnd}
//       onDragOver={handleDragOver}
//       onDragLeave={handleDragLeave}
//       className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${
//         active
//           ? "border-red-800 bg-red-800/20 text-red-500"
//           : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
//       }`}
//     >
//       {/* {active ? <FaFire className="animate-bounce" /> : <FiTrash />} */}
//     </div>
//   );
// };

const AddCard = ({ column, setCards }) => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim().length) return;

    const newCard = {
      column,
      title: text.trim(),
      id: Math.random().toString(),
    };

    setCards((pv) => [...pv, newCard]);

    setAdding(false);
  };

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <textarea
            onChange={(e) => setText(e.target.value)}
            autoFocus
            placeholder="Add new task..."
            className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0"
          />
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
              onClick={() => setAdding(false)}
              className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
            >
              Close
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
            >
              <span>Add</span>
              {/* <FiPlus /> */}
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
        >
          <span className="">Add card</span>
          {/* <FiPlus /> */}
        </motion.button>
      )}
    </>
  );
};

const Board = () => {
  const [cards, setCards] = useState(tasks);

  return (
    <div className="flex justify-between h-full w-full gap-3">
      {kanbanColumns.map((col, i) => (
        <KanbanColumn
          key={i}
          AddCard={AddCard}
          cards={cards}
          setCards={setCards}
          title={col.title}
          column={col.column}
          color={col.color}
        />
      ))}
      {/* <BurnBarrel setCards={setCards} /> */}
    </div>
  );
};

export default function KanbanBoard() {
  return (
    <div className="w-full bg-gray-100">
      <Board />
    </div>
  );
}
