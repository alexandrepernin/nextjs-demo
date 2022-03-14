module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-prettier",
    "stylelint-config-styled-components",
    "stylelint-config-rational-order",
  ],
  plugins: ["stylelint-declaration-strict-value"],
  rules: {
    "declaration-empty-line-before": ["never"],
    "declaration-no-important": true,
    "selector-max-specificity": "0,2,0",
    "selector-max-class": 1,
    // Ignore rules when dealing with svg elements
    "selector-max-type": [0, { ignoreTypes: [/path/, /circle/] }],
    // Force usage of a variable for these properties:
    "scale-unlimited/declaration-strict-value": [
      [
        "font-size",
        "line-height",
        "z-index",
        "color",
        "background-color",
        "border-color",
        "border-top-color",
        "border-right-color",
        "border-bottom-color",
        "border-left-color",
        "fill",
      ],
      {
        // ignore values containing interpolated js variables and arrow functions
        ignoreValues: ["/\\${/", "/=>/", "/.*\\(/", "/\\}/"],
        ignoreKeywords: [
          "transparent",
          "inherit",
          "initial",
          "unset",
          "none",
          "currentColor",
        ],
        // disable autoFix because of this https://github.com/AndyOGo/stylelint-declaration-strict-value#autofix-support
        disableFix: true,
      },
    ],
    // prevent errors on styled-components props functions
    "value-keyword-case": null,
    "function-name-case": null,
    "rule-empty-line-before": null,
    "selector-list-comma-newline-after": null,
    // Force usage of numbers for alpha-values because percentages don't work on IE and Edge
    "alpha-value-notation": "number",
    "property-no-vendor-prefix": [
      true,
      {
        ignoreProperties: ["background-clip", "text-fill-color"],
      },
    ],
    // disable these rules as they conflict with arrow functions in media-queries
    "media-feature-range-operator-space-before": null,
    "media-feature-range-operator-space-after": null,
  },
  ignoreFiles: ["src/components/CssReset/CssReset.style.tsx"],
};
