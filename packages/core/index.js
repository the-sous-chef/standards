module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  extends: [
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: [".eslintrc.cjs", ".eslintrc.js", ".eslintrc.mjs"],
  overrides: [
    {
      files: ["*.js", "*.cjs", "vite.*", "vitest.config.ts", "vitest/**/*"],
      rules: {
        "import/no-extraneous-dependencies": "off",
        "import/no-named-default": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["import", "prettier"],
  rules: {
    "import/extensions": [
      "error",
      {
        json: "always",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/prefer-default-export": "off",
    "newline-after-var": ["error", "always"],
    "no-confusing-arrow": ["error", { allowParens: false }],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
  },
  settings: {
    "import/extensions": [".js", ".jsx"],
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"],
      },
    },
  },
};
