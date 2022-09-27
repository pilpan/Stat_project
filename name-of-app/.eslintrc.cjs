/* eslint-disable no-undef */
module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off"
      },
      overrides: [
        {
          files: ["*.ts", "*.mts", "*.cts", "*.tsx"],
          rules: {
            "@typescript-eslint/explicit-module-boundary-types": "error"
          }
        }
      ],
    plugins: ['@typescript-eslint'],
    root: true,
  };