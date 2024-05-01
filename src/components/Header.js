import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.jpg";

const Header = () => {
  const btnName = "Login";
  const [buttonName, setButtonUpdate] = useState(btnName);
  console.log("Header rendered");
  /*
  we import useEffect from named import from react library.
  useEffect(() => {},[] );
  
  If no dependency array => useEffect is called on every render.
  If dependency array is empty = [] => useEffect is called on initial render(just once)
  if dependency array is [btnHandle] => useEffect is called everytume btnHandle is updated.
  */

  const handleClick = () => {
    buttonName === "Login"
      ? setButtonUpdate("Logout")
      : setButtonUpdate("Login");
  };

  useEffect(() => {
    console.log("useEffect is called");
  }, [handleClick]);

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
