import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card Component', () => {
  const labelText = 'Golden Retriever';

  beforeEach(() => {
    render(<Card labelText={labelText} imageSrc="" />);
  });

  it('renders the image with the correct  alt text', () => {
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt', labelText);
  });

  it('displays the correct label text', () => {
    const label = screen.getByText(labelText);
    expect(label).toBeInTheDocument();
  });
});
