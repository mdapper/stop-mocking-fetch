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
        films.results.map((film, index) => {
          const id = index + 1;
          return (
            <FilmsCard
              key={id}
              id={id}
              img={data.films[id]?.img}
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
