import React from "react";
import InputComp from "../ui/InputComp";
import { CrossIcon } from "../Icon/Icon";

function OptionItems({
  oindex,
  ovalue,
  onHandelRemoveOption,
  value,
  index,
  onhandeloptionchange,
}) {
  return (
    <div key={oindex} className="flex items-center gap-3 mt-3">
      <InputComp
        value={ovalue}
        type="text"
        classname="flex-1"
        placeholder={`Option ${oindex + 1}`}
        onHandelChange={(e) =>
          onhandeloptionchange(index, oindex, e.target.value)
        }
      />
      {value.options?.length > 1 && (
        <button
          type="button"
          className="p-2 rounded-full hover:bg-red-100 text-red-500 transition"
          onClick={() => onHandelRemoveOption(oindex, index)}
        >
          <CrossIcon />
        </button>
      )}
    </div>
  );
}

export default OptionItems;
