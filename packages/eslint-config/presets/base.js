module.exports = {
	parser: "@babel/eslint-parser",
	parserOptions: {
		requireConfigFile: false,
		ecmaVersion: "latest",
		sourceType: "module",
		babelOptions: {
			configFile: false,
			presets: [
				[
					"@babel/preset-env",
					{
						targets: {
							browsers: "defaults",
							node: "current",
						},
					},
				],
			],
		},
	},
	env: {
		browser: true,
		es2022: true,
		node: true,
	},
	extends: [
		"airbnb-base",
		"plugin:eslint-comments/recommended",
		"plugin:import/recommended",
		"plugin:prettier/recommended",
	],
	settings: {
		"import/resolver": {
			node: {
				extensions: [".js", ".jsx", ".ts", ".tsx", ".mjs", ".cjs"],
			},
		},
		"import/extensions": [".js", ".jsx", ".ts", ".tsx", ".mjs", ".cjs"],
	},
	ignorePatterns: [
		"*.d.ts",
		"dist/",
		"build/",
		"coverage/",
		"node_modules/",
		"*.config.js",
	],
	rules: {
		// Core rules
		"no-console": ["error", { allow: ["warn", "error"] }],
		"no-param-reassign": ["error", { props: false }],
		"no-use-before-define": ["error", { functions: false, classes: true }],
		"padding-line-between-statements": [
			"error",
			{ blankLine: "always", prev: "*", next: "return" },
			{ blankLine: "always", prev: ["const", "let", "var"], next: "*" },
			{
				blankLine: "any",
				prev: ["const", "let", "var"],
				next: ["const", "let", "var"],
			},
		],

		// Import rules
		"import/extensions": "off",
		"import/no-extraneous-dependencies": [
			"error",
			{
				devDependencies: [
					"**/*.test.*",
					"**/*.spec.*",
					"**/*.stories.*",
					"**/test/**",
					"**/__tests__/**",
				],
			},
		],
		"import/order": [
			"error",
			{
				groups: [
					"builtin",
					"external",
					"internal",
					"parent",
					"sibling",
					"index",
				],
				"newlines-between": "always",
				alphabetize: { order: "asc", caseInsensitive: true },
			},
		],
		"import/prefer-default-export": "off",

		// Eslint-comments rules
		"eslint-comments/disable-enable-pair": ["error", { allowWholeFile: true }],
		"eslint-comments/require-description": [
			"error",
			{ ignore: ["eslint-enable"] },
		],
		"eslint-comments/no-unused-disable": "error",
	},
};
