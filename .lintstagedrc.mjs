export default {
  '*.{js,jsx,ts,tsx}': ['npx biome check --write', 'npx biome format --write'],
  '*.{json,md}': ['npx biome format --write'],
};
