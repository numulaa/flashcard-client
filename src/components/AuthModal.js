import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";

export default function AuthModal({ setShowModal, isSignUp }) {
  const navigate = useNavigate();
  const [authFormData, setAuthFormData] = useState({
    userName: "",
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

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/signup", {
        authFormData,
      });
      console.log(res);
      const success = res.status === 200;
      if (success) navigate("/addNewDeck");
    } catch (err) {
      console.log(err);
    }
    console.log("submit");
  }

  return (
    <div className="absolute left-0 right-0 ml-auto mr-auto max-w-2xl h-xl px-20 py-16 bg-nctLightYellowGreen rounded-2xl ">
      <div
        className="absolute right-8 top-8 cursor-pointer"
        onClick={closeAuth}
      >
        X
      </div>
      <form
        className="flex flex-col justify-between gap-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Username"
          onChange={handleChange}
          name="userName"
          value={authFormData.userName}
          className="rounded-md p-3 border-solid border-2 border-gray"
        ></input>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={authFormData.firstName}
          className="rounded-md p-3 border-solid border-2 border-gray"
        ></input>
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          value={authFormData.lastName}
          className="rounded-md p-3 border-solid border-2 border-gray"
        ></input>
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={authFormData.email}
          className="rounded-md p-3 border-solid border-2 border-gray"
        ></input>
        <input
          type="text"
          placeholder="Password"
          onChange={handleChange}
          name="password"
          value={authFormData.password}
          className="rounded-md p-3 border-solid border-2 border-gray"
        ></input>
        {!isSignUp && (
          <input
            type="text"
            placeholder="Confirm Password"
            onChange={handleChange}
            name="confirmPassword"
            value={authFormData.confirmPassword}
            className="rounded-md p-3 border-solid border-2 border-gray"
          ></input>
        )}
        <button className="p-3 rounded-md text-nctWhite bg-nctGreen cursor-pointer mt-4">
          {isSignUp ? "Sign In" : "Create Account"}
        </button>
      </form>
    </div>
  );
}
