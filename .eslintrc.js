module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint'
  ],
  globals: {
    module: true,
    require: true,
  },
  extends: [
    'eslint:recommended',
  ],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-delete-var': 'warn',
    'no-duplicate-case': 'warn',
    'no-eval': 'warn',
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/no-deprecated': 'warn',
    'react/no-direct-mutation-state': 'warn',
    'react/no-is-mounted': 'warn',
    'react/react-in-jsx-scope': 'warn',
    'react/require-render-return': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  }
};
