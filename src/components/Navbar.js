import React from "react";
import "../App.css";

export default function Navbar() {
  return (
    <header className="header">
      <nav className="navigation">
        <h2>NCT-Card</h2>
        <ul>
          <li>
            <a hraf="#">Login</a>
          </li>
          <li>
            <a hraf="#">Sign Up</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
