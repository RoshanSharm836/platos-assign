import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to={`/`}>
        <span>page1</span>
      </NavLink>

      <NavLink to={`/page2`}>
        <span>page2</span>
      </NavLink>
    </nav>
  );
}
