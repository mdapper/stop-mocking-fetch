import { build, fake } from '@jackfranklin/test-data-bot';

export const characterBuilder = build({
  fields: {
    name: fake((f) => `CharacterName ${f.name.findName()}`),
  },
});
