import { build, fake, sequence } from '@jackfranklin/test-data-bot';

export const filmBuilder = build({
  fields: {
    director: fake((f) => `DirectorName ${f.name.findName()}`),
    episode_id: sequence(),
    producer: fake((f) => `ProducerName ${f.name.findName()}`),
    title: fake((f) => `FilmTitle ${f.name.findName()}`),
    characters: [
      'https://swapi.dev/api/people/1/',
      'https://swapi.dev/api/people/2/',
      'https://swapi.dev/api/people/3/',
    ],
  },
});
