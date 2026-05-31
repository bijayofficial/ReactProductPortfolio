import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navLinkStyle = ({ isActive }) =>
    `tracking-wide text-sm hover:underline hover:underline-offset-5 decoration-purple-500 decoration-2 
    ${isActive ? "underline underline-offset-5 text-purple-600" : ""}`;
  return (
    <header className="font-inter ">
      <nav className="flex justify-between items-center px-55 py-8">
        <div className="flex gap-3 items-center justify-center">
          {/* Link */}
          <NavLink to="/">
            <h1 className="text-2xl font-thin tracking-widest hover:text-purple-600 active:opacity-75  ">
              MERN
            </h1>
          </NavLink>
        </div>

        <div className="flex gap-6">
          <NavLink to="/contact" className={navLinkStyle}>
            <h1> Project</h1>
          </NavLink>
          <NavLink to="/about" className={navLinkStyle}>
            <h1> Hire Me</h1>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
