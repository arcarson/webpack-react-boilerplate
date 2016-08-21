module.exports = {
  "extends": "airbnb",
  "installedESLint": true,
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
  ],
  "rules": {
    "semi": 0,
    "indent": 2,
    "no-shadow": 1,
    "arrow-body-style": 0,
    "react/jsx-curly-spacing": [2, "always"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    //"import/no-extraneous-dependencies": 0, // currently not working as expected
    //"import/no-unresolved": 0, // currently not working as expected
  }
};
