import React from "react";

function InputComp({
  value,
  classname = "",
  type,
  id,
  placeholder,
  onHandelChange,
  required = false,
}) {
  return (
    <input
      className={`border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 shadow-sm ${classname}`}
      type={type}
      value={value}
      id={id}
      required={required}
      placeholder={placeholder}
      onChange={onHandelChange}
    />
  );
}

export default InputComp;
