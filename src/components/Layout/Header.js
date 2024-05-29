import React, { useState, useEffect, useContext } from "react";
import logo from "../../../assets/logo.jpg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const btnName = "Login";
  const [buttonName, setButtonUpdate] = useState(btnName);
  const onlineStatus = useOnlineStatus();
  // console.log("Header rendered");
  const data = useContext(UserContext);
  const { loggedInUser } = data;
  // console.log("data", data);
  /*
  we import useEffect from named import from react library.
  useEffect(() => {},[] );
  
  If no dependency array => useEffect is called on every render.
  If dependency array is empty = [] => useEffect is called on initial render(just once)
  if dependency array is [btnHandle] => useEffect is called everytume btnHandle is updated.
  */

  /*
  Subscribing to the Store using Selector
  Selector gives you the access to the whole store
  */
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  const handleClick = () => {
    buttonName === "Login"
      ? setButtonUpdate("Logout")
      : setButtonUpdate("Login");
  };

  useEffect(() => {
    console.log("useEffect is called");
  }, [handleClick]);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100">
      <div className="logo-container">
        <img className="w-56" src={logo} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"} </li>
          <li className="px-4">
            <Link to="/">Home </Link>{" "}
          </li>
          <li className="px-4">
            <Link to="/about">About Us </Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="contact"> Contact US </Link>{" "}
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>{" "}
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart"> Cart ({cartItems.length} Items)</Link>
          </li>
          <li className="px-4">{loggedInUser}</li>
          <button className="login" onClick={handleClick}>
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
