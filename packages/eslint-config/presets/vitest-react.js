module.exports = {
	plugins: ["testing-library"],
	extends: ["./vitest", "./react", "plugin:testing-library/react"],
	rules: {
		// Same testing-library rules as jest-react
		...require("./jest-react").rules,
	},
};
