import React, { useState } from "react";
import Navbar from "../components/Navbar";
import NewDeckModal from "../components/NewDeckModal";
import "../styles/css/main.css";
import "../styles/src/input.css";

function AddNewDeck() {
  const [showNewDeckFormModal, setShowNewDeckFormModal] = useState(false);
  function openNewDeckForm() {
    setShowNewDeckFormModal(true);
  }
  return (
    <>
      <Navbar />
      <main className="flex flex-col p-8 align-start justify-between relative">
        <button
          className="p-2 border-2 w-1/6 bg-nctDarkGrayish text-nctWhite rounded-md md:max-w-1/6"
          onClick={openNewDeckForm}
        >
          + Create Deck
        </button>
        {showNewDeckFormModal && (
          <NewDeckModal setShowNewDeckFormModal={setShowNewDeckFormModal} />
        )}
      </main>
    </>
  );
}

export default AddNewDeck;
