# Frequently Asked Questions

## General

### What is this style guide?
This is a robust linting configuration for modern TypeScript applications, built on top of Biome. It provides a standardized set of rules for code formatting, linting, and organization.

### Why Biome instead of ESLint?
Biome is a modern, fast, and all-in-one tool that combines formatting, linting, and import organization. It's written in Rust and provides better performance than ESLint.

## Installation

### How do I install the style guide?
```sh
pnpm add -D @frontal/style-guide@1.0.0 @biomejs/biome@1.9.4 husky@^9.1.7 lint-staged@^16.0.0 @commitlint/cli@^19.8.1 @commitlint/config-conventional@^19.8.1
```

### Do I need to install Biome separately?
No, Biome is included as a dependency. The style guide will handle the installation and configuration.

## Configuration

### How do I customize the rules?
You can override rules in your `biome.json` file. See the [Advanced Configuration](./advanced.md) guide for examples.

### Can I use this with other linters?
While possible, we recommend using Biome exclusively to avoid conflicts and maintain consistency.

## Editor Integration

### Which editors are supported?
- VSCode (recommended)
- JetBrains IDEs (with plugin)
- Any editor that supports Biome

### How do I set up VSCode?
The style guide will automatically configure VSCode settings. Just ensure you have the Biome extension installed.

## Git Integration

### How do the git hooks work?
The style guide sets up pre-commit hooks that:
1. Format and lint staged files
2. Validate commit messages
3. Run tests (if configured)

### Can I add custom git hooks?
Yes, you can add custom hooks in the `.husky` directory. See the [Advanced Configuration](./advanced.md) guide.

## Troubleshooting

### Format on save isn't working
1. Check if Biome is installed
2. Verify editor settings
3. Ensure file extensions are supported
4. Try restarting your editor

### Git hooks aren't running
1. Check if husky is installed
2. Verify hook permissions
3. Check .git/hooks directory
4. Try running `pnpm prepare`

### TypeScript errors
1. Check tsconfig.json
2. Verify dependencies
3. Clear TypeScript cache
4. Check for conflicting configurations

## Contributing

### How can I contribute?
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

### What are the commit message rules?
We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. The style guide enforces this through commitlint.

For more help, open an issue on GitHub or check the [documentation](./). 