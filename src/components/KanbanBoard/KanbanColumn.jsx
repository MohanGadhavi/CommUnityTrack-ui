import React, { useMemo, useState } from "react";
import KanbanDropIndicator from "./kanbanDropIndicator";
import KanbanCard from "./kanbanCard";
import { color } from "framer-motion";

export default function KanbanColumn({
  title,
  color = "red",
  cards,
  column,
  setCards,
}) {
  const colorList = {
    red: "bg-red-400",
    blue: "bg-blue-400",
    purple: "bg-purple-300",
    orange: "bg-orange-400",
    green: "bg-green-400",
    default: "bg-gray-400",
  };

  const columnColor = colorList[color] || "bg-gray-400";

  const [active, setActive] = useState(false);

  const handleDragStart = (e, card) => {
    e.dataTransfer.setData("cardId", card._id);
    e.dataTransfer.setData("cardCol", card.status);
  };

  const handleDragEnd = (e) => {
    // debugger;
    const cardId = e.dataTransfer.getData("cardId");
    const cardCol = e.dataTransfer.getData("cardCol");

    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || "-1";

    if (before !== cardId && column !== cardCol) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, column };

      console.log("updateddddddddddddddd ", cardToTransfer);

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    highlightIndicator(e);

    setActive(true);
  };

  const clearHighlights = (els) => {
    const indicators = els || getIndicators();

    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  const highlightIndicator = (e) => {
    const indicators = getIndicators();

    clearHighlights(indicators);

    const el = getNearestIndicator(e, indicators);

    el.element.style.opacity = "1";
  };

  const getNearestIndicator = (e, indicators) => {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();

        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );

    return el;
  };

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };

  const filteredCards = useMemo(
    () => cards.filter((c) => c.status === column),
    [cards]
  );

  return (
    <div
      className={` p-2  rounded-md ${columnColor} border border-gray-300 ${
        active ? `bg-opacity-50` : `bg-opacity-20`
      }  `}
      onDrop={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      {/* column header */}
      <div className=" p-2 flex items-center justify-between gap-2 border-b border-gray-500  ">
        <h3
          className={`text-nowrap font-medium ${columnColor} bg-opacity-60 px-3 rounded-sm text-black`}
        >
          {title}
        </h3>
        <span className="w-5 h-5 text-center rounded-full text-sm bg-white/70">
          {filteredCards.length}
        </span>
      </div>

      {/* column body */}
      <div
        className={` w-full pt-2 transition-colors ease-linear flex flex-col gap-2   `}
      >
        {filteredCards.map((c, i) => {
          return (
            <div className=" max-w-[15rem] " key={i}>
              <KanbanCard
                key={c._id}
                {...c}
                handleDragStart={handleDragStart}
              />
            </div>
          );
        })}
        <KanbanDropIndicator beforeId={null} column={column} />
      </div>
    </div>
  );
}
