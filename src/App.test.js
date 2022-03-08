import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react store name', () => {
  render(<App />);
  const storeName = screen.getByText(/Pietra/i);
  expect(storeName).toBeInTheDocument();
});

test('renders search box', () => {
  render(<App />);
  const searchInput = screen.getByRole(/searchbox/i);
  expect(searchInput).toBeInTheDocument();
})

test('renders header', () => {
  render(<App />);
  expect(screen.getByRole(/banner/i).classList.contains('header')).toBeTruthy();
})