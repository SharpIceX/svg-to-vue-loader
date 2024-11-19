import path from 'node:path';
import { defineConfig } from 'rollup';
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
			exports: 'named',
			file: 'dist/main.cjs',
		},
		plugins: [
			typescript({
				declaration: false,
			}),
			nodeResolve(),
		],
	},
]);
