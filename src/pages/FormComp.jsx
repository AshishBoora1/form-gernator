import React, { useEffect, useState } from "react";
import LabelComp from "../components/ui/LabelComp";
import InputComp from "../components/ui/InputComp";
import ImageUpload from "../components/form/ImageUpload";
import QuestionControls from "../components/form/QuestionControls";
import { GetDataFromStorage, SaveDataToStorage } from "../utils/storage";
import QuestionItem from "../components/form/QuestionItem";
import OptionItems from "../components/form/OptionItems";
import { useQuestion } from "../hooks/useQuestion";

const FormComp = () => {

  const {
    onHandelAddQuestion,
    questions,
    onHandelremoveQuestion,
    onHandelQuestionTypes,
    updateQuestionType,
    onhandeloptionchange,
    onHandelAddOption,
    onHandelRemoveOption,
  } = useQuestion();

  return (
    <div className="flex items-center py-12 flex-col min-h-screen w-full bg-gradient-to-tr from-[#fdfbfb] via-[#ebedee] to-[#dfe9f3]">
      <h1 className="uppercase text-4xl font-extrabold tracking-wide text-gray-800 mb-6 drop-shadow-lg">
        Form Generator
      </h1>

      <div className="w-full flex flex-col items-center">
        <form className="w-[60%] max-w-3xl bg-white/70 backdrop-blur-md shadow-2xl rounded-3xl p-10 border border-gray-200">
          <div className="mb-8">
            <LabelComp
              text={"Form Description"}
              className={"mb-2 block"}
              htmlFor="Description"
            />
            <textarea
              className="w-full mt-4 border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 resize-none shadow-sm"
              rows={3}
              id="Description"
              placeholder="Write a short description about this form..."
            ></textarea>
          </div>

          {/* Dynamic Questions */}
          {questions.map((value, index) => (
            <div
              key={value.id}
              className="bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200 shadow-md pb-6 px-6 rounded-2xl mt-10 "
            >
              {/* Question & Type */}

              <QuestionItem
                onHandelQuestionTypes={onHandelQuestionTypes}
                updateQuestionType={updateQuestionType}
                index={index}
                value={value}
              />

              {value.type === "checkbox" && (
                <div className="mt-4">
                  {value.options.map((ovalue, oindex) => (
                    <div key={oindex} className="flex items-center gap-3 mt-3">
                      <OptionItems
                        oindex={oindex}
                        ovalue={ovalue}
                        index={index}
                        onhandeloptionchange={onhandeloptionchange}
                        onHandelRemoveOption={onHandelRemoveOption}
                        value={value}
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    className="mt-4 px-4 py-2 text-sm font-medium text-violet-600 bg-violet-100 rounded-lg hover:bg-violet-200 transition"
                    onClick={() => onHandelAddOption(index)}
                  >
                    + Add Option
                  </button>
                </div>
              )}

              {/*         Image Upload      */}

              {value.type === "image" && (
                <ImageUpload
                  image={value.image}
                  onChange={(e) =>
                    onHandelQuestionTypes(index, e.target.files[0], "image")
                  }
                />
              )}

              {/*            Single Inputs         */}

              {value.type &&
                value.type !== "checkbox" &&
                value.type !== "image" && (
                  <InputComp
                    value={value.options[0]}
                    type={value.type}
                    classname="w-full mt-5"
                    placeholder="Enter your answer..."
                    required={value.required}
                    onHandelChange={(e) =>
                      onhandeloptionchange(index, 0, e.target.value)
                    }
                  />
                )}

              {/*            Bottom Controls           */}

              <QuestionControls
                index={index}
                value={value}
                onHandelremoveQuestion={onHandelremoveQuestion}
                onHandelQuestionTypes={onHandelQuestionTypes}
              />
            </div>
          ))}

          {/* Floating Buttons */}
        </form>
        <div className="fixed top-[45%] right-[2%] flex flex-col gap-5">
          <button
            type="button"
            onClick={onHandelAddQuestion}
            className="px-8 py-3 bg-gradient-to-r from-violet-500 to-violet-600 text-white rounded-2xl shadow-lg hover:scale-105 transform transition"
          >
            + Add Question
          </button>
          <button
            type="button"
            onClick={() => SaveDataToStorage("questions", questions)}
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl shadow-lg hover:scale-105 transform transition"
          >
            💾 Save Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormComp;
