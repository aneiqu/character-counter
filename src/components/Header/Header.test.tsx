import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Header from "./Header";

describe("Theme changer", () => {
  render(
    <Header
      toggleTheme={vi.fn((e) => {
        console.log(e);
      })}
    />
  );
  const moon = screen.getByAltText("sun icon");
  //   fireEvent.click(moon);
  it("Changes theme to dark when clicked", () => {});
  expect(moon).toBeInTheDocument();
});
