// Shared configuration for all packages
export default {
	branches: ["main", "next"],
	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/release-notes-generator",
		[
			"@semantic-release/npm",
			{
				npmPublish: true,
				pkgRoot: ".",
			},
		],
		"@semantic-release/github",
	],
};
