import React, { useState } from "react";
import { TbLayoutNavbarFilled } from "react-icons/tb";
import { IoLogoGoogle } from "react-icons/io";
import { Link } from "react-router-dom";

const NavigationBar = () => {

  const [showNav, setshowNav] = useState(false);

  const toogle = () => {
    setshowNav(!showNav); // true // false // true
  };
  
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to="/"> <IoLogoGoogle style={{color:"blue",fontSize:"35px"}} />MY PAGE</Link>
        </div>
        <div
          style={{ color: "red", fontSize: "35px" }}
          className="icon"
          onClick={toogle}
        >
          <TbLayoutNavbarFilled />
        </div>
        {/* <ul className="nav-link show"></ul> */}
        <ul className={`nav-links ${showNav ? "show" : ""}`}>
          <li>
            <Link to="/signin">Signin Page</Link>
          </li>
          <li>
          <Link to="/callback">Callback</Link>
          </li>
          <li>
          <Link to="/ref">Ref</Link>
          </li>
          <li>
          <Link to="/memo">Memo Hook</Link>
          </li>
          <li>
          <Link to="/popup">PopUp</Link>
          </li>
          <li>
          <Link to="/vote">Vote Page</Link>
          </li>
          <li>
          <Link to="/state">State Page</Link>
          </li>
          <li>
          <Link to="/effect">Effect Page</Link>
          </li>
          <li>
          <Link to="/recap">Recap</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavigationBar;
