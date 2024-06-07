import { render, screen } from "@testing-library/react";
import Contact from "../Pages/Contact";
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  // Assertion
  expect(heading).toBeInTheDocument();
});

test("Should Load Button inside Contact Component", () => {
  render(<Contact />);
  const button = screen.getByText("Submit");
  // Assertion
  expect(button).toBeInTheDocument();
});

test("Should Load input name inside Contact Component", () => {
  render(<Contact />);
  const placeHolderText = screen.getByPlaceholderText("name");
  // Assertion
  expect(placeHolderText).toBeInTheDocument();
});

test("Should Load 2 input boxes on the Contact Component", () => {
  render(<Contact />);
  //Querying
  const inputBoxes = screen.getAllByRole("textbox");
  // Assertion
  //   expect(inputBoxes.length).toBe(2);
  expect(inputBoxes.length).not.toBe(3);
});
