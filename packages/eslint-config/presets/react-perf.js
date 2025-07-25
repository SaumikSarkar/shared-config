// presets/react-perf.js
module.exports = {
	plugins: ["react-perf"],
	rules: {
		"react-perf/jsx-no-new-object-as-prop": "warn",
		"react-perf/jsx-no-new-array-as-prop": "warn",
		"react-perf/jsx-no-jsx-as-prop": "off", // Too restrictive
	},
};
