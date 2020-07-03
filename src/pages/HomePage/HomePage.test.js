import React from 'react';
import { render, screen, waitForLoadingToFinish } from 'tests/app-test-utils';
import { server, rest } from 'tests/server';

import HomePage from './HomePage';
const apiURL = process.env.REACT_APP_API_URL;

describe('<HomePage />', () => {
  it('renders', async () => {
    render(<HomePage />);
    await waitForLoadingToFinish();

    expect(screen.getAllByText(/FilmTitle/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/FilmTitle/i)[1]).toBeInTheDocument();
  });

  it('fails the request and displays error', async () => {
    server.use(
      rest.get(`${apiURL}/films`, async (req, res, ctx) => {
        return res(ctx.status(404));
      })
    );
    render(<HomePage />);
    await waitForLoadingToFinish();

    expect(screen.getByText(/Error/i)).toBeInTheDocument();
  });
});
