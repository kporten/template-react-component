// https://testing-library.com/docs/react-testing-library/intro
import React from 'react';
import { render, screen } from '@testing-library/react';

import Component from './Component';

it('renders my component', () => {
  render(<Component headline="test" />);
  expect(screen.getByRole('heading')).toBeVisible();
});
