module.exports = {
	extends: ["./base"],
	plugins: ["security"],
	rules: {
		"security/detect-object-injection": "off", // Base provides core security
	},
};
