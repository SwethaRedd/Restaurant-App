import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/logo.jpg";
import resLogo from "./assets/res-logo.jpg";

const styleCard = {
  backgroundColor: "lightgray",
};

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = (props) => {
  console.log("props", props);
  const { resName, cuisine, rating, time } = props;
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" src={resLogo} alt="res-img" />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
      <h4>{time}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Res Foods"
          cuisine="Biryani, North Indian, Asian"
          rating="4.4 Stars"
          time="38 Minutes"
        />
        <RestaurantCard
          resName="TFC Foods"
          cuisine="North Indian, Asian"
          rating="4.3 Stars"
          time="48 Minutes"
        />
        <RestaurantCard
          resName="RNRM Foods"
          cuisine="Biryani, Asian"
          rating="4.4 Stars"
          time="28 Minutes"
        />
      </div>
    </div>
  );
};
const Footer = () => {
  return (
    <div className="footer">
      <div className="contact-us">Contact Us</div>
      <div className="links">Links</div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
