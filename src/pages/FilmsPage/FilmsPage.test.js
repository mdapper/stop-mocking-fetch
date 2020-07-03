/* eslint-disable no-undef */
import React from 'react';
import { Route } from 'react-router-dom';
import { render, screen, waitForLoadingToFinish } from 'tests/app-test-utils';
import { filmBuilder } from 'tests/factories/films';
import { characterBuilder } from 'tests/factories/characters';

import FilmsPage from './FilmsPage';

const film = filmBuilder();

describe('<FilmsPage />', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('renders', async () => {
    fetchMock
      .once(JSON.stringify({ ...film }), { status: 200 })
      .once(JSON.stringify({ ...characterBuilder() }), { status: 200 })
      .once(JSON.stringify({ ...characterBuilder() }), { status: 200 })
      .once(JSON.stringify({ ...characterBuilder() }), { status: 200 });
    render(
      <Route path="/films/:id">
        <FilmsPage />
      </Route>,
      { route: '/films/1' }
    );
    await waitForLoadingToFinish();

    expect(screen.getAllByText(/FilmTitle/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/1/i)).toBeInTheDocument();
    expect(screen.getByText(/DirectorName/i)).toBeInTheDocument();
    expect(screen.getByText(/ProducerName/i)).toBeInTheDocument();
    expect(screen.getAllByText(/CharacterName/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/CharacterName/i)[1]).toBeInTheDocument();
    expect(screen.getAllByText(/CharacterName/i)[2]).toBeInTheDocument();
  });
});
