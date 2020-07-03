import { client } from './api-client';

export async function getFilms() {
  const result = await client('/films/');
  return result;
}

export async function getFilm(id) {
  const result = await client(`/films/${id}/`);
  return result;
}
