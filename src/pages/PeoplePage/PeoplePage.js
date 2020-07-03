import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';

import { getCharacter } from 'api/characters';

export default function PeoplePage() {
  const [character, setCharacter] = useState(undefined);
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCharacter(params.id);

      setCharacter(result);
    };

    fetchData();
  }, [params.id]);

  return (
    <Container>
      <button onClick={() => history.goBack()}>Go back</button>
      <h1>{character ? character.name : 'Loading...'}</h1>
    </Container>
  );
}

const Container = styled.div`
  padding: 48px;

  & > button {
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 8px 0;
    margin: 0;
    margin-bottom: 24px;
    cursor: pointer;
    color: #6c63ff;
  }
`;
