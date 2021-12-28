module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'prettier'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/max-attributes-per-line': 'off',
    'vue/html-closing-bracket-spacing': 'error',
    'vue/no-v-html': 'off',
    'vue/singleline-html-element-content-newline': 0,
    'import/no-unresolved': 0,
    'require-await': 0,
    'nuxt/no-cjs-in-config': 'off',
    semi: 0,
    'comma-dangle': 'off',
    'no-new': 0,
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'unicorn/number-literal-case': 'off',
    'object-curly-newline': 0,
    'import/prefer-default-export': 'off',
    'no-shadow': ['error', { allow: ['state', 'getters'] }],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'e', // for e.returnvalue
          'ctx', // for Koa routing
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          '$scope', // for Angular 1 scopes
          'state', // for vuex variables
          'config', // for axios interceptor
        ],
      },
    ],
  },
}
