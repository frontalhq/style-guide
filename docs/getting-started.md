# Getting Started

## Installation

Install the required dependencies using your preferred package manager:

```sh
pnpm add -D @frontal/style-guide@1.0.0 @biomejs/biome@1.9.4 husky@^9.1.7 lint-staged@^16.0.0 @commitlint/cli@^19.8.1 @commitlint/config-conventional@^19.8.1
```

## Usage

Run the initialization command to set up configuration files and editor settings:

```sh
npx @frontal/style-guide init
```

This will:
- Create or update `biome.json` with our recommended configuration
- Create or update `.vscode/settings.json` for editor integration
- Create or update `.husky/pre-commit` for git hooks
- Create or update `.lintstagedrc.js` for pre-commit linting
- Create or update `commitlint.config.js` for commit message validation

The package is pre-built and works out of the box - no additional build steps required.

## Quick Start

After installation, your code will be automatically formatted and linted according to our style guide. The configuration enforces:

- 2-space indentation
- 80 character line width
- Single quotes for JS/TS, double quotes for JSX
- Strict TypeScript checks
- Conventional commit messages
- Pre-commit hooks for code quality

For more details, see the [Configuration](./configuration.md) guide. 