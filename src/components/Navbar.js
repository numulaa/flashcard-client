import React from "react";
import "../App.css";

export default function Navbar() {
  return (
    <header className="bg-nctGreen p-8">
      <nav className="flex justify-between">
        <h2>NCT-Card</h2>
        <ul className="flex justify-between basis-[10%]">
          <li className="list-none">
            <a hraf="#">Login</a>
          </li>
          <li className="list-none">
            <a hraf="#">Sign Up</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
