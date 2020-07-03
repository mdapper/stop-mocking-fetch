import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function FilmsCard({ img, title, id }) {
  return (
    <Container to={`/films/${id}`}>
      <img src={img} alt={title} />
      <Title>{title}</Title>
    </Container>
  );
}

const Container = styled(Link)`
  position: relative;
  width: 280px;
  background-color: #fff;
  padding: 16px;
  border-radius: 4px;
  margin: 16px;
  color: #282c34;
  transition: 0.3s ease;

  :hover {
    color: #6c63ff;
    transform: scale(1.05);
  }
`;

const Title = styled.h2`
  font-weight: bold;
  padding-top: 16px;
`;
