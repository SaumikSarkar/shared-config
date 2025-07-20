module.exports = {
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ["react", "react-hooks", "jsx-a11y"],
	extends: [
		"./base",
		"airbnb",
		"airbnb/hooks",
		"plugin:react/jsx-runtime",
		"plugin:jsx-a11y/recommended",
		"./react-perf",
		"./import-sort",
		"./security",
	],
	settings: {
		react: {
			version: "detect",
		},
	},
	rules: {
		// React rules
		"react/function-component-definition": [
			"error",
			{
				namedComponents: "function-declaration",
				unnamedComponents: "arrow-function",
			},
		],
		"react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
		"react/jsx-props-no-spreading": "off",
		"react/prop-types": "off",
		"react/require-default-props": "off",
		"react/react-in-jsx-scope": "off",

		// React Hooks rules
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",

		// JSX Accessibility rules
		"jsx-a11y/label-has-associated-control": [
			"error",
			{
				assert: "either",
				depth: 3,
			},
		],
	},
};
