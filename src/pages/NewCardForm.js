import React from "react";
import { useState } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import "../styles/css/main.css";
import "../styles/src/input.css";

export default function NewCardForm() {
  const [isChatGPT, setIsChatGPT] = useState(false);
  const [isManual, setIsManual] = useState(true);
  const [addCardForm, setAddCardForm] = useState({
    question: "",
    answer: "",
  });
  console.log(addCardForm);
  function handleChange(event) {
    const { name, value } = event.target;
    setAddCardForm((prevAddCardForm) => {
      return {
        ...prevAddCardForm,
        [name]: value,
      };
    });
  }
  function handleChatGPT() {
    setIsChatGPT(true);
    setIsManual(false);
  }
  function handleManual() {
    setIsManual(true);
    setIsChatGPT(false);
  }
  return (
    <>
      <Navbar />
      <main className="p-8">
        <div className="flex justify-between px-4 py-4 border-b-2 mb-4 max-w-[30%] border-b-nctDarkGrayish ">
          <button
            className={
              isChatGPT
                ? "bg-nctDarkGrayish text-white p-4 rounded-full"
                : "p-4"
            }
            onClick={handleChatGPT}
          >
            Make with ChatGPT
          </button>
          <button
            className={
              isManual ? "bg-nctDarkGrayish text-white p-4 rounded-full" : "p-4"
            }
            onClick={handleManual}
          >
            Make manually
          </button>
        </div>

        {isManual && (
          <form className="flex flex-col gap-8 align-center">
            <textarea
              name="question"
              placeholder="Question"
              onChange={handleChange}
              value={addCardForm.question}
              className="rounded-md p-3 border-solid border-2 border-gray"
            />
            <textarea
              name="answer"
              placeholder="answer"
              onChange={handleChange}
              value={addCardForm.answer}
              className="rounded-md p-3 border-solid border-2 border-gray"
            />
            <button className="bg-nctLightYellowGreen p-2 rounded-full max-w-[20%]">
              Submit
            </button>
          </form>
        )}
        {isChatGPT && (
          <form className="flex flex-col gap-8 align-center">
            <input
              name="question"
              placeholder="Question"
              onChange={handleChange}
              value={addCardForm.question}
              className="rounded-md p-3 border-solid border-2 border-gray"
            ></input>
          </form>
        )}
      </main>
    </>
  );
}
