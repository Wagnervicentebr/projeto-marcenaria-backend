module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    es2021: true
  },
  plugins: ['@typescript-eslint'],
  extends: ['standard-with-typescript', 'prettier/@typescript-eslint', 'plugin:@typescript-eslint/recommended'],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
  }
}
