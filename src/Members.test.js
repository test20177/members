import React from 'react';
import { render } from '@testing-library/react';
import Members from './Members';

test('renders learn react link', () => {
  const { getByText } = render(<Members />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
