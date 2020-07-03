import { rest } from 'msw';
import { filmBuilder } from 'tests/factories/films';
import { characterBuilder } from 'tests/factories/characters';

const apiURL = process.env.REACT_APP_API_URL;
const films = [filmBuilder(), filmBuilder()];
const film = filmBuilder();

const handlers = [
  rest.get(`${apiURL}/films`, async (req, res, ctx) => {
    return res(ctx.json({ results: films }));
  }),
  rest.get(`${apiURL}/films/:id`, async (req, res, ctx) => {
    return res(ctx.json({ ...film }));
  }),
  rest.get(`${apiURL}/people/:id`, async (req, res, ctx) => {
    return res(ctx.json({ ...characterBuilder() }));
  }),
];

export { handlers };
