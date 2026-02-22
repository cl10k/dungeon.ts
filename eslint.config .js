//! consider this section about monorepos https://typescript-eslint.io/troubleshooting/typed-linting/monorepos

// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier/flat";
import {defineConfig} from "eslint/config";

/**
 * @see https://eslint.org/docs/latest/use/configure/
 * @see https://typescript-eslint.io/getting-started/typed-linting
 * @see https://typescript-eslint.io/users/configs
 */
export default defineConfig(
  {
    ignores: [],
    // might be useful one day, might collide with @ts-check
    // files: ["**/*.js"],
    // extends: [tseslint.configs.disableTypeChecked],
  },

  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,

  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },

  prettierConfig,
);
