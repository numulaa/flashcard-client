import React from "react";
import { useState } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import AuthModal from "../components/AuthModal";

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
    <>
      <Navbar />
      <main>
        <img src={ilustration}></img>
        <div className="container">
          <h1 className="main-title">Welcome</h1>
          <button className="main-btn" onClick={authModalShow}>
            {isSignUp ? "Login" : "Create Account"}
          </button>
          {showModal && <AuthModal />}
        </div>
      </main>
    </>
  );
}

export default Home;
