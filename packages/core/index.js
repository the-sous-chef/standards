import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
// import tsplugin from "@typescript-eslint/eslint-plugin";

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked.filter(Boolean),
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        files: ["**/*.js"],
        ...tseslint.configs.disableTypeChecked,
    },
);

// {
//     files: ["**/*.ts"],
//     ignores: ["**/node_modules/**", "**/tmp/**"],
//     plugins: {
//         "@typescript-eslint": tsplugin,
//     },
//     languageOptions: {
//         ecmaVersion: "latest",
//         sourceType: "module",
//         parserOptions: {
//             project: true,
//         },
//     },
// },
