// https://testing-library.com/docs/react-testing-library/intro
import { render, screen } from '@testing-library/react';

import Component from './Component';

it('should render my component', () => {
  render(<Component headline="test" />);
  expect(screen.getByRole('heading')).toBeVisible();
});
