import React from "react";
import { useState } from "react";
import "../App.css";

export default function AuthModal({ setShowModal, isSignUp }) {
  const [authFormData, setAuthFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(authFormData);
  function handleChange(event) {
    setAuthFormData((prevAuthFormData) => {
      return {
        ...prevAuthFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function closeAuth() {
    setShowModal(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
  }

  return (
    <div className="authModal">
      <div className="x-btn" onClick={closeAuth}>
        X
      </div>
      <form className="authModal-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={authFormData.firstName}
        ></input>
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lasttName"
          value={authFormData.lastName}
        ></input>
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={authFormData.email}
        ></input>
        <input
          type="text"
          placeholder="Password"
          onChange={handleChange}
          name="password"
          value={authFormData.password}
        ></input>
        {!isSignUp && (
          <input
            type="text"
            placeholder="Confirm Password"
            onChange={handleChange}
            name="confirmPassword"
            value={authFormData.confirmPassword}
          ></input>
        )}
        <button className="submit-btn">
          {isSignUp ? "Sign In" : "Create Account"}
        </button>
      </form>
    </div>
  );
}
