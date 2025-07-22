import gitPlugin from "@semantic-release/git";
import npmPlugin from "@semantic-release/npm";

/**
 * @param {string} pkgRoot - Path to package directory
 */
export const getConfig = (pkgRoot) => ({
	branches: ["main"],
	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/release-notes-generator",
		[
			npmPlugin,
			{
				pkgRoot,
				npmPublish: true,
			},
		],
		"@semantic-release/github",
		[
			gitPlugin,
			{
				assets: [`${pkgRoot}/package.json`],
				message: `chore(release): ${nextRelease.version} [skip ci]`,
			},
		],
	],
});
