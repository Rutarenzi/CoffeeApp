module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint','jest'],
    extends: ['universe', 'universe/shared/typescript-analysis', 'plugin:react-hooks/recommended'],
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