module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    '@typescript-eslint/consistent-type-imports': 'warn',
    'import/no-unresolved': [2, {ignore: ['@env']}],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
    'import/ignore': ['react-native-reanimated'],
  },
};
