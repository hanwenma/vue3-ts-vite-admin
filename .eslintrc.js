module.exports = {
  env: {
    // es6: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
    // 'plugin:prettier/recommended',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src', './'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.tsx'], // 可忽略的后缀名
      },
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    'no-unused-vars': 'off',
    'no-plusplus': 'off',
    'import/no-unresolved': 'off',
    'no-param-reassign': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'arrow-body-style': ['off'],
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: false,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
