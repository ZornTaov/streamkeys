import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    ...compat.extends("plugin:jasmine-jquery/recommended", "eslint:recommended"),
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.jasmine,
                ...globals.jquery,
                ...globals.node,
                $: true,
                console: true,
                chrome: true,
                require: true,
                define: true,
                module: true,
                $data: true
            },

            ecmaVersion: 2020,
            sourceType: "commonjs",
        },

        rules: {
            "eol-last": ["error", "always"],
            indent: ["error", 2],
            "linebreak-style": ["error", "unix"],

            "no-console": ["error", {
                allow: ["log", "warn", "error"],
            }],

            "no-trailing-spaces": ["error"],
            "no-undef": "error",
            "no-unused-vars": "warn",
            quotes: ["error", "double"],
            strict: ["error", "global"],
        },
    },
];