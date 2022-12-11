import React from "react";
import { useState } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import AuthModal from "../components/AuthModal";

import "../styles/css/main.css";
import "../styles/src/input.css";
import ilustration from "../assets/ilustration.png";

function Home() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showModal, setShowModal] = useState(false);
  function authModalShow() {
    console.log("auth modal here");
    setShowModal((prevShowModal) => (prevShowModal = true));
    console.log(showModal);
  }
  return (
    <div className="overlay">
      <Navbar />
      <main className="bg-nctGreen flex align-center justify-center text-center h-[90vh]">
        <div className="self-center">
          <img src={ilustration} className="max-w-[100%]"></img>
        </div>
        <div className="flex flex-col align-start justify-center p-8 ">
          <h1 className="main-title">Welcome</h1>
          <button
            className="py-2 px-6 bg-nctLightYellowGreen rounded-md"
            onClick={authModalShow}
          >
            {isSignUp ? "Login" : "Create Account"}
          </button>
        </div>
        {showModal && (
          <AuthModal setShowModal={setShowModal} isSignUp={isSignUp} />
        )}
      </main>
    </div>
  );
}

export default Home;
