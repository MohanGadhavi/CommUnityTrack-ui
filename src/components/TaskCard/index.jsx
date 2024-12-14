import { faCalendar, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";

import Select from "react-select";
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

export default function index({ title }) {
  const [selected, setSelected] = useState();

  const defaultClassNames = getDefaultClassNames();

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
      <div className="grid grid-cols-2 mt-6 bg-gray-200 py-2 px-4 rounded-lg">
        <div className="status flex items-center gap-5">
          <p className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faBullseye}
              className="text-base text-gray-600 -mt-[1px] "
            />{" "}
            <span>Status</span>
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
              name="colors"
              //   isClearable
              options={statusOptions}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
        </div>
        <div className="status flex items-center gap-5">
          <p className="flex items-center gap-2">
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
        <div className="status flex items-center gap-5">
          <p className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faCalendar}
              className="text-base text-gray-600 -mt-[1px] "
            />
            <span>Date</span>
          </p>
          {/* <div className="min-w-52">
            <Select
              defaultValue={[colourOptions[2], colourOptions[3]]}
              isMulti
              name="colors"
              options={colourOptions}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div> */}
          <div className=" w-52 ">
            <DayPicker
              mode="single"
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
                // today: `bg-green-400/30`, // Add a border to today's date
                selected: `text-white rounded-full border border-blue-400`, // Highlight the selected day
                root: ` w-[18rem] h-[18rem] bg-white rounded-xl shadow-lg p-3`, // Add a shadow to the root element
                // chevron: `${defaultClassNames.chevron} `, // Change the color of the chevron
                day: `w-8 h-8   relative `,
                month: `w-full  `,
                months: "relative w-full",
                month_grid: ` w-full  `,
                day_button: " w-auto absolute inset-0 text-center ",
                weekday: "w-8 h-8 font-normal",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
