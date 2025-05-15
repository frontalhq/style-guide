# Testing the Style Guide Configuration

This project uses [Vitest](https://vitest.dev/) to ensure the integrity and correctness of the style guide configuration. 

## What is Tested?

### 1. Biome Configuration
- **Purpose:** Ensure that the `biome.json` configuration file exists and contains the essential sections required for formatting and linting.
- **Checks:**
  - The presence of the `formatter` and `linter` sections.
  - That the formatter is enabled and uses the correct indentation style and width.

### 2. Linting Rules
- **Purpose:** Verify that the style guide enforces key linting rules for file and variable naming conventions.
- **Checks:**
  - File naming conventions (e.g., enforcing `kebab-case` for file names).
  - Variable naming conventions (e.g., enforcing `camelCase`, `PascalCase`, or `CONSTANT_CASE` for variables).

### 3. Project Structure
- **Purpose:** Ensure that all required configuration and documentation files are present in the project root.
- **Checks:**
  - Existence of files like `biome.json`, `package.json`, `tsconfig.json`, `.gitignore`, `README.md`, and `LICENSE.md`.

## Why These Tests?
- **Reliability:** Automated tests help catch accidental misconfigurations or missing files that could break the style guide or reduce its effectiveness.
- **Consistency:** Enforcing naming conventions and required files ensures a consistent developer experience across projects using this style guide.
- **Documentation:** The tests serve as living documentation for the expected project structure and configuration.

## Running the Tests

To run the tests, use:

```sh
pnpm test
```

or to watch for changes:

```sh
pnpm test:watch
```