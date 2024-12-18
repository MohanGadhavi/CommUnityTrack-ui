import {
  faCalendar,
  faFlag,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faBullseye, faLink, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";

import Select from "react-select";
import DatePicker from "../core/DatePicker";
import TagSelector from "../core/TagSelector";
// import "react-day-picker/style.css";

const colourOptions = [
  { value: "blue", label: "Blue" },
  { value: "green", label: "Green" },
  { value: "yellow", label: "Yellow" },
  { value: "red", label: "Red" },
  { value: "redddd", label: "Red" },
  { value: "reddddd", label: "Red" },
  { value: "redddddd", label: "Red" },
  { value: "reddddddd", label: "Red" },
];

const statusOptions = [
  { value: "backlog", label: "Backlog" },
  { value: "planning", label: "Planning" },
  { value: "inprogress", label: "In Progress" },
  { value: "done", label: "Done" },
];
const priorityOptions = [
  { value: "normal", label: "Normal" },
  { value: "high", label: "High" },
  { value: "urgent", label: "Urgent" },
];

export default function index({ title }) {
  const [toggleDatePicker, setToggleDatePicker] = useState(false);
  const [selected, setSelected] = useState();

  const defaultClassNames = getDefaultClassNames();

  useEffect(() => {
    console.log("Date::::: ", selected);
  }, [selected]);

  return (
    <div className="w-full p-4 text-black ">
      <h1 className="text-xl font-semibold">
        <span className="text-gray-800"> Title: </span> {title}
      </h1>
      <p className="mt-2">
        <span className="text-gray-800"> Description: </span> Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Similique dolorum ad magni libero
        ab quasi! Reiciendis a consequuntur consectetur repudiandae ea fugit
        inventore, nulla voluptatibus quisquam esse aliquam, provident atque?
      </p>
      <div className=" task-info grid grid-cols-2 mt-6 bg-gray-200 py-2 px-4 rounded-lg gap-4">
        <div className="status flex items-center">
          <p className="flex items-center gap-2 w-32">
            <FontAwesomeIcon
              icon={faBullseye}
              className="text-base text-gray-600 -mt-[1px] "
            />{" "}
            <span>Status</span>
          </p>
          <div className="min-w-52">
            <Select
              defaultValue={statusOptions[0]}
              name="status"
              //   isClearable
              options={statusOptions}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
        </div>
        <div className="relationship flex items-center">
          <p className="flex items-center gap-2 w-32">
            <FontAwesomeIcon
              icon={faLink}
              className="text-base text-gray-600 -mt-[1px] "
            />{" "}
            <span>Relationship</span>
          </p>
          <div className="min-w-52">
            {/* <Select
              variant="outlined"
              label="Select status"
              size="md"
              className=""
            >""
              <Option>Backlog</Option>
              <Option>Planning</Option>
              <Option>In Progress</Option>
              <Option>Done</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select> */}
            <Select
              defaultValue={statusOptions[0]}
              name="status"
              //   isClearable
              options={statusOptions}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
        </div>
        <div className="dates flex items-center ">
          <p className="flex items-center gap-2 w-32">
            <FontAwesomeIcon
              icon={faCalendar}
              className="text-base text-gray-600 -mt-[1px] "
            />
            <span>Dates</span>
          </p>
          <div className="relative">
            <DatePicker />
            {" - "}
            <DatePicker />
            {/* <DayPicker
              mode="single"
              // captionLayout="dropdown"
              today={Date()}
              selected={selected}
              onSelect={setSelected}
              footer={
                selected
                  ? `Selected: ${selected.toLocaleDateString()}`
                  : "Pick a day."
              }
              classNames={{
                // today: `relative before:absolute before:z-[0] before:inset-0 before:bg-green-400  before:rounded-full`, // Add a border to today's date
                today: `text-purple-700`, // Add a border to today's date
                selected: `bg-purple-100 outline outline-purple-400 outline-[2px] `, // Highlight the selected day
                root: ` w-[16rem] rounded-xl shadow-lg p-2 border border-gray-400 select-none`, // Add a shadow to the root element
                chevron: `w-5`, // Change the color of the chevron
                day: `w-3 h-7 relative rounded-full `,
                month: `w-full  `,
                months: "relative w-full",
                month_grid: ` w-full  `,
                day_button: "rounded-full w-auto absolute inset-0 text-center ",
                weekday: "w-8 h-8 font-[600]",
                footer: "mt-1 pt-1 border-t border-gray-400",
                years_dropdown: "bg-red-300",
              }}
            /> */}
          </div>
        </div>
        <div className="assignees flex items-center ">
          <p className="flex items-center gap-2 w-32">
            <FontAwesomeIcon
              icon={faUser}
              className="text-base text-gray-600 -mt-[1px] "
            />
            <span>Assignees</span>
          </p>
          <div className="min-w-52">
            <Select
              defaultValue={[colourOptions[2], colourOptions[3]]}
              isMulti
              name="colors"
              options={colourOptions}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
        </div>

        <div className="priority flex items-center ">
          <p className="flex items-center gap-2 w-32">
            <FontAwesomeIcon
              icon={faFlag}
              className="text-base text-gray-600 -mt-[1px] "
            />
            <span>Priority</span>
          </p>
          <div className="relative">
            <Select
              defaultValue={priorityOptions[0]}
              name="colors"
              //   isClearable
              options={priorityOptions}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
        </div>
        <div className="priority flex items-center ">
          <p className="flex items-center gap-2 w-32">
            <FontAwesomeIcon
              icon={faTag}
              className="text-base text-gray-600 -mt-[1px] "
            />
            <span>Tags</span>
          </p>
          <div className="relative">
            <TagSelector />
          </div>
        </div>
      </div>
    </div>
  );
}
