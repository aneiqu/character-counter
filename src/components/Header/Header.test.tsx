import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Header from "./Header";

describe("Theme changer", () => {
  const themeFn = vi.fn((theme) => theme);

  render(<Header toggleTheme={themeFn} />);
  it("Detects theme change", () => {
    const moon = screen.getByAltText("moon icon");
    fireEvent.click(moon);
    expect(themeFn).toHaveReturnedWith("dark");

    const sun = screen.getByAltText("sun icon");
    fireEvent.click(sun);
    expect(themeFn).toHaveReturnedWith("light");
  });
});
