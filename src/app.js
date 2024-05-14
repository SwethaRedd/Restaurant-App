import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Layout/Footer";
import Body from "./components/Layout/Body";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Header from "./components/Layout/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Pages/Contact";
import Error from "./components/Pages/Error";
import RestaurantMenu from "./components/Restaurant/RestaurantMenu";
import Grocery from "./components/Grocery/Grocery";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Grocery />,
      },
      //Dynamic Routing:  /:resId is dynamic here
      // you can specify dynamic segments in the route path by prefixing them with a colon (:)
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
/**
 * createBrowserRouter will take list of paths, path is an objectm will contians path & element
 * RouterProvider will provide the routing config to our App.
 *
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
