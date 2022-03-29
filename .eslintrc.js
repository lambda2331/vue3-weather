module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  env: {
    browser: true,
  },
  plugins: [
    "vue",
    "@typescript-eslint"
  ],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    "plugin:@typescript-eslint/recommended",
    "@vue/prettier",
    "plugin:prettier/recommended",
    "@vue/typescript",
  ],
  rules: {
    'vue/no-unused-vars': 'error',
    "generator-star-spacing": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
  }
}