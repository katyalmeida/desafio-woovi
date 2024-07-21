import globals from "globals";
import someConfig from "some-other-config-you-use";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";


export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  someConfig,
  eslintConfigPrettier,
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
];