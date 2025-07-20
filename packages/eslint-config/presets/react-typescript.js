module.exports = {
	extends: ["./react", "./typescript"],
	rules: {
		// React + TS specific rules
		"@typescript-eslint/ban-types": [
			"error",
			{
				types: {
					"React.FC": {
						message: "Use explicit return types instead of React.FC",
					},
					"React.FunctionComponent": {
						message:
							"Use explicit return types instead of React.FunctionComponent",
					},
				},
				extendDefaults: true,
			},
		],
		"react/prop-types": "off",
		"react/require-default-props": "off",
	},
};
