import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('Renders main app component', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent("Joel's react template");
  });
});
