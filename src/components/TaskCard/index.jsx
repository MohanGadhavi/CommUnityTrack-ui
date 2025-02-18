import {
  faCalendar,
  faFlag,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faBullseye, faLink, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";
import { useFormik } from "formik";
import * as Yup from "yup";

import Select from "react-select";
import DatePicker from "../core/DatePicker";
import TagSelector from "../core/TagSelector";
import api from "../../utils/api";
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

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  status: Yup.string().required("Status is required"),
  relationship: Yup.string().required("Relationship is required"),
  // Add more validation rules for other fields as needed
});

export default function index({
  title,
  createMode,
  readonly = true,
  handleOpenDialog,
}) {
  const [toggleDatePicker, setToggleDatePicker] = useState(false);
  const [allUser, setAllUser] = useState([]);
  const [selected, setSelected] = useState();

  const assigneeOptions = allUser.map((usr, i) => ({
    value: usr.userName,
    label: usr.userName,
  }));

  const defaultClassNames = getDefaultClassNames();

  useEffect(() => {
    // Fetch events from API
    // const fetchEvents = async () => {
    //   try {
    //     const response = await fetch('/api/events'); // Replace with your actual API endpoint
    //     const data = await response.json();
    //     setEvents(data.map(event => ({ value: event.id, label: event.name })));
    //   } catch (error) {
    //     console.error('Error fetching events:', error);
    //   }
    // };

    // Fetch users from API
    const fetchUsers = async () => {
      // try {
      //   const response = await fetch('/api/users'); // Replace with your actual API endpoint
      //   const data = await response.json();
      //   setUsers(data.map(user => ({ value: user.id, label: user.name })));
      // } catch (error) {
      //   console.error('Error fetching users:', error);
      // }

      try {
        api
          .get("/user/alluser")
          .then((res) => {
            console.log("ResAllUserrrr ", res);
            setAllUser(res.data.user);
          })
          .catch(() => {
            console.log("error while fetching all users");
          });
      } catch (error) {
        console.error("Invalid token:", error);
      } finally {
        console.log("All Usersss::: ", allUser);
      }
    };

    // fetchEvents();
    fetchUsers();
  }, []);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      status: statusOptions[0],
      start_date: "",
      end_date: "",
      relationship: {},
      assignees: [],
      priority: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log("Form submitted:", values);
      // Make API call to create task with the submitted values
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="w-full p-4 text-black ">
        {
          <div className="text-xl font-semibold flex gap-2 items-center">
            <p className="text-gray-800"> Title: </p>
            {createMode ? (
              <div className="relative">
                <input
                  className="placeholder:font-normal  text-base font-normal rounded-md border border-gray-700 p-1"
                  type="text"
                  placeholder="Enter Task Title"
                  name="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.title && formik.errors.title ? (
                  <p className="absolute top-full left-0 text-red-400 text-xs font-normal">
                    {formik.errors.title}
                  </p>
                ) : null}
              </div>
            ) : (
              <p> {title}</p>
            )}
          </div>
        }

        <div className="mt-3">
          <p className="text-gray-800"> Description: </p>{" "}
          {createMode ? (
            <div className="relative">
              <input
                className="w-full text-wrap placeholder:font-normal  text-base font-normal rounded-md border border-gray-700 p-1"
                type="text"
                placeholder="Enter Description"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.description && formik.errors.description ? (
                <p className="absolute top-full left-0 text-red-400 text-xs font-normal">
                  {formik.errors.description}
                </p>
              ) : null}
            </div>
          ) : (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dolorum ad magni libero ab quasi! Reiciendis a consequuntur
              consectetur repudiandae ea fugit inventore, nulla voluptatibus
              quisquam esse aliquam, provident atque?
            </p>
          )}
        </div>
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
                options={statusOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                value={formik.values.status}
                onChange={(selectedOption) => {
                  formik.setFieldValue("status", selectedOption);
                  console.log("selectedOption::: ", selectedOption);
                }}
                // onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.status && formik.errors.status ? (
                <p className="text-red-400 text-sm">{formik.errors.status}</p>
              ) : null}
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
              <Select
                options={statusOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                name="relationship"
                value={formik.values.relationship}
                onChange={(selectedOption) =>
                  formik.setFieldValue("relationship", selectedOption)
                }
                // onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.relationship && formik.errors.relationship ? (
                <p className="text-red-400 text-sm">
                  {formik.errors.relationship}
                </p>
              ) : null}

              {formik.touched.relationship && formik.errors.relationship ? (
                <p className="text-red-400 text-sm">
                  {formik.errors.relationship}
                </p>
              ) : null}
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
              <DatePicker
                name={"start_date"}
                value={formik.values.start_date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {" - "}
              <DatePicker
                name={"end_date"}
                value={formik.values.end_date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
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
                isMulti
                options={assigneeOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                name="assignees"
                value={formik.values.assignees}
                onChange={(selectedOptions) =>
                  formik.setFieldValue(
                    "assignees",
                    selectedOptions.map((option) => option)
                  )
                }
                onBlur={formik.handleBlur}
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
          {readonly && (
            <div className="priority flex items-center ">
              <p className="flex items-center gap-2 w-32">
                <FontAwesomeIcon
                  icon={faTag}
                  className="text-base text-gray-600 -mt-[1px] "
                />
                <span>Tags</span>
              </p>
              <div className="relative">
                <TagSelector isReadOnly />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full p-2  pr-4 flex items-center justify-end gap-4">
        <Button
          onClick={handleOpenDialog}
          className="bg-gray-400 text-black border border-gray-400"
        >
          Cencel
        </Button>
        <Button type="submit" className="bg-purple-400">
          Add Task
        </Button>
      </div>
    </form>
  );
}
