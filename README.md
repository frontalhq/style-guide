# @frontal/guide-style

## Introduction

This repository is the home of Frontal's style guide, which provides a strict, opinionated linting and formatting setup for modern TypeScript and JavaScript projects. It leverages Biome for fast, all-in-one linting and formatting, and enforces best practices through automated tooling and Git hooks.

## Features

- Biome-based linting and formatting
- TypeScript configuration
- Git hooks with Husky
- Commit message linting
- Editor integration
- CLI tool for easy setup

## Installation

Install the required dependencies using your preferred package manager:

```sh
pnpm add -D @frontal/style-guide @biomejs/biome husky lint-staged @commitlint/cli @commitlint/config-conventional
```

## Quick Start

Run the initialization command to set up configuration files and editor settings:

```sh
npx @frontal/style-guide init
```

This will:
- Create or update `biome.json` (Biome config)
- Create or update `.vscode/settings.json` (VSCode integration)
- Create or update `tsconfig.json` (TypeScript config)
- Install required dependencies

## Configuration

The style guide is configured through several key files:

- `biome.json`: Main Biome configuration for linting and formatting
- `.vscode/settings.json`: Editor integration settings
- `tsconfig.json`: TypeScript configuration
- `.husky/`: Git hooks configuration
- `.commitlintrc.js`: Commit message linting rules

## Code Style Rules

### Formatting
- Indent style: spaces
- Indent width: 2 spaces
- Line ending: LF
- Line width: 80 characters
- Quote style: single quotes for JS/TS, double quotes for JSX
- Semicolons: required
- Trailing commas: ES5 style

### File Naming
- Files must use either kebab-case or snake_case
- ASCII characters only
- Examples: `my-component.tsx`, `utils.ts`, `api_client.ts`

### Import Rules
- Imports are automatically organized
- No namespace imports allowed
- No default exports (configurable)

### React/JSX Rules
- Double quotes for JSX attributes
- No React-specific prop validation
- Array index keys are allowed
- No autofocus restrictions

## Development Workflow

1. Install dependencies with pnpm
2. Code changes should follow the style guide
3. Commits must follow conventional commit format
4. Pre-commit hooks will run linting
5. Changes are automatically formatted on save

## Contributing

Please read our [contributing](CONTRIBUTING.md) guide before creating a pull request.

## Documentation

For more detailed information, check out our documentation:

- [Getting Started](docs/getting-started.md)
- [Configuration](docs/configuration.md)
- [Editor Integration](docs/editor-integration.md)
- [Git Hooks](docs/git-hooks.md)
- [CLI Usage](docs/cli.md)
- [Advanced Usage](docs/advanced.md)
- [FAQ](docs/faq.md)

## Version

Current version: 4.2.4
