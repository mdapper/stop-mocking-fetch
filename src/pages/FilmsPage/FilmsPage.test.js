import React from 'react';
import { Route } from 'react-router-dom';
import { render, screen, waitForLoadingToFinish } from 'tests/app-test-utils';

import FilmsPage from './FilmsPage';

describe('<FilmsPage />', () => {
  it('renders', async () => {
    render(
      <Route path="/films/:id">
        <FilmsPage />
      </Route>,
      { route: '/films/1' }
    );
    await waitForLoadingToFinish();

    expect(screen.getAllByText(/FilmTitle/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/Episode/i)).toBeInTheDocument();
    expect(screen.getByText(/DirectorName/i)).toBeInTheDocument();
    expect(screen.getByText(/ProducerName/i)).toBeInTheDocument();
    expect(screen.getAllByText(/CharacterName/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/CharacterName/i)[1]).toBeInTheDocument();
    expect(screen.getAllByText(/CharacterName/i)[2]).toBeInTheDocument();
  });
});
