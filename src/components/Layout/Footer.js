import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-normal p-4 items-center h-40 bg-pink-100 shadow-lg sm:bg-yellow-100">
      <div className="m-4">
        <Link to="contact"> Contact Us </Link>
      </div>
      <div className="links">Links</div>
    </div>
  );
};
export default Footer;
