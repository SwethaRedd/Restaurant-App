import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Layout/Footer";
import Body from "./components/Layout/Body";
import Contact from "./components/Pages/Contact";
import Header from "./components/Layout/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Pages/Contact";
import Error from "./components/Pages/Error";
import RestaurantMenu from "./components/Restaurant/RestaurantMenu";
/*
lazy is a function by react.
lazy takes a callback function, and i can write a import,
this import is a function, & this takes the path of the component.

Chunking
Code splitting
Dynamic Bundling
lazy Loading
on Demand Loading
Dynamic import
*/
const Grocery = lazy(() => import("./components/Grocery/Grocery"));
const About = lazy(() => import("./components/Pages/About"));
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
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Grocery />{" "}
          </Suspense>
        ),
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
