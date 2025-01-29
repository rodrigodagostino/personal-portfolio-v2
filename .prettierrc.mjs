/** @type {import("prettier").Config} */
export default {
	bracketSpacing: true,
	printWidth: 100,
	singleQuote: true,
	trailingComma: 'es5',
	useTabs: true,
	plugins: ['prettier-plugin-astro'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
