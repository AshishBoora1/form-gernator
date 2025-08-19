import React from "react";
import { DeleteIcon } from "../Icon/Icon";
const QuestionControls = ({
  index,
  onHandelremoveQuestion,
  onHandelQuestionTypes,
  value,
}) => {
  return (
    <div className="flex mt-8 justify-between items-center">
      <button
        type="button"
        onClick={() => onHandelremoveQuestion(value.id)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition"
      >
        <DeleteIcon /> Remove
      </button>

      <label className="inline-flex items-center cursor-pointer gap-3">
        <span className="text-gray-700 font-medium">Required</span>
        <input
          type="checkbox"
          readOnly
          onClick={() =>
            onHandelQuestionTypes(index, value.required, "required")
          }
          checked={value.required}
          className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-violet-600 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:w-5 after:h-5 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-full"></div>
      </label>
    </div>
  );
};

export default QuestionControls;
