import path from 'node:path';
import { defineConfig } from 'rollup';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';

export default defineConfig([
	{
		input: path.resolve('./src/main.ts'),
		external: id => /node_modules/.test(id),
		output: {
			format: 'esm',
			sourcemap: false,
			exports: 'named',
			file: 'dist/main.mjs',
		},
		plugins: [typescript(), nodeResolve()],
	},
	{
		input: path.resolve('./src/main.ts'),
		external: id => /node_modules/.test(id),
		output: {
			format: 'cjs',
			sourcemap: false,
			file: 'dist/main.cjs',
		},
		plugins: [
			nodeResolve(),
			typescript({
				declaration: false,
			}),
			replace({
				preventAssignment: true,
				include: path.resolve('./src/main.ts'),

				'export const': 'const',
			}),
		],
	},
]);
