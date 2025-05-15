import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

describe('Style Guide Tests', () => {
  describe('Biome Configuration', () => {
    it('should have valid biome.json configuration', () => {
      const biomeConfig = JSON.parse(readFileSync('biome.json', 'utf-8'));

      // Test essential configuration sections
      expect(biomeConfig.formatter).toBeDefined();
      expect(biomeConfig.linter).toBeDefined();

      // Test specific rules
      expect(biomeConfig.formatter.enabled).toBe(true);
      expect(biomeConfig.formatter.indentStyle).toBe('space');
      expect(biomeConfig.formatter.indentWidth).toBe(2);
    });
  });

  describe('Linting Rules', () => {
    it('should enforce file naming conventions', () => {
      const biomeConfig = JSON.parse(readFileSync('biome.json', 'utf-8'));
      const namingRules =
        biomeConfig.linter.rules.style.useFilenamingConvention;

      expect(namingRules).toBeDefined();
      expect(namingRules.level).toBe('error');
      expect(namingRules.options.filenameCases).toContain('kebab-case');
    });

    it('should enforce naming conventions', () => {
      const biomeConfig = JSON.parse(readFileSync('biome.json', 'utf-8'));
      const namingRules = biomeConfig.linter.rules.style.useNamingConvention;

      expect(namingRules).toBeDefined();
      expect(namingRules.level).toBe('error');
      expect(namingRules.options.conventions).toContainEqual({
        selector: { kind: 'variable' },
        formats: ['camelCase', 'PascalCase', 'CONSTANT_CASE'],
      });
    });
  });

  describe('Project Structure', () => {
    it('should have required configuration files', () => {
      const requiredFiles = [
        'biome.json',
        'package.json',
        'tsconfig.json',
        '.gitignore',
        'README.md',
        'LICENSE.md',
      ];

      for (const file of requiredFiles) {
        expect(() => {
          readFileSync(file, 'utf-8');
        }).not.toThrow();
      }
    });
  });
});
