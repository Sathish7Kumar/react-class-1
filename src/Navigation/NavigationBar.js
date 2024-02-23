import React, { useState } from "react";
import { TbLayoutNavbarFilled } from "react-icons/tb";

const NavigationBar = () => {
  const [showNav, setshowNav] = useState(false);
  const toogle = () => {
    setshowNav(!showNav);
  };
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <a href="#">LOGO</a>
        </div>
        <div
          style={{ color: "red", fontSize: "35px" }}
          className="icon"
          onClick={toogle}
        >
          <TbLayoutNavbarFilled />
        </div>
        <ul className={`nav-links ${showNav ? "show" : ""}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavigationBar;
