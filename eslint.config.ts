import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default tseslint.config(
	eslint.configs.recommended,
	tseslint.configs.recommended,
	eslintConfigPrettier,
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
			eqeqeq: ['error', 'always'],
		},
	},
	{
		files: ['**/*.js'],
		extends: [tseslint.configs.disableTypeChecked],
	},
	{
		ignores: ['**/node_modules/**', '**/dist/**'],
	},
);
