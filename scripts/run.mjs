#!/usr/bin/env node

import { execSync } from 'node:child_process';
import { Command } from 'commander';

const program = new Command();

program
  .name('@frontal/style-guide')
  .description('Robust linting for modern TypeScript apps.');

program
  .command('init')
  .description('Initialize style guide in the current directory')
  .action(() => {
    try {
      // Create biome.json config
      const biomeConfig = {
        $schema: 'https://biomejs.dev/schemas/1.9.4/schema.json',
        extends: ['@frontal/style-guide'],
      };

      // Create .vscode/settings.json
      const vsCodeSettings = {
        'typescript.tsdk': 'node_modules/typescript/lib',
        'editor.defaultFormatter': 'biomejs.biome',
        'editor.formatOnSave': true,
        'editor.formatOnPaste': true,
        'emmet.showExpandedAbbreviation': 'never',
        'editor.codeActionsOnSave': {
          'source.fixAll.biome': 'explicit',
          'source.organizeImports.biome': 'explicit',
        },
        '[typescript]': {
          'editor.defaultFormatter': 'biomejs.biome',
        },
        '[json]': {
          'editor.defaultFormatter': 'biomejs.biome',
        },
        '[javascript]': {
          'editor.defaultFormatter': 'biomejs.biome',
        },
        '[jsonc]': {
          'editor.defaultFormatter': 'biomejs.biome',
        },
        '[typescriptreact]': {
          'editor.defaultFormatter': 'biomejs.biome',
        },
      };

      // Create or merge tsconfig.json
      let tsConfig = {
        compilerOptions: {
          strictNullChecks: true,
        },
      };

      try {
        const existingTsConfig = JSON.parse(
          execSync('cat tsconfig.json', { encoding: 'utf-8' })
        );
        tsConfig = {
          ...existingTsConfig,
          compilerOptions: {
            ...existingTsConfig.compilerOptions,
            ...tsConfig.compilerOptions,
          },
        };
      } catch (_e) {
        // tsconfig.json doesn't exist, use default config
      }

      // Install dependencies
      execSync('pnpm add -D --save-exact @frontal/style-guide @biomejs/biome');

      // Write the config files
      execSync('mkdir -p .vscode');
      execSync(`echo '${JSON.stringify(biomeConfig, null, 2)}' > biome.json`);
      execSync(
        `echo '${JSON.stringify(
          vsCodeSettings,
          null,
          2
        )}' > .vscode/settings.json`
      );
      execSync(`echo '${JSON.stringify(tsConfig, null, 2)}' > tsconfig.json`);

      // biome-ignore lint: Console log is ok
      console.log('Successfully initialized style guide configuration! ✨');
    } catch (error) {
      // biome-ignore lint: Console log is ok
      console.error('Failed to run style guide:', error.message);
      process.exit(1);
    }
  });

program
  .command('lint')
  .description('Run Biome linter without fixing files')
  .action(() => {
    try {
      execSync('npx biome check ./', { stdio: 'inherit' });
    } catch (error) {
      // biome-ignore lint: Console log is ok
      console.error('Failed to run style guide:', error.message);
      process.exit(1);
    }
  });

program
  .command('format')
  .description('Run Biome linter and fixes files')
  .action(() => {
    try {
      execSync('npx biome check --write ./', { stdio: 'inherit' });
    } catch (error) {
      // biome-ignore lint: Console log is ok
      console.error('Failed to run style guide:', error.message);
      process.exit(1);
    }
  });

program.parse();
