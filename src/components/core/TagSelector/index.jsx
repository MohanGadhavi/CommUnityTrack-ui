import {
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import React, { useState } from "react";
import Select from "react-select";

const tagList = [
  { value: "blue", label: "Blue" },
  { value: "green", label: "Green" },
  { value: "yellow", label: "Yellow" },
  { value: "red", label: "Red" },
  { value: "redddd", label: "Red" },
  { value: "reddddd", label: "Red" },
  { value: "redddddd", label: "Red" },
  { value: "reddddddd", label: "Red" },
];
export default function TagSelector({ isReadOnly }) {
  const [selectedTagList, setSelectedTagList] = useState([]);

  return (
    <Select
      defaultValue={[tagList[2], tagList[3]]}
      isMulti
      name="colors"
      options={tagList}
      className="basic-multi-select"
      classNamePrefix="select"
      components={{
        MultiValueContainer: ({ children, ...props }) => (
          <div className="bg-purple-100 text-white rounded-md flex items-center justify-center">
            {children}
          </div>
        ),
      }}
      styles={{
        valueContainer: (base) => ({
          ...base,
          paddingInline: "4px",
          gap: "4px",
        }),
        multiValueLabel: (base) => ({
          ...base,
          color: "black",
        }),

        multiValueRemove: (base) => ({
          ...base,
          // backgroundColor: "red",
          height: "100%",
          padding: "5px",
          borderRadius: "50%",
          ":hover": {
            backgroundColor: "rgba(220, 38, 38, 0.5)", // Tailwind's `bg-red-600`
            color: "white", // Tailwind's `text-white`
          },
        }),
      }}
    />
    // <Popover>
    //   <PopoverHandler>
    //     <div className=" p-2 rounded-md bg-white border border-gray-400">
    //       {selectedTagList.length === 0
    //         ? "Enter or Select tags..."
    //         : selectedTagList.map((tag, i) => (
    //             <div className="flex" key={i}>
    //               {tag}
    //               <span className="p-1 bg-red-100 text-red-400">X</span>
    //             </div>
    //           ))}
    //     </div>
    //   </PopoverHandler>
    //   <PopoverContent className="z-[10000] p-1">
    //     {tagList.map((tag, i) => (
    //       <div key={i} className="p-2 hover:bg-gray-200 cursor-pointer">
    //         {tag}
    //       </div>
    //     ))}
    //   </PopoverContent>
    // </Popover>
  );
}
