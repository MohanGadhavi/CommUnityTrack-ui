// import React, { useRef, useState } from "react";
// import {
//   Tabs,
//   TabsHeader,
//   TabsBody,
//   Tab,
//   TabPanel,
// } from "@material-tailwind/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCalendarCheck,
//   faChartSimple,
//   faClockRotateLeft,
//   faFilePen,
//   faListCheck,
//   faPlus,
// } from "@fortawesome/free-solid-svg-icons";
// import DataFeeder from "../../components/DataFeeder";
// import ToDo from "../../components/ToDo";

// export default function HomePage() {
//   const [activeTab, setActiveTab] = useState("tasks");
//   const [showHidden, setShowHidden] = useState(false);

//   const tabRef = useRef(null);

//   const data = [
//     {
//       label: "Tasks",
//       value: "tasks",
//       extraInfo: "Tasks",
//       icon: faListCheck,
//       desc: <ToDo />,
//     },
//     {
//       label: "Events",
//       value: "events",
//       extraInfo: "Upcoming Events",
//       icon: faCalendarCheck,
//       desc: `Because it's about motivating the doers. Because I'm here
//             to follow my dreams and inspire other people to follow their dreams, too.`,
//     },
//     {
//       label: "Dashboard",
//       value: "dashboard",
//       extraInfo: "Dashboard",
//       icon: faChartSimple,
//       desc: `It really matters and then like it really doesn't matter.
//           What matters is the people who are sparked by it. And the people
//           who are like offended by it, it doesn't matter.`,
//     },

//     {
//       label: "Activities",
//       value: "activities",
//       extraInfo: "Personal Activities",
//       icon: faClockRotateLeft,
//       desc: `We're not always in the position that we want to be at.
//           We're constantly growing. We're constantly making mistakes. We're
//           constantly trying to express ourselves and actualize our dreams.`,
//     },
//     {
//       label: "Data Feeder",
//       value: "data-feeder",
//       extraInfo: "Update your activity",
//       icon: faFilePen,
//       desc: <DataFeeder />,
//       ref: tabRef,
//       canHide: true,
//     },
//   ];
//   return (
//     <div className="px-5 ">
//       <Tabs value={activeTab} className={"   rounded-lg "}>
//         <TabsHeader
//           className=" p-2 bg-opacity-100 bg-[hsl(20,70,10)] rounded-none h-14 text-white "
//           indicatorProps={{ className: " bg-white  bg-opacity-10 " }}
//         >
//           {data.map(
//             ({ label, value, icon, extraInfo, className, ref, canHide }) =>
//               canHide ? (
//                 showHidden && (
//                   <Tab
//                     key={value}
//                     ref={ref}
//                     value={value}
//                     className={` text-lg transition-all ease-in  ${
//                       activeTab === value ? "text-[#ED6D5A]" : " text-inherit "
//                     } ${className}`}
//                     onClick={() => setActiveTab(value)}
//                     title={extraInfo}
//                   >
//                     <div className="flex items-center gap-4">
//                       <FontAwesomeIcon icon={icon} />
//                       {label}
//                     </div>
//                   </Tab>
//                 )
//               ) : (
//                 <Tab
//                   key={value}
//                   ref={ref}
//                   value={value}
//                   className={` text-lg transition-all ease-in  ${
//                     activeTab === value
//                       ? "text-[hsl(20,100,70)]"
//                       : " text-inherit "
//                   } ${className}`}
//                   onClick={() => {
//                     setActiveTab(value);
//                     setShowHidden(false);
//                   }}
//                   title={extraInfo}
//                 >
//                   <div className="flex items-center gap-4">
//                     <FontAwesomeIcon icon={icon} />
//                     {label}
//                   </div>
//                 </Tab>
//               )
//           )}
//         </TabsHeader>
//         <TabsBody className="min-h-[50vh]  bg-[hsl(20,100,10)]/10">
//           {data.map(({ value, desc }) => (
//             <TabPanel key={value} value={value} className="text-black text-lg">
//               {desc}
//             </TabPanel>
//           ))}
//         </TabsBody>
//       </Tabs>

