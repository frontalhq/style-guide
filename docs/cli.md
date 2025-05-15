# CLI Usage

The package provides the following commands through npm scripts:

- `init`: Initializes the project with all necessary config files and dependencies.
- `lint`: Runs Biome linter on the codebase (without fixing).
- `format`: Runs Biome linter and automatically fixes issues.

## Usage

Add these scripts to your project's package.json:

```json
{
  "scripts": {
    "style:init": "node node_modules/@frontal/style-guide/scripts/run.mjs init",
    "style:lint": "node node_modules/@frontal/style-guide/scripts/run.mjs lint",
    "style:format": "node node_modules/@frontal/style-guide/scripts/run.mjs format"
  }
}
```

Then you can run the commands:

```sh
pnpm style:init   # Initialize the style guide
pnpm style:lint   # Run the linter
pnpm style:format # Format your code
```

The CLI is built with ESM JavaScript and works out of the box - no compilation required. 