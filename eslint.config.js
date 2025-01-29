import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-plugin-prettier/recommended';

export default [
	// add more generic rule sets here, such as:
	// js.configs.recommended,
	eslintConfigPrettier,
	...eslintPluginAstro.configs.recommended,
	...eslintPluginAstro.configs['jsx-a11y-recommended'],
	{
		rules: {
			// override/add rules settings here, such as:
			// "astro/no-set-html-directive": "error"
		},
	},
];
