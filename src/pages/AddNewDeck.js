import React, { useState } from "react";
import Navbar from "../components/Navbar";
import NewDeckModal from "../components/NewDeckModal";
import Decks from "../components/Decks";

import "../styles/css/main.css";
import "../styles/src/input.css";

function AddNewDeck() {
  const [newDeckFormData, setNewDeckFormData] = useState({
    deckTitle: "",
    deckShortDesc: "",
  });
  const [showNewDeckFormModal, setShowNewDeckFormModal] = useState(false);
  function openNewDeckForm() {
    setShowNewDeckFormModal(true);
  }
  const allDecks = [newDeckFormData].map((deck) => (
    <Decks key={deck.id} deck={deck} />
  ));

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
          <NewDeckModal
            setShowNewDeckFormModal={setShowNewDeckFormModal}
            newDeckFormData={newDeckFormData}
            setNewDeckFormData={setNewDeckFormData}
          />
        )}
        <div className="flex flex-wrap mt-6">{allDecks}</div>
      </main>
    </>
  );
}

export default AddNewDeck;
