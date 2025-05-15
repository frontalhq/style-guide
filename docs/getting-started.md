# Getting Started

## Installation

Install the required dependencies using your preferred package manager:

```sh
pnpm add -D @frontal/style-guide @biomejs/biome husky lint-staged @commitlint/cli @commitlint/config-conventional
```

## Usage

Run the initialization command to set up configuration files and editor settings:

```sh
npx style-guide init
```

This will:
- Create or update `biome.json` (Biome config)
- Create or update `.vscode/settings.json` (VSCode integration)
- Create or update `tsconfig.json` (TypeScript config)
- Install required dependencies

The package is pre-built and works out of the box - no additional build steps required. 