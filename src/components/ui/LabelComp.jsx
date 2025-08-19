import React from "react";

function LabelComp({ text, classname="" , htmlfor }) {
  return (
    <label
      className={`${classname} font-semibold text-gray-700 `}
      htmlFor={htmlfor}
    >
      {text}
    </label>
  );
}

export default LabelComp;
