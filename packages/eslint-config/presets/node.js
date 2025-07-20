module.exports = {
	extends: ["./base", "./import-sort", "./security"],
	env: {
		browser: false,
		node: true,
	},
	rules: {
		"no-console": "off",
		"global-require": "off",
		"import/no-dynamic-require": "off",
		"no-underscore-dangle": "off",
		"class-methods-use-this": "off",
		"import/no-extraneous-dependencies": [
			"error",
			{
				devDependencies: [
					"**/*.test.{js,ts}",
					"**/*.spec.{js,ts}",
					"**/test/**",
					"**/__tests__/**",
					"**/__mocks__/**",
					"**/scripts/**",
					"**/migrations/**",
					"**/seeds/**",
				],
			},
		],
	},
};
