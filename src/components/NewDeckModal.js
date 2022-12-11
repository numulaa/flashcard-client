import React, { useState } from "react";

import "../App.css";
export default function NewDeckModal({ setShowNewDeckFormModal }) {
  const [newDeckFormData, setNewDeckFormData] = useState({
    deckTitle: "",
    deckShortDesc: "",
  });
  function handleChange(e) {
    const [name, value] = e.target;
    setNewDeckFormData(() => ({
      [name]: value,
    }));
  }
  function closeNewDeckModal() {
    setShowNewDeckFormModal(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("new deck created");
  }
  return (
    <div className="absolute left-0 right-0 top-0 h-screen ml-auto mr-auto px-8 md:px-20 py-16 bg-nctLightYellowGreen">
      <div
        className="absolute right-8 top-8 cursor-pointer"
        onClick={closeNewDeckModal}
      >
        X
      </div>
      <form
        className="flex flex-col justify-between gap-2"
        onSubmit={handleSubmit}
      >
        <label htmlFor="deckTitle">Deck Title</label>
        <input
          type="text"
          placeholder="Deck Title"
          onChange={handleChange}
          name="deckTitle"
          value={newDeckFormData.deckTitle}
          className="rounded-md p-3 border-solid border-2 border-gray"
        ></input>
        <label htmlFor="deckTitle">Short Description</label>
        <textarea
          type="text"
          placeholder="Short description about the deck"
          onChange={handleChange}
          name="deckTitle"
          value={newDeckFormData.deckTitle}
          className="rounded-md p-3 border-solid border-2 border-gray"
        />

        <button className="p-3 rounded-md text-nctWhite bg-nctGreen cursor-pointer mt-4">
          Create Deck
        </button>
      </form>
    </div>
  );
}
