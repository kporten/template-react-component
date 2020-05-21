import React from 'react';
import { render } from '@testing-library/react';

import MyComponent from './MyComponent';

it('render my component', () => {
  const { getByRole } = render(<MyComponent />);
  expect(getByRole('heading')).toBeInTheDocument();
});
