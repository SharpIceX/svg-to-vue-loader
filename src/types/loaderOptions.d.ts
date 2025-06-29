import type { Config as svgoConfig } from 'svgo';

/**
 * Interface for svg-to-vue-loader options.
 */
export default interface LoaderOptions {
	/**
	 * SVG default size. If set to `false`, SVG size is not processed.
	 * @default undefined
	 */
	defaultSize?: number | false;

	/**
	 * Whether to use fill="currentColor" attribute.
	 * @default false
	 */
	useFillCurrentColor?: boolean;

	/**
	 * Whether to remove all fill attributes.
	 * @default false
	 */
	removeAllFill?: boolean;

	/**
	 * Whether to enable SVGO optimization.
	 * @default false
	 */
	enableSvgo?: boolean;

	/**
	 * SVGO configuration.
	 * Omits the 'path' property from svgoConfig.
	 */
	svgoConfig?: Omit<svgoConfig, 'path'>;
}
