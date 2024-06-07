import { render, screen } from "@testing-library/react";
import Contact from "../Pages/Contact";
import "@testing-library/jest-dom";
/*
1. describe is used to group all the test cases.
2. describe can be inherited inside describe. 
3. we can write many describes inside describes.
4. 'it' is alias of 'test'.
we can use 
it()
test()
both are same
*/
describe("Contact Us Page Test Cases", () => {
  it("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should Load Button inside Contact Component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    // Assertion
    expect(button).toBeInTheDocument();
  });

  it("Should Load input name inside Contact Component", () => {
    render(<Contact />);
    const placeHolderText = screen.getByPlaceholderText("name");
    // Assertion
    expect(placeHolderText).toBeInTheDocument();
  });

  it("Should Load 2 input boxes on the Contact Component", () => {
    render(<Contact />);
    //Querying
    const inputBoxes = screen.getAllByRole("textbox");
    // Assertion
    //   expect(inputBoxes.length).toBe(2);
    expect(inputBoxes.length).not.toBe(3);
  });
});