//       {/* Data Feeder */}
//       {!showHidden && (
//         <div
//           className=" fixed z-10 bottom-20 right-14 w-40 h-16 px-3 rounded-xl flex items-center justify-between gap-4  bg-[hsl(20,70,10)] text-[hsl(20,100,70)] hover:bg-[hsl(20,70,15)] hover:scale-105 transition-all ease-linear cursor-pointer "
//           onClick={() => {
//             setShowHidden(true);
//             setTimeout(() => {
//               tabRef.current.click();
//             }, 10);
//           }}
//         >
//           <div className="min-w-10 h-10 p-1 text-white text-xl flex justify-center items-center rounded-md bg-[hsl(20,100,70)]/60">
//             <FontAwesomeIcon icon={faPlus} />
//           </div>

//           <p className=" w-fit font-semibold text-wrap ">Update Activity</p>
//         </div>
//       )}
//     </div>
//   );
// }



// // todo latest
// import React, { useState } from "react";
// import { FiPlus, FiTrash } from "react-icons/fi";
// import { motion } from "framer-motion";
// import { FaFire } from "react-icons/fa";

// const CustomKanban = () => {
//   return (
//     <div className="h-screen w-full bg-[#26150d] text-[#fafafa]">
//       <Board />
//     </div>
//   );
// };

// const Board = () => {
//   const [cards, setCards] = useState(DEFAULT_CARDS);

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-4 h-full p-12 w-full overflow-scroll gap-3  ">
//       <Column
//         title="TODO"
//         column="todo"
//         headingColor="text-yellow-200"
//         cards={cards}
//         setCards={setCards}
//       />
//       <Column
//         title="In progress"
//         column="doing"
//         headingColor="text-blue-200"
//         cards={cards}
//         setCards={setCards}
//       />
//       <Column
//         title="Complete"
//         column="done"
//         headingColor="text-emerald-200"
//         cards={cards}
//         setCards={setCards}
//       />
//       <BurnBarrel setCards={setCards} />
//     </div>
//   );
// };

// const Column = ({ title, headingColor, cards, column, setCards }) => {
//   const [active, setActive] = useState(false);

//   const handleDragStart = (e, card) => {
//     e.dataTransfer.setData("cardId", card.id);
//   };

//   const handleDragEnd = (e) => {
//     const cardId = e.dataTransfer.getData("cardId");

//     setActive(false);
//     clearHighlights();

//     const indicators = getIndicators();
//     const { element } = getNearestIndicator(e, indicators);

//     const before = element.dataset.before || "-1";

//     if (before !== cardId) {
//       let copy = [...cards];

//       let cardToTransfer = copy.find((c) => c.id === cardId);
//       if (!cardToTransfer) return;
//       cardToTransfer = { ...cardToTransfer, column };

//       copy = copy.filter((c) => c.id !== cardId);

//       const moveToBack = before === "-1";

//       if (moveToBack) {
//         copy.push(cardToTransfer);
//       } else {
//         const insertAtIndex = copy.findIndex((el) => el.id === before);
//         if (insertAtIndex === undefined) return;

//         copy.splice(insertAtIndex, 0, cardToTransfer);
//       }

//       setCards(copy);
//     }
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     highlightIndicator(e);

//     setActive(true);
//   };

//   const clearHighlights = (els) => {
//     const indicators = els || getIndicators();

//     indicators.forEach((i) => {
//       i.style.opacity = "0";
//     });
//   };

//   const highlightIndicator = (e) => {
//     const indicators = getIndicators();

//     clearHighlights(indicators);

//     const el = getNearestIndicator(e, indicators);

//     el.element.style.opacity = "1";
//   };

//   const getNearestIndicator = (e, indicators) => {
//     const DISTANCE_OFFSET = 50;

//     const el = indicators.reduce(
//       (closest, child) => {
//         const box = child.getBoundingClientRect();

//         const offset = e.clientY - (box.top + DISTANCE_OFFSET);

//         if (offset < 0 && offset > closest.offset) {
//           return { offset: offset, element: child };
//         } else {
//           return closest;
//         }
//       },
//       {
//         offset: Number.NEGATIVE_INFINITY,
//         element: indicators[indicators.length - 1],
//       }
//     );

//     return el;
//   };

//   const getIndicators = () => {
//     return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
//   };

//   const handleDragLeave = () => {
//     clearHighlights();
//     setActive(false);
//   };

//   const filteredCards = cards.filter((c) => c.column === column);

