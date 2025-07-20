import baseConfig from "../../../release/base.mjs";

export default {
	...baseConfig,
	plugins: [
		...baseConfig.plugins,
		[
			"@semantic-release/git",
			{
				assets: ["package.json", "CHANGELOG.md"],
				message: `chore(release): ${nextRelease.version} [skip ci]\n\n[skip ci]`,
			},
		],
	],
};
