module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "standard",
    "plugin:import/errors",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2022,
    requireConfigFile: "false",
    sourceType: "module",
  },
  ignorePatterns: [
    "tmp/*",
    "!/.*",
    "/.next/",
    "script/bookmarklets/*",
    "src/open-source/scripts/add-pr-links.js",
    "src/open-source/scripts/pr-link-source.js",
    "rest-api-description/",
  ],
  rules: {
    "import/no-extraneous-dependencies": ["error", { packageDir: "." }],
  },
  overrides: [
    {
      files: ["**/tests/**/*.js"],
      env: {
        jest: true,
      },
    },
    {
      files: ["**/*.tsx", "**/*.ts"],
      plugins: ["@typescript-eslint", "primer-react", "jsx-a11y"],
      extends: [
        "plugin:primer-react/recommended",
        "plugin:jsx-a11y/recommended",
      ],
      parser: "@typescript-eslint/parser",
      rules: {
        camelcase: "off",
        "no-unused-vars": "off",
        "no-undef": "off",
        "no-use-before-define": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
        "jsx-a11y/no-onchange": "off",
      },
    },
  ],
  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
    },
  },
};
