# Using Changesets

This project uses [Changesets](https://github.com/changesets/changesets) for version management and changelog generation. Changesets help us maintain a clear record of changes and automate the release process.

## Available Commands

- `pnpm changeset`: Create a new changeset
- `pnpm version`: Update versions and changelogs based on changesets
- `pnpm release`: Publish packages to npm

## How to Use Changesets

### 1. Creating a Changeset

When you make changes that should be included in a release:

```bash
pnpm changeset
```

This will:
- Prompt you to select the type of change (patch, minor, major)
- Ask for a description of the changes
- Create a new markdown file in the `.changeset` directory

### 2. Versioning Changes

When ready to release:

```bash
pnpm version
```

This will:
- Update package versions based on changesets
- Generate/update CHANGELOG.md
- Remove used changesets

### 3. Publishing

To publish to npm:

```bash
pnpm release
```

## Best Practices

1. **Create Changesets Early**: Create a changeset as soon as you start working on a change
2. **Be Specific**: Write clear, descriptive messages in your changesets
3. **Group Related Changes**: Create one changeset for related changes
4. **Use Conventional Commits**: Follow the conventional commits format in your changeset messages

## Changeset Types

- **patch**: Bug fixes and minor changes (0.0.x)
- **minor**: New features, non-breaking changes (0.x.0)
- **major**: Breaking changes (x.0.0)

## Example Changeset

```markdown
---
"@frontal/style-guide": patch
---

fix: resolve issue with Biome configuration validation
``` 