/* eslint-disable no-undef */
import React from 'react';
import { render, screen, waitForLoadingToFinish } from 'tests/app-test-utils';
import { filmBuilder } from 'tests/factories/films';

import HomePage from './HomePage';

const films = [filmBuilder(), filmBuilder()];

describe('<HomePage />', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('renders', async () => {
    fetchMock.once(JSON.stringify({ results: films }), { status: 200 });
    render(<HomePage />);
    await waitForLoadingToFinish();

    expect(screen.getAllByText(/FilmTitle/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/FilmTitle/i)[1]).toBeInTheDocument();
  });
});
