# Advanced Configuration

## Customizing Biome Rules

You can customize Biome rules in your `biome.json` file. Here are some common customizations:

### Disabling Rules

```json
{
  "linter": {
    "rules": {
      "style": {
        "noDefaultExport": "off",
        "noImplicitBoolean": "off"
      }
    }
  }
}
```

### Custom File Naming

```json
{
  "linter": {
    "rules": {
      "style": {
        "useFilenamingConvention": {
          "level": "error",
          "options": {
            "requireAscii": true,
            "filenameCases": ["kebab-case"]
          }
        }
      }
    }
  }
}
```

## Custom Git Hooks

You can add custom git hooks in the `.husky` directory:

```sh
# .husky/pre-push
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run test
```

## Editor-Specific Settings

### VSCode

Add to `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "biomejs.biome",
  "[typescript]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "biomejs.biome"
  }
}
```

### JetBrains IDEs

1. Install the Biome plugin
2. Enable "Format on Save"
3. Set Biome as the default formatter

## TypeScript Configuration

Extend the base configuration in your `tsconfig.json`:

```json
{
  "extends": "@frontal/style-guide/tsconfig.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

## Performance Optimization

For large projects, consider:

1. Using Biome's cache:
```json
{
  "vcs": {
    "enabled": true,
    "clientKind": "git",
    "useIgnoreFile": true
  }
}
```

2. Excluding large directories:
```json
{
  "files": {
    "ignore": ["node_modules", "dist", "build"]
  }
}
```

## Troubleshooting

Common issues and solutions:

1. **Format on Save Not Working**
   - Check editor settings
   - Verify Biome is installed
   - Check file extensions are supported

2. **Git Hooks Not Running**
   - Ensure husky is installed
   - Check hook permissions
   - Verify .git/hooks directory

3. **TypeScript Errors**
   - Check tsconfig.json
   - Verify dependencies
   - Clear TypeScript cache

For more help, see the [FAQ](./faq.md) or open an issue on GitHub. 