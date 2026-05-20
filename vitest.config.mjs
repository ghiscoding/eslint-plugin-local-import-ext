import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // clearMocks: true,
    coverage: {
      include: ['**/*.mjs'],
      provider: 'v8',
      reportsDirectory: 'coverage',
      reportOnFailure: true,
    },
    watch: false,
  },
});
