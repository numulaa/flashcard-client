import React from "react";
import { useState } from "react";
import "../App.css";
import Navbar from "../components/Navbar";

export default function NewCardForm() {
  const [addCardForm, setAddCardForm] = useState({
    question: "",
    answer: "",
  });
  console.log(addCardForm);
  function handleChange(event) {
    setAddCardForm((prevAddCardForm) => {
      return {
        ...prevAddCardForm,
        [event.target.name]: event.target.value,
      };
    });
  }
  return (
    <>
      <Navbar />
      <form className="addCard-input">
        <textarea
          name="question"
          placeholder="Question"
          onChange={handleChange}
          value={addCardForm.question}
        />
        <textarea
          name="answer"
          placeholder="answer"
          onChange={handleChange}
          value={addCardForm.answer}
        />
      </form>
    </>
  );
}
