import { format } from "date-fns";
import React, { useRef, useState } from "react";

export default function DatePicker({
  hideIcon = true,
  name,
  value,
  onChange,
  onBlur,
}) {
  const inputRef = useRef(null);
  const handleInputClick = (e) => {
    if (inputRef.current) {
      inputRef.current.showPicker(); // Programmatically open the date picker
    }
  };

  return (
    <input
      ref={inputRef}
      placeholder="Start date"
      className={`pl-2 py-1 rounded-md border border-gray-400 ${
        hideIcon ? " hide-default-date-picker " : " "
      }`}
      type="date"
      onClick={handleInputClick}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
}
