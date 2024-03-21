import React from "react";
import Logo from "../photos/logo.png";
import "./Header.css";

const Header = () => {
  return (

      <div className="container">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <a href="/">Home</a>/<a href="/">About</a>/<a href="/">Services</a>/
          <a href="/">FAQs</a>/
          <a href="/">Contact</a>
        </div>
        <div className="login">
            <button type="button">Login</button>
        </div>
      </div>

  );
};

export default Header;
