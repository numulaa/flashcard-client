import React from "react";
export default function Decks(props) {
  return (
    <div className="p-4 bg-nctLightYellowGreen rounded-md">
      <h1 className="font-bold">{props.deck.deckTitle}</h1>
      <p>{props.deck.deckShortDesc}</p>
    </div>
  );
}
