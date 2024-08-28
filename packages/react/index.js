import react from "eslint-plugin-react";
// FIXME: enable when v9 is supported
// import jsxA11y from "eslint-plugin-jsx-a11y";
// import { fixupRule } from "@eslint/compat";
import globals from "globals";

// TODO add eslint-plugin-react-hooks when https://github.com/facebook/react/pull/30774 is merged
export default [
    // {
    //     files: ["**/*.{jsx,mjsx,tsx,mtsx}"],
    //     ...fixupRule(jsxA11y.flatConfigs.recommended),
    // },
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
