import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { getCharacter } from 'api/characters';

export default function CharacterCard({ id }) {
  const [character, setCharacter] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCharacter(id);

      setCharacter(result);
    };

    fetchData();
  }, [id]);

  return (
    <Container to={`/people/${id}`}>
      <Title>{character ? character.name : 'Loading...'}</Title>
    </Container>
  );
}

const Container = styled(Link)`
  display: block;
  background-color: #fff;
  color: #282c34;
  width: calc(33% - 32px);
  padding: 32px;
  margin: 16px;
  border-radius: 4px;
  transition: 0.3s ease;

  :hover {
    color: #6c63ff;
    transform: scale(1.05);
  }
`;

const Title = styled.h2`
  font-weight: bold;
`;
