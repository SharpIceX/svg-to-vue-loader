import type webpack from 'webpack';
import processSvg from './utils/processSvg';
import generateComponent from './utils/generateComponent';
import type LoaderOptions from './types/loaderOptions';

/**
 * Webpack Loader to convert svg files to Vue components
 */
export default function loader(this: webpack.LoaderContext<LoaderOptions>, content: string): string {
	this.cacheable(true); // Enable Webpack Cache Optimization
	const options = this.getOptions();

	// process svg
	const svg = processSvg(content, this.resourcePath, options);

	// generate component
	const vue = generateComponent(svg, options);

	return vue;
}
