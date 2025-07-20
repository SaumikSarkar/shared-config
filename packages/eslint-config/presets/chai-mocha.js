module.exports = {
	extends: ["./base"],
	env: {
		mocha: true,
	},
	plugins: ["chai-friendly"],
	rules: {
		"no-unused-expressions": "off",
		"chai-friendly/no-unused-expressions": "error",
		"prefer-arrow-callback": "off",
		"func-names": "off",
	},
};
