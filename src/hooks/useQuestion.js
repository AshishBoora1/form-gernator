import { useEffect, useState } from "react";
import { GetDataFromStorage, SaveDataToStorage } from "../utils/storage";

export function useQuestion() {
  const [questions, setQuestions] = useState([]);

  // GET QUESTION

  useEffect(() => {
    setQuestions(GetDataFromStorage("questions"));
  }, []);

  // ADD QUESTION

  const onHandelAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        required: false,
        text: "",
        type: "",
        options: [""],
        image: "",
        id: Math.random().toString(36).slice(2, 14),
      },
    ]);
  };

  // REMOVE QUESTION

  const onHandelremoveQuestion = (id) => {
    setQuestions(questions.filter((v) => v.id !== id));
    SaveDataToStorage("questions", questions);
  };

  // CHANGE QUESTION TYPES

  const onHandelQuestionTypes = (index, value, type) => {
    setQuestions((prev) => {
      const updated = [...prev];
      updated[index][type] = value;
      return updated;
    });
  };

  // UPDATE QUESTION

  const updateQuestionType = (index, value) => {
    const updated = [...questions];
    updated[index].type = value;
    if (value !== "checkbox") updated[index].options = [""];
    setQuestions(updated);
  };

  // UPDATE OPTION

  function onhandeloptionchange(qindex, oindex, value) {
    setQuestions((prev) => {
      const updated = [...prev];
      updated[qindex].options[oindex] = value;
      return updated;
    });
  }

  // ADD OPTION

  function onHandelAddOption(index) {
    const updated = [...questions];
    updated[index].options.push("");
    setQuestions(updated);
  }

  // REMOVE OPTION

  function onHandelRemoveOption(oindex, qindex) {
    const updated = [...questions];
    updated[qindex].options = updated[qindex].options.filter(
      (_, i) => i !== oindex
    );
    setQuestions(updated);
  }
  return {
    onHandelAddQuestion,
    questions,
    onHandelremoveQuestion,
    onHandelQuestionTypes,
    updateQuestionType,
    onhandeloptionchange,
    onHandelAddOption,
    onHandelRemoveOption,
  };
}
