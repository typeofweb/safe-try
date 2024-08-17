export default {
	semi: true,
	singleQuote: false,
	trailingComma: "all",
	printWidth: 100,
	useTabs: true,
	overrides: [
		{
			files: ["*.md"],
			options: {
				tabWidth: 2,
				useTabs: false,
			},
		},
	],
};
