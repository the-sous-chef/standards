import neon from "eslint-config-neon/flat/next.js";
import globals from "globals";

export default [
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        ignores: [
            "**/build/**",
            "**/dist/**",
            "**/node_modules/**",
            "**/.next/**",
        ],
    },
    ...neon.map((config) => ({
        ...config,
        files: ["**/*.ts"], // We use TS config only for TS files
    })),
];
