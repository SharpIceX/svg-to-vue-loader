import type { Config as svgoConfig } from 'svgo';

export default interface LoaderOptions {
	defaultSize?: number | false; // svg default size, if `false`, svg size is not processed.

	/**
	 * The name to be used for the component.
	 * Determines the format of the name based on the selected option.
	 *
	 * Options:
	 *
	 * - `packageIconNameList`: Use the package match list on the current Loader. If not found in the match list, the `packageIconName` option is automatically used
	 *   Example: `import codeIcon from '@material-design-icons/svg/round/code.svg';`
	 *   Returns: `material-design-icon-round-code`
	 *
	 * - `packageIconName`: Use the package name of svg. If the package of svg cannot be found, the `fileNameIcon` option is automatically used.
	 *   Example: `import codeIcon from '@material-design-icons/svg/round/code.svg';`
	 *   Returns: `material-design-icon-svg-code`
	 *
	 * - `fileName`: Uses the SVG file name (without the path or extension).
	 *   Example: `import codeIcon from '@material-design-icons/svg/round/code.svg';`
	 *   Returns: `code`
	 *
	 * - `fileNameIcon`: Uses the SVG file name and appends `Icon` after it.
	 *   Example: `import codeIcon from '@material-design-icons/svg/round/code.svg';`
	 *   Returns: `codeIcon`
	 *
	 * - `icon`: Use `Icon` naming uniformly
	 *   Example: `import codeIcon from '@material-design-icons/svg/round/code.svg';`
	 *   Returns: `Icon`
	 *
	 * - `false`: No name is added.
	 *
	 * Default: `packageIconNameList`
	 */
	componentName?: 'packageIconNameList' | 'packageIconName' | 'fileName' | 'fileNameIcon' | 'icon' | false;

	useFillCurrentColor?: boolean; // default: false, Use fill="currentColor" attribute
	removeAllFill?: boolean; // default: false, Remove all fill attributes

	enableSvgo?: boolean; // default: false, Enable or disable svgo optimization
	svgoConfig?: Omit<svgoConfig, 'path'>; // svgo configuration
}
