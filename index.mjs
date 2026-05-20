import requireLocalExtension from './rules/require-local-extension.mjs';

export default {
  configs: {
    recommended: {
      plugins: ['local-import-ext'],
      rules: {
        'local-import-ext/require-local-extension': [
          'error',
          {
            excludedFolders: [],
          },
        ],
      },
    },
  },
  rules: {
    'require-local-extension': requireLocalExtension,
  },
};
