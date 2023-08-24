import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Shop from "./Shop.jsx";

describe("Shop component", () => {
  it("renders correct headline", () => {
    render(<Shop />);
    expect(screen.getByRole("heading").textContent).toMatch(/Shop/i);
  });

  it("renders cart 0 on load", () => {
    const { container } = render(<Shop />);
    expect(container).toMatchSnapshot();
  });

  it("renders cart 1 after button click", async () => {
    const user = userEvent.setup();

    render(<Shop />);
    const button = screen.getByRole("button", { name: "Add Item" });

    await user.click(button);

    expect(screen.getByText(/Cart:/i).textContent).toMatch(/Cart: 1/i);
    screen.debug();
  });
});
