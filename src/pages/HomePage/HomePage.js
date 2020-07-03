import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { data } from 'data';
import { getFilms } from 'api/films';
import FilmsCard from 'components/FilmsCard';

export default function HomePage() {
  const [films, setFilms] = useState({ results: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await getFilms();

      setFilms(result);
    };

    fetchData();
  }, []);

  return (
    <Container>
      {films?.results.length > 0 ? (
        films.results.map((film) => {
          const filmId = film.url
            .replace('http://swapi.dev/api/films/', '')
            .replace('/', '');
          return (
            <FilmsCard
              key={filmId}
              id={filmId}
              img={data.films[filmId]?.img}
              title={film.title}
            />
          );
        })
      ) : (
        <div>Loading...</div>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 48px;
`;
