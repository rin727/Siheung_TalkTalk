module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["eslint:recommended", "airbnb", "plugin:prettier/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
};
