# Git Hooks

## Husky

Husky is used to enforce code quality at commit time.

- **pre-commit**: Runs `lint-staged` to check and format staged files using Biome.
- **commit-msg**: Runs `commitlint` to ensure commit messages follow the conventional format.

## Lint-staged

Configured in `.lintstagedrc.js` to run Biome on staged files.

## Commitlint

Configured in `commitlint.config.js` to use the conventional commit format. 