import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';

import { getFilm } from 'api/films';
import { data } from 'data';
import CharacterCard from 'components/CharacterCard';

export default function FilmsPage() {
  const [film, setFilm] = useState(undefined);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getFilm(params.id);

      setFilm(result);
    };

    fetchData();
  }, [params.id]);

  return (
    <Container>
      <Link to="/">Go back</Link>

      {film ? (
        <div>
          <Title>{film.title}</Title>
          <img src={data.films[params.id]?.img} alt={film.title} />
          <SubTitle>Info:</SubTitle>
          <Info>Episode: {film.episode_id}</Info>
          <Info>Director: {film.director}</Info>
          <Info>Producer: {film.producer}</Info>
          <SubTitle>Characters:</SubTitle>

          <Characters>
            {film.characters.length > 0 &&
              film.characters.map((character) => (
                <CharacterCard key={character} id={character.match(/\d+/g)} />
              ))}
          </Characters>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 48px;

  & > a {
    margin-bottom: 24px;
    color: #6c63ff;
    padding: 8px 0;
  }

  img {
    width: 280px;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  padding-bottom: 16px;
`;

const SubTitle = styled.h2`
  font-weight: bold;
  padding-top: 32px;
  padding-bottom: 16px;
`;

const Info = styled.div`
  padding: 4px 0;
`;

const Characters = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -16px;
`;
