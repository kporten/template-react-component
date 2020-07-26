import React from 'react';
import { render } from '@testing-library/react';

import Component from './Component';

it('renders my component', () => {
  const { getByRole } = render(<Component headline="test" />);
  expect(getByRole('heading')).toBeVisible();
});
