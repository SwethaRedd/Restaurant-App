import React, { useState } from "react";
import logo from "../../assets/logo.jpg";

const Header = () => {
  const btnName = "Login";
  const [buttonName, setButtonUpdate] = useState(btnName);

  const handleClick = () => {
    buttonName === "Login"
      ? setButtonUpdate("Logout")
      : setButtonUpdate("Login");
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact US</li>
          <li>Cart</li>
          <button className="login" onClick={handleClick}>
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
