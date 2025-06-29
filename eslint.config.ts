import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
	eslint.configs.recommended,
	tseslint.configs.recommended,
	eslintPluginPrettierRecommended,
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				sourceType: 'module',
				ecmaVersion: 'latest',
				tsconfigRootDir: import.meta.dirname,
			},
			globals: {
				...globals.node,
			},
		},
		rules: {
			'prettier/prettier': 'off',
			eqeqeq: ['error', 'always'],
		},
	},
	{
		files: ['**/*.js'],
		extends: [tseslint.configs.disableTypeChecked],
	},
	{
		ignores: ['**/node_modules/**', '**/dist'],
	},
);
