import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders react store name", () => {
    render(<App />);
    const storeName = screen.getByText(/Pietra/i);
    expect(storeName).toBeInTheDocument();
  });
  it("renders header", () => {
    render(<App />);
    expect(
      screen.getByRole(/banner/i).classList.contains("header")
    ).toBeTruthy();
  });
});
