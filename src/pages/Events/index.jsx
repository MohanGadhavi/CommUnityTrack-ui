import React, { useState } from "react";
import KanbanBoard from "../../components/kanbanBoard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const Events = () => {
  return (
    <div className="">
      <div className="h-14 py-2 px-4 border-b flex items-center gap-2 bg-gray-50 sticky top-0">
        <FontAwesomeIcon icon={faCalendarDays} className="text-sm" />
        <p className="pt-[2px]">Events</p>
      </div>
      <div className="p-5">
        <KanbanBoard />
      </div>
    </div>
  );
};

export default Events;
