import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const storeName = screen.getByText(/Pietra/i);
  expect(storeName).toBeInTheDocument();
});
