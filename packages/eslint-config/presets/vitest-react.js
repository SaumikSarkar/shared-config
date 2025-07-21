module.exports = {
	plugins: ["testing-library"],
	extends: ["./vitest", "./react", "plugin:testing-library/react"],
	rules: {
		...require("./jest-react").rules,
	},
};
