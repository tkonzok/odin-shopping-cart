import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./Home.jsx";

describe("Home component", () => {
  it("renders correct headline", () => {
    render(<Home />);
    expect(screen.getByRole("heading").textContent).toMatch(/Home/i);

    screen.debug();
  });
});
