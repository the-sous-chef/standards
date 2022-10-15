const path = require("path");
const cwd = process.cwd();

module.exports = {
    extends: ["plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        tsconfigRootDir: cwd,
        project: path.resolve(cwd, "tsconfig.json"),
    },
    plugins: ["@typescript-eslint"],
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
            typescript: {
                alwaysTryTypes: true,
                project: path.resolve(cwd, "tsconfig.json"),
            },
        },
    },
};
