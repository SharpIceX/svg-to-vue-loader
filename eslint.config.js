import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import nodePlugin from 'eslint-plugin-n';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
	eslint.configs.recommended,
	tseslint.configs.recommended,
	nodePlugin.configs['flat/recommended-module'],
	eslintPluginPrettierRecommended,
	{
		languageOptions: {
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 'latest',
			},
		},
		settings: {
			node: {
				tryExtensions: ['.js', '.ts'],
			},
		},
		rules: {
			'n/no-process-exit': 'off',
			eqeqeq: ['error', 'always'],
			'vue/component-definition-name-casing': ['error', 'kebab-case'],
		},
		ignores: ['node_modules'],
	},
);
