import React from "react";
import { useState } from "react";
import "../App.css";

export default function AuthModal() {
  const [authFormData, setAuthFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
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
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={authFormData.firstName}
        ></input>
        <input
          type="text"
          placeholder="Last ame"
          onChange={handleChange}
          name="lasttName"
          value={authFormData.lastName}
        ></input>
        <input
          type="email"
          placeholder="Last ame"
          onChange={handleChange}
          name="email"
          value={authFormData.email}
        ></input>
      </form>
    </>
  );
}
