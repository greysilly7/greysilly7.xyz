import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from '../pages/Contact';

test('renders Contact page', () => {
  render(<Contact />);
  const linkElement = screen.getByText(/You can contact me via Discord, Greysilly7#8813/i);
  expect(linkElement).toBeInTheDocument();
});
