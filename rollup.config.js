import path from 'node:path';
import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';

/**
 * @type {import('rollup').RollupOptions[]}
 */
export default [
	{
		input: path.resolve(import.meta.dirname, './src/main.ts'),
		plugins: [
			esbuild({
				tsconfig: path.resolve(import.meta.dirname, 'tsconfig.json'),
			}),
		],
		output: [
			{
				file: 'dist/index.mjs',
				format: 'esm',
			},
			{
				file: 'dist/index.cjs',
				format: 'cjs',
			},
		],
	},
	{
		input: path.resolve(import.meta.dirname, './src/types.ts'),
		plugins: [dts()],
		output: {
			file: 'dist/index.d.ts',
			format: 'es',
		},
	},
];
