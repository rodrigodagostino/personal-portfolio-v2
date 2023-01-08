module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['@nuxt/eslint-config', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'prettier/prettier': 'error',
  },
}
