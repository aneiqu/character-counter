import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import DensityContainer from "./DensityContainer";

describe("Density stats", () => {
  it("Displays correct letter percentage", () => {
    render(<DensityContainer text='Test' />);
    const letterTPercentage = screen.getByText("2 (50.00%)");
    const LettersESPercentage = screen.getAllByText("1 (25.00%)");
    expect(letterTPercentage).toBeInTheDocument();
    expect(LettersESPercentage).toHaveLength(2);
  });

  it("Toggles between see more/less", () => {
    render(
      <DensityContainer text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, alias.' />
    );
    const seeMoreButton = screen.getByText("See more");
    expect(seeMoreButton).toBeVisible();
    fireEvent.click(seeMoreButton);
    const seeLessButton = screen.getByText("See less");
    expect(seeLessButton).toBeVisible();
  });

  it("Displays only 5 top letters", () => {
    render(<DensityContainer text='abcdefghij' />);
    //   There are 10 letters, each has 10%, unless user clicks to see more, the array should have length of 5.
    const lettersBefore = screen.getAllByText("1 (10.00%)");
    const seeMoreButton = screen.getByText("See more");
    expect(lettersBefore).toHaveLength(5);
    fireEvent.click(seeMoreButton);
    const lettersAfter = screen.getAllByText("1 (10.00%)");
    expect(lettersAfter).toHaveLength(10);
  });
});
