// import logo from "../../../assets/logo.jpg";
// import { Link } from "react-router-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/reduxStore/appStore";
import Header from "../Layout/Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header Component", () => {
  it("Should Load Header Component with a Login Button ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: "Login" }); //selecting one button from multiple buttons
    // const loginButton = screen.getByRole("button"); // by role button
    // const loginButton = screen.getByText("Login"); // by text Login
    // console.log("button", button);
    // Assertion
    expect(loginButton).toBeInTheDocument();
  });

  it("Should Load Header Component with a Cart Items 0 ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartItems = screen.getByText("Cart (0 Items)");

    // Assertion
    expect(cartItems).toBeInTheDocument();
  });

  it("Should Load Header Component with a Cart item Using Regex ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartItems = screen.getByText(/Cart/); // regex to find the matching text

    // Assertion
    expect(cartItems).toBeInTheDocument();
  });

  it("Should Change the Button to Logout On Click on Login button", () => {
    // rendering the compoennt
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    // find out the login button
    const loginButton = screen.getByRole("button", { name: "Login" });

    // firing an event
    fireEvent.click(loginButton);
    // find out the Logout Button on screen/ doucment

    const logoutButton = screen.getByRole("button", { name: "Logout" });
    // Assertion
    expect(logoutButton).toBeInTheDocument();
  });
});
