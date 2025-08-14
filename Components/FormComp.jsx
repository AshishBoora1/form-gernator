import React, { useState } from "react";
import { AddIcon, CrossIcon, DeleteIcon } from "../src/icon/Icon";
import fileUpload from "../public/image.png";
const FormComp = () => {
  const [questions, setQuestions] = useState([]);

  const onHandelAddQuestion = () => {
    setQuestions([
      ...questions,
      { required: false, text: "", type: "", options: [""], image: "" },
    ]);
  };

  const onHandelremoveQuestion = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const updateQuestionText = (index, value) => {
    const updated = [...questions];
    updated[index].text = value;
    setQuestions(updated);
  };
  
  const updateQuestionImage = (index, value) => {
    const updated = [...questions];
    updated[index].image = value;
    setQuestions(updated);
  };

  const onhandelUpdaterequired = (index, value) => {
    const updated = [...questions];
    updated[index].required = !value;
    setQuestions(updated);
  };

  const updateQuestionType = (index, value) => {
    const updated = [...questions];
    updated[index].type = value;
    if (value !== "checkbox") {
      updated[index].options = [""];
    }
    setQuestions(updated);
  };

  function onhandeloptionchange(qindex, oindex, value) {
    const updated = [...questions];
    updated[qindex] = {
      ...updated[qindex],
      options: updated[qindex].options.map((opt, i) =>
        i === oindex ? value : opt
      ),
    };
    setQuestions(updated);
  }

  function onHandelAddOption(index) {
    const updated = [...questions];
    updated[index].options.push("");
    setQuestions(updated);
  }

  function onHandelRemoveOption(oindex, qindex) {
    const updated = [...questions];
    updated[qindex].options = updated[qindex].options.filter(
      (v, i) => i !== oindex
    );
    setQuestions(updated);
  }

  return (
    <div className=" flex items-center py-10 flex-col min-h-screen w-full bg-[#f9c8c887]">
      <h1 className=" uppercase text-4xl">form generator</h1>
      <div className=" w-full flex flex-col items-center">
        <form className=" w-[55%]">
          {/* ADD  OPTION */}
          <div className=" mt-3 flex flex-col gap-2.5">
            <label>Description</label>
            <textarea
              className=" border-b-2 outline-none focus:border-b-violet-600 p-2 resize-none"
              name=""
              id=""
            ></textarea>
          </div>

          {/* ADD  QUESTION */}

          {questions.length === 0 && (
            <div className=" flex justify-end mt-4">
              <button
                className=" ms-3"
                type="button"
                onClick={onHandelAddQuestion}
              >
                <AddIcon />
              </button>
            </div>
          )}

          <div>
            {questions.map((value, index, array) => {
              return (
                <div
                  key={index}
                  className="bg-white pb-5 px-5 rounded-3xl mt-10"
                >
                  <div className=" flex gap-2 items-end mt-5">
                    <div className=" mt-3 flex flex-col gap-1 w-full">
                      <label>
                        Question {index + 1}{" "}
                        {value.required && (
                          <span className=" text-red-600">*</span>
                        )}
                      </label>
                      <input
                        className=" border-b-2 outline-none focus:border-b-violet-600 p-2"
                        type="text"
                        required
                        value={questions.text}
                        onChange={(e) =>
                          updateQuestionText(index, e.target.value)
                        }
                        name="name"
                      />
                    </div>
                    <div>
                      <select
                        value={questions.type}
                        onChange={(e) =>
                          updateQuestionType(index, e.target.value)
                        }
                        className="border-b-2 outline-none focus:border-b-violet-600 p-2"
                      >
                        <option value="">Mutiple Fiels Types</option>
                        <option value="text">Text</option>
                        <option value="datetime-local">Date && Time</option>
                        <option value="email">Email</option>
                        <option value="date">Date</option>
                        <option value="time">Time</option>
                        <option value="number">Number</option>
                        <option value="checkbox">CheckBox</option>
                        <option value="image">Image</option>
                      </select>
                    </div>
                    {questions.length - 1 === index && (
                      <button
                        className=" ms-3"
                        type="button"
                        onClick={onHandelAddQuestion}
                      >
                        <AddIcon />
                      </button>
                    )}
                  </div>

                  {/* ADD  OPTION */}

                  {value.type === "checkbox" ? (
                    <div>
                      {value.options.map((value, oindex, array) => {
                        return (
                          <div
                            key={oindex}
                            className=" flex items-end justify-between mt-2"
                          >
                            <input
                              className=" w-[85%] block border-b outline-none p-2"
                              type="text"
                              value={value}
                              onChange={(e) =>
                                onhandeloptionchange(
                                  index,
                                  oindex,
                                  e.target.value
                                )
                              }
                              placeholder={`Option ${oindex + 1}`}
                            />
                            {value.options?.length !== 1 && (
                              <button
                                type="button"
                                className=" outline-none"
                                onClick={() =>
                                  onHandelRemoveOption(oindex, index)
                                }
                              >
                                <CrossIcon />
                              </button>
                            )}
                          </div>
                        );
                      })}
                      <button
                        className=" outline-none mt-3"
                        type="button"
                        onClick={() => onHandelAddOption(index)}
                      >
                        add option or{" "}
                        <span className=" text-blue-700">add other</span>
                      </button>
                    </div>
                  ) : value.type === "image" ? (
                    <div className=" flex justify-center items-center pb-3 pt-10">
                      <input
                        onChange={(e) =>
                          updateQuestionImage(index, e.target.files[0])
                        }
                        type="file"
                        id="image"
                        hidden
                      />
                      <label htmlFor="image">
                        <img
                          className={`${
                            value.image && " h-[250px] w-[250px] object-contain"
                          }`}
                          src={
                            value.image
                              ? URL.createObjectURL(value.image)
                              : fileUpload
                          }
                          alt="fileUpload"
                        />
                      </label>
                    </div>
                  ) : value.type === null || value.type === "" ? null : (
                    <input
                      className=" w-[85%] block  mt-5 border-b-2 outline-none focus:border-b-violet-600 p-2"
                      placeholder="Enter your..."
                      required={value.required}
                      type={value.type}
                    />
                  )}

                  {/* DELETE  BUTTON */}

                  {questions.length != 0 && (
                    <div className=" flex mt-10 justify-start gap-6 flex-row-reverse">
                      <div>
                        <button
                          type="button"
                          onClick={() => onHandelremoveQuestion(index)}
                        >
                          <DeleteIcon />
                        </button>
                      </div>

                      <div>
                        <label className="inline-flex items-center cursor-pointer gap-4">
                          <span>Required</span>
                          <input
                            type="checkbox"
                            onClick={() =>
                              onhandelUpdaterequired(index, value.required)
                            }
                            checked={value.required}
                            className="sr-only peer"
                          />
                          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComp;
