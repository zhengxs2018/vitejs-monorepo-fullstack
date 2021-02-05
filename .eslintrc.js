module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint'
  ],
  plugins: ['@typescript-eslint/eslint-plugin'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.base.json',
    sourceType: 'module',
  },
  ignorePatterns: ['.eslintrc.js'],
  overrides: [
    {
      files: ['*.vue', '*.tsx'],
      extends: ['plugin:vue/vue3-recommended'],
      parserOptions: { project: './tsconfig.json' },
      rules: {
        'vue/html-self-closing': 'off',
        'vue/singleline-html-element-content-newline': 'off'
      },
    },
  ],
}
