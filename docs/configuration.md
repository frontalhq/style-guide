# Configuration

## Package Development

The package uses `tsup` for building during development and publishing. The build configuration is in `tsup.config.ts`:

```ts
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['scripts/run.ts', '.lintstagedrc.js', 'commitlint.config.js'],
  format: ['cjs', 'esm'],
  clean: true,
  outDir: 'build',
  minify: true,
  sourcemap: true,
  dts: false,
  splitting: false,
  treeshake: true,
  platform: 'node',
  target: 'node18',
});
```

## Config Files

The project includes several configuration files:

- `.lintstagedrc.js`: Configures lint-staged for pre-commit hooks
- `commitlint.config.js`: Configures commit message linting
- `tsconfig.json`: TypeScript configuration
- `biome.json`: Biome linting and formatting rules

All config files are built to both CommonJS and ESM formats for maximum compatibility.

## Biome

The `biome.json` file configures linting, formatting, and import organization.

Key settings include:
- Enforced formatting (2-space indent, 80-char line width, single quotes, etc.)
- Strict linting rules (with some customizations)
- Import organization
- File naming conventions

## TypeScript

The `tsconfig.json` file is set up for strict type checking, with `strictNullChecks` enabled by default.

## VSCode

The `.vscode/settings.json` file ensures that Biome is used as the default formatter and that formatting is applied on save and paste. 