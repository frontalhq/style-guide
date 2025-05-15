# CLI Usage

The main entry point is `scripts/run.ts`, which provides the following commands:

- `init`: Initializes the project with all necessary config files and dependencies.
- `lint`: Runs Biome linter on the codebase (without fixing).
- `format`: Runs Biome linter and automatically fixes issues.

Example usage:

```sh
pnpm ts-node scripts/run.ts lint
pnpm ts-node scripts/run.ts format
``` 