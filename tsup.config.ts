import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['scripts/run.ts', '.lintstagedrc.js', 'commitlint.config.js'],
  format: ['cjs', 'esm'],
  clean: true,
  outDir: 'build',
  minify: true,
  sourcemap: true,
  dts: true,
  splitting: false,
  treeshake: true,
  platform: 'node',
  target: 'node18',
});
