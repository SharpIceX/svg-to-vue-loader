import type webpack from 'webpack';
import processSvg from './processSvg';
import type { DefineComponent } from 'vue';
import type LoaderOptions from './options';
import generateComponent from './generateComponent';

export declare const componentType: DefineComponent<
	{
		/**
		 * The size of the svg, must be a number.
		 */
		size?: string;
	},
	{},
	{}
>;

export declare const noSizeComponentType: DefineComponent<{}, {}, {}>;

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
