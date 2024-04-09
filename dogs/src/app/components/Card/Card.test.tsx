import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card Component', () => {
  const labelText = 'Husky';
  const imageSrc='https://dog.ceo/api/breeds/image/random/3';

  test('shoudl render Card  with props as passed', () => {
    render(<Card labelText={headerText} imageSrc={imageSrc} />);

    expect(screen.getByText(headerText)).toBeInTheDocument();

    Object.entries(cardContents).forEach(([key, value]) => {
      expect(screen.getByText(key)).toBeInTheDocument();
      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });
});
