import { render, screen } from "@testing-library/react";
import RestaurantCard, {
  withPromotedLabel,
} from "../Restaurant/RestaurantCard";
import MOCK_DATA from "../../mocks/resCardMock.json";
import "@testing-library/jest-dom";

describe("Restaurant Card Component Test Cases", () => {
  // console.log("MOCK_DATA===>", MOCK_DATA);

  it("should render RestaurantCard component with props Data", () => {
    /*
    Mock data: 
    Whenever a restaurant data is loading, we get this data from the real compoennt
    and copy and create a mock Data

    */
    // rednering a component by passing the mock data to it as prop
    render(<RestaurantCard resData={MOCK_DATA} />);

    const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");

    expect(name).toBeInTheDocument();
  });

  it("Should render RestaurandCard component with Promoted Label", () => {
    // Test HOC : with PromotedLabel()
    // render(<withPromotedLabel resData={MOCK_DATA} />);
    // const MockWithHOC = withPromotedLabel(resData);
    // render(withPromotedLabel(MockWithHOC));
    // const label = screen.getByLabelText("Promoted");
    // expect(label).toBeInTheDocument();
  });
});
