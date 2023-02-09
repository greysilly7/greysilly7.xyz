import React from 'react';
import { render, screen } from '@testing-library/react';
import Services from '../pages/Services';

test('renders Services page', () => {
  render(<Services />);
  const linkElement = screen.getByText(/For more information please contant me on Discord via Greysilly7#8813/i);
  expect(linkElement).toBeInTheDocument();
});
