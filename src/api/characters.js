import { client } from './api-client';

export async function getCharacter(id) {
  const result = await client(`/people/${id}/`);
  return result;
}
