import Body from "../Layout/Body";
import { render, screen } from "@testing-library/react";
// import { act } from "react-dom/test-utils";
import { act } from "react";
import MOCK_DATA from "../../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("search component", () => {
  // async operations
  /*
  Mock Fetch Function
  */
  global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(MOCK_DATA);
      },
    });
  }); // will gives me a mock function, this takes a callback function
  it("Should render the body component with Search", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
  });

  const searchBtn = screen.getByRole("button", { name: "Search" });
  //   getByRole("button", { name: "Search" });
  expect(searchBtn).toBeInTheDocument();
});
