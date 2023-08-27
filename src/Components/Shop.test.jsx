import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Shop from "./Shop.jsx";

describe("Shop component", () => {
  it("renders correct headline", () => {
    render(<Shop />);
    expect(screen.getByRole("heading").textContent).toMatch(/Music & More/i);
  });

  it("renders page on load", () => {
    const { container } = render(<Shop />);
    expect(container).toMatchSnapshot();
  });

  it("renders cart 1 after button click", async () => {
    const user = userEvent.setup();

    render(<Shop />);
    const adToCartButton = screen.getByTestId("add-to-cart-button");

    await user.click(adToCartButton);

    expect(screen.getByTestId("number-articles").textContent).toMatch(/1/i);

    expect(
      screen.getByRole("button", { name: "Go To Checkout" })
    ).toBeInTheDocument();
    screen.debug();
  });
});
