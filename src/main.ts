import type vue from 'vue';
import type webpack from 'webpack';
import processSvg from './processSvg';
import type LoaderOptions from './options';
import replace from '@rollup/plugin-replace';
import generateComponent from './generateComponent';

export const componentType: vue.DefineComponent<
	{
		size?: number;
	},
	null,
	never
> = {} as vue.DefineComponent<
	{
		size?: number;
	},
	null,
	never
>;

export const noSizeComponentType: vue.DefineComponent<null, null, never> = {} as vue.DefineComponent<null, null, never>;

/**
 * Webpack Loader to convert svg files to Vue components
 */
export default function loader(this: webpack.LoaderContext<LoaderOptions>, content: string): string {
	this.cacheable(true); // Enable Webpack Cache Optimization
	const options = this.getOptions() as LoaderOptions;

	// process svg
	const svg = processSvg(content, this.resourcePath, options);

	// generate component
	const vue = generateComponent(svg, this.resourcePath, options);

	return vue;
}
