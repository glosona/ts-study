import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import airbnbConfig from 'eslint-config-airbnb';
import airbnbTypescriptConfig from 'eslint-config-airbnb-typescript';
import prettierConfig from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        module: 'readonly', // to prevent module import error
      },
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
          // 이 코드 추가!
          jsx: true,
        },
      },
    },
    rules: {
      ...airbnbConfig.rules,
      ...airbnbTypescriptConfig.rules,
      ...prettierConfig.rules,
      'react/react-in-jsx-scope': 'off',
    },
    plugins: {
      prettier: prettierConfig,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
