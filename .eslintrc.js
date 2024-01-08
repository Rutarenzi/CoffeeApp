module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint','jest','testing-library'],
    extends: ['universe', 'universe/shared/typescript-analysis', 'plugin:react-hooks/recommended','plugin:testing-library/react','plugin:jest-dom/recommended'],
    overrides: [
      {
        files: ['*.ts', '*.tsx', '*.d.ts'],
        parserOptions: {
          project: './tsconfig.json'
        }
      }
    ],
    settings: {
      'import/resolver': {
        typescript: {} // this loads <rootdir>/tsconfig.json to ESLint
      }
    },
    /* for lint-staged */
    globals: {
      __dirname: true
    },
    rules: {
      'no-console': 'warn'
    }
  }