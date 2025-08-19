import React from "react";
import LabelComp from "../ui/LabelComp";
import InputComp from "../ui/InputComp";

function QuestionItem({
  updateQuestionType,
  index,
  value,
  onHandelQuestionTypes,
}) {
  return (
    <div className="flex gap-5 items-end mt-5">
      <div className="flex flex-col gap-2 w-full">
        <LabelComp text={`Question${index + 1}`} htmlFor={index + 1}>
          {value.required && <span className="text-red-600 ml-1">*</span>}
        </LabelComp>
        <InputComp
          type="text"
          value={value.text}
          id={index + 1}
          placeholder="Enter Your Question"
          onHandelChange={(e) =>
            onHandelQuestionTypes(index, e.target.value, "text")
          }
        />
      </div>

      <div>
        <select
          value={value.type}
          onChange={(e) => updateQuestionType(index, e.target.value)}
          className="border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 shadow-sm"
        >
          <option value="">Select Type</option>
          <option value="text">Text</option>
          <option value="datetime-local">Date & Time</option>
          <option value="email">Email</option>
          <option value="date">Date</option>
          <option value="time">Time</option>
          <option value="number">Number</option>
          <option value="checkbox">CheckBox</option>
          <option value="image">Image</option>
        </select>
      </div>
    </div>
  );
}

export default QuestionItem;
