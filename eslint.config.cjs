const { configs } = require('@eslint/js');
const prettier = require('eslint-plugin-prettier/recommended');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const { node } = require('globals');
const importPlugin = require('eslint-plugin-import');

module.exports = [
  configs.recommended,
  prettier,
  {
    files: ['**/*.ts'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: node,
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
    },
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'operator-linebreak': 'off',
      'space-before-function-paren': 'off',
      'import/order': [
        'error',
        {
          groups: ["builtin", "external", "internal", 'parent', "sibling", "index", "object"],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true }
        }
      ]
    }
  }
];
