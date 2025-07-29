// eslint.config.mjs
import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import prettier from "eslint-config-prettier"; // ➊ desactiva reglas que chocan con Prettier
import pluginPrettier from "eslint-plugin-prettier"; // ➋ reporta formato como error

export default defineConfig([
  // Reglas base recomendadas de ESLint
  js.configs.recommended,

  // Ajustes específicos de tu proyecto Node + Prettier
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node, // entorno Node
      },
    },
    plugins: { prettier: pluginPrettier },
    // Extiende configuración de Prettier (desactiva conflictos)
    rules: {
      ...prettier.rules,
      "prettier/prettier": "error", // muestra problemas de formato como errores de lint
    },
  },
]);
