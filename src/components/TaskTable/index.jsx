import React, { Children, useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";

// Example data
const data = [
  {
    sr_No: "01",
    task: "Seva",
    status: "Pending",
    due_date: "20-10-2022",
    description: "kale aavjoo",
    priority: "Normal",
  },
  {
    sr_No: "02",
    task: "Drama Seva",
    status: "In Process",
    due_date: "02-01-2025",
    description: "Jaldi karoo",
    priority: "High",
  },
  {
    sr_No: "03",
    task: "Prasad Seva ",
    status: "Pending",
    due_date: "02-10-2024",
    description: "thay gayu ?",
    priority: "Critical",
  },
  {
    sr_No: "04",
    task: "Patharna Cleaning",
    status: "Pending",
    due_date: "20-11-2022",
    description: "Clean all patharnas ",
    priority: "Normal",
  },
  {
    sr_No: "05",
    task: "Visit yuvak home",
    status: "Done",
    due_date: "20-10-2020",
    description: "Vivek Bhai",
    priority: "Normal",
  },
  {
    sr_No: "05",
    task: "Visit yuvak home",
    status: "In Process",
    due_date: "20-10-2020",
    description: "Vivek Bhai",
    priority: "Normal",
  },
  {
    sr_No: "05",
    task: "Visit yuvak home",
    status: "In Process",
    due_date: "20-10-2020",
    description: "Vivek Bhai",
    priority: "Normal",
  },
];

const TaskTable = () => {
  // Memoize the columns definition to avoid unnecessary recalculations
  const columns = useMemo(
    () => [
      {
        accessorKey: "sr_No", // Access nested data with dot notation
        header: "SR No.",
        size: 150,
      },
      {
        accessorKey: "task", // Normal accessorKey
        header: "Tasks",
        size: 150,
      },
      {
        accessorKey: "status", // Normal accessorKey
        header: "Status",
        Cell: ({ cell }) => (
          <span
            className={`p-2 py-1 text-sm rounded-lg ${
              cell.getValue() === "In Process"
                ? "bg-yellow-600"
                : cell.getValue() === "Done"
                ? "bg-green-600"
                : "bg-cyan-400"
            }`}
          >
            {cell.getValue()}
          </span>
        ),
        size: 150,
      },
      {
        accessorKey: "priority", // Unique column key
        header: "Priority",

        size: 150,
      },

      {
        accessorKey: "due_date", // Access nested data with dot notation
        header: "Due date",
        size: 150,
      },

      {
        accessorKey: "description", // Normal accessorKey
        header: "Description",
        size: 200,
      },
    ],
    []
  ); // Empty array ensures this memoization happens only once

  // Initialize the table with the columns and data
  const table = useMaterialReactTable({
    columns,
    data, // Data must be memoized or stable (useMemo, useState, etc.)
  });

  return (
    <>
      <MaterialReactTable table={table} />;
    </>
  );
};

export default TaskTable;
