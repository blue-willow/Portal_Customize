module.exports = {
  extends: ["@cybozu", "@cybozu/eslint-config/globals/kintone"],
  globals: {
    luxon: "readonly",
    krewsheet: "readonly",
    Swal: "readonly",
    kintoneUIComponent: "readonly",
  },
  ignorePatterns: ["webpack.config.js", "dist"],
  plugins: ["prefer-arrow", "promise"],
  rules: {
    "max-lines": ["error", 300],
    quotes: ["error", "double"],
    "prefer-template": "error",
    "prefer-arrow/prefer-arrow-functions": [
      "warn",
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    "promise/prefer-await-to-then": "warn",
  },
};
