# Configuration

## Biome Configuration

The `biome.json` file configures linting, formatting, and import organization. Key settings include:

### Formatting
- 2-space indentation
- 80 character line width
- LF line endings
- Single quotes for JS/TS, double quotes for JSX
- Required semicolons
- ES5-style trailing commas

### Linting Rules
- All recommended rules enabled by default
- Custom rules for:
  - File naming (kebab-case)
  - Import organization
  - React/JSX conventions
  - TypeScript best practices

### CSS Configuration
- 2-space indentation
- 80 character line width
- Double quotes for values
- No CSS modules by default

### JSON Configuration
- No comments allowed
- No trailing commas
- 2-space indentation
- 80 character line width

## Git Configuration

The project uses several tools for code quality:

- **Husky**: Git hooks for pre-commit checks
- **lint-staged**: Runs linters on staged files
- **commitlint**: Enforces conventional commit messages

### Pre-commit Hooks

The `.husky/pre-commit` hook runs:
1. lint-staged for code formatting and linting
2. commitlint for commit message validation

## Editor Integration

### VSCode

The `.vscode/settings.json` file configures:
- Biome as the default formatter
- Format on save
- Format on paste
- TypeScript settings

### Other Editors

For other editors, ensure:
1. Biome is installed globally or in the project
2. The editor is configured to use Biome for formatting
3. Format on save is enabled

## TypeScript Configuration

The project uses strict TypeScript settings:
- `strictNullChecks` enabled
- No implicit any
- Strict function types
- No unused locals/parameters

For more details on specific rules and configurations, see the [Advanced](./advanced.md) guide. 