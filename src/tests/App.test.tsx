import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../pages/App';

test('renders App page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Haiii!! I am greysilly7, I do programming and gaming./i);
  expect(linkElement).toBeInTheDocument();
});
