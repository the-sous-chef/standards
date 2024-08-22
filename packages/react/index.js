import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import globals from "globals";

// TODO add eslint-plugin-react-hooks when https://github.com/facebook/react/pull/30774 is merged
export default [
    {
        files: ["**/*.{jsx,mjsx,tsx,mtsx}"],
        ...jsxA11y.flatConfigs.recommended,
    },
    {
        files: ["**/*.{jsx,mjsx,tsx,mtsx}"],
        ...react.configs.flat.recommended,
    },
    {
        files: ["**/*.{jsx,mjsx,ts,tsx,mtsx}"],
        languageOptions: {
            globals: {
                ...globals.serviceworker,
                ...globals.browser,
            },
        },
    },
];
