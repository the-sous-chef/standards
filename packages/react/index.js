module.exports = {
    extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ["react", "jsx-a11y"],
    rules: {
        "react/jsx-filename-extension": [
            "error",
            { extensions: [".jsx", ".tsx"] },
        ],
        "react/jsx-sort-props": [
            "error",
            {
                callbacksLast: true,
                ignoreCase: true,
                noSortAlphabetically: false,
                shorthandFirst: true,
            },
        ],
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
    },
    settings: {
        react: {
            pragma: "React",
            version: "detect",
        },
    },
};
