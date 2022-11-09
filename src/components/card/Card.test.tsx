import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Card from './Card';

describe('Card', () => {
  it('Renders card with title', () => {
    render(
      <Card>
        <h2>Testing</h2>
      </Card>
    );

    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Testing');
  });
});
