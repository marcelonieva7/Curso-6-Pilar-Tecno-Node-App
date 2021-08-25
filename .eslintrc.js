module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'linebreak-style': [0, 'windows'],
    semi: ['warn', 'never'],
    'react/prop-types': 0,
    quotes: 'warn',
    'arrow-parens': ['warn', 'as-needed'],
  },
}
