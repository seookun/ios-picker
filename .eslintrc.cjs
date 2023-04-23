// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    node: true,
  },
  overrides: [
    {
      files: ['packages/**/*.@(ts|tsx)'],
      extends: [
        'airbnb',
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      plugins: ['import'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2021,
        project: [
          'packages/*/tsconfig.json',
          'packages/*/tsconfig.node.json',
        ],
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: 'packages/*/tsconfig.json',
          },
        },
      },
      rules: {
        'no-debugger': 'error',
        'no-empty': ['warn', { allowEmptyCatch: true }],
      },
    },
    {
      files: ['packages/**/stories/**/*.@(ts|tsx)'],
      extends: ['plugin:storybook/recommended'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/require-default-props': 'off',
      },
    },
    {
      files: ['packages/**/.storybook/*.ts', 'packages/*/*.config.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'no-param-reassign': 'off',
        '@typescript-eslint/no-shadow': 'off',
      },
    },
    {
      files: ['*.@(js|mjs|cjs)'],
      extends: ['airbnb'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
});
