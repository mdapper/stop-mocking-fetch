import React from 'react';
import { render, screen, waitForLoadingToFinish } from 'tests/app-test-utils';

import HomePage from './HomePage';

describe('<HomePage />', () => {
  it('renders', async () => {
    render(<HomePage />);
    await waitForLoadingToFinish();

    expect(screen.getAllByText(/FilmTitle/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/FilmTitle/i)[1]).toBeInTheDocument();
  });
});
