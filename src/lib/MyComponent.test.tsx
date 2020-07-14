import React from 'react';
import { render } from '@testing-library/react';

import MyComponent from './MyComponent';

it('renders my component', () => {
  const { getByRole } = render(<MyComponent headline="test" />);
  expect(getByRole('heading')).toBeVisible();
});
