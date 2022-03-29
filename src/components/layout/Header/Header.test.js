import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header component", () => {
    it("renders react store name", () => {
      render(<Header />);
      const storeName = screen.getByText(/Pietra/i);
      expect(storeName).toBeInTheDocument();
    });
    it("renders the search box", () => {
      render(<Header />);
      const searchInput = screen.getByRole(/searchbox/i);
      expect(searchInput).toBeInTheDocument();
    });
    it('renders shopping-cart link', () => {
        render(<Header />)
        const shoppingLink = screen.getByRole(/link/i)
        expect(shoppingLink).toBeInTheDocument();
    })
})