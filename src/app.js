import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Bod from "./components/Bod.js";
import Banner from "./components/Banner.js";
import Header from "./components/Header.js";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Banner />
      {/* <Bod /> */}
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
