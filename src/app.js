import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Bod from "./components/Bod.js";
import About from "./components/Pages/About.js";
import Contact from "./components/Pages/Contact.js";
import Banner from "./components/Banner.js";
import Header from "./components/Header.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Pages/Contact.js";
import Error from "./components/Pages/Error.js";

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

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
/**
 * createBrowserRouter will take list of paths, path is an objectm will contians path & element
 * RouterProvider will provide the routing config to our App.
 *
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
