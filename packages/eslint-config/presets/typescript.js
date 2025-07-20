module.exports = {
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	extends: [
		"./base",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:import/typescript",
	],
	rules: {
		// TypeScript rules
		"@typescript-eslint/consistent-type-imports": "error",
		"@typescript-eslint/consistent-type-definitions": ["error", "type"],
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-empty-interface": "off",
		"@typescript-eslint/no-explicit-any": "warn",
		"@typescript-eslint/no-floating-promises": "error",
		"@typescript-eslint/no-misused-promises": "error",
		"@typescript-eslint/no-unnecessary-type-constraint": "error",
		"@typescript-eslint/no-unused-vars": [
			"error",
			{ argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
		],
		"@typescript-eslint/prefer-nullish-coalescing": "error",
		"@typescript-eslint/prefer-optional-chain": "error",
		"@typescript-eslint/require-await": "error",
		"@typescript-eslint/strict-boolean-expressions": [
			"error",
			{
				allowString: false,
				allowNumber: false,
				allowNullableObject: false,
			},
		],

		// Override JavaScript rules
		"no-shadow": "off",
		"@typescript-eslint/no-shadow": "error",
		"no-undef": "off",
		"no-unused-vars": "off",
	},
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			parserOptions: {
				project: "./tsconfig.json",
			},
		},
	],
};
