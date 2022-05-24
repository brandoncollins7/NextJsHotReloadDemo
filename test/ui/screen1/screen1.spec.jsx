import React from 'react';
import { render } from '@testing-library/react';
import { BasicScreen1 } from './screen1.composition';


it('should render with the correct text', () => {
  const { getByText } = render(<BasicScreen1 />);
  const rendered = getByText('hello from Screen1');
  expect(rendered).toBeTruthy();
});

