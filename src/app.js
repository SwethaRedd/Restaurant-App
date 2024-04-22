import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Header from "./components/Header.js";

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