//   return (
//     <div className="w-56 shrink-0">
//       <div className="mb-3 flex items-center justify-between">
//         <h3 className={`font-medium ${headingColor}`}>{title}</h3>
//         <span className="rounded text-sm text-[#a3a3a3]">
//           {filteredCards.length}
//         </span>
//       </div>
//       <div
//         onDrop={handleDragEnd}
//         onDragOver={handleDragOver}
//         onDragLeave={handleDragLeave}
//         className={`h-full w-full transition-colors ${
//           active ? "bg-[#262626]" : "bg-neutral-800/0"
//         }`}
//       >
//         {filteredCards.map((c) => {
//           return <Card key={c.id} {...c} handleDragStart={handleDragStart} />;
//         })}
//         <DropIndicator beforeId={null} column={column} />
//         <AddCard column={column} setCards={setCards} />
//       </div>
//     </div>
//   );
// };

// const Card = ({ title, id, column, handleDragStart }) => {
//   return (
//     <>
//       <DropIndicator beforeId={id} column={column} />
//       <motion.div
//         layout
//         layoutId={id}
//         draggable="true"
//         onDragStart={(e) => handleDragStart(e, { title, id, column })}
//         className="cursor-grab rounded border border-[#404040] bg-[#262626] p-3 active:cursor-grabbing"
//       >
//         <p className="text-sm text-[#f5f5f5]">{title}</p>
//       </motion.div>
//     </>
//   );
// };

// const DropIndicator = ({ beforeId, column }) => {
//   return (
//     <div
//       data-before={beforeId || "-1"}
//       data-column={column}
//       className="my-0.5 h-0.5 w-full bg-[#a78bfa] opacity-0"
//     />
//   );
// };

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
//           : "border-[#737373] bg-[#a6a6a6] text-[737373]"
//       }`}
//     >
//       {active ? <FaFire className="animate-bounce" /> : <FiTrash />}
//     </div>
//   );
// };

// const AddCard = ({ column, setCards }) => {
//   const [text, setText] = useState("");
//   const [adding, setAdding] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!text.trim().length) return;

//     const newCard = {
//       column,
//       title: text.trim(),
//       id: Math.random().toString(),
//     };

//     setCards((pv) => [...pv, newCard]);

//     setAdding(false);
//   };

//   return (
//     <>
//       {adding ? (
//         <motion.form layout onSubmit={handleSubmit}>
//           <textarea
//             onChange={(e) => setText(e.target.value)}
//             autoFocus
//             placeholder="Add new task..."
//             className="w-full rounded border border-[#a78bfa] bg-[#534380] p-3 text-sm text-[#fafafa] placeholder-[#c4b5fd] focus:outline-0"
//           />
//           <div className="mt-1.5 flex items-center justify-end gap-1.5">
//             <button
//               onClick={() => setAdding(false)}
//               className="px-3 py-1.5 text-xs text-[#a3a3a3] transition-colors hover:text-[#fafafa]"
//             >
//               Close
//             </button>
//             <button
//               type="submit"
//               className="flex items-center gap-1.5 rounded bg-[#fafafa] px-3 py-1.5 text-xs text-[#0a0a0a] transition-colors hover:bg-[#d4d4d4]"
//             >
//               <span>Add</span>
//               <FiPlus />
//             </button>
//           </div>
//         </motion.form>
//       ) : (
//         <motion.button
//           layout
//           onClick={() => setAdding(true)}
//           className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-[#a3a3a3] transition-colors hover:text-[#fafafa]"
//         >
//           <span>Add card</span>
//           <FiPlus />
//         </motion.button>
//       )}
//     </>
//   );
// };

// const DEFAULT_CARDS = [
  
//   // TODO
//   {
//     title: "Research DB options for new microservice",
//     id: "5",
//     column: "todo",
//   },
//   { title: "Postmortem for outage", id: "6", column: "todo" },
//   { title: "Sync with product on Q3 roadmap", id: "7", column: "todo" },

//   // DOING
//   {
//     title: "Refactor context providers to use Zustand",
//     id: "8",
//     column: "doing",
//   },
//   { title: "Add logging to daily CRON", id: "9", column: "doing" },
//   // DONE
//   {
//     title: "Set up DD dashboards for Lambda listener",
//     id: "10",
//     column: "done",
//   },
// ];

// export default CustomKanban;
