import { load as cheerio } from 'cheerio';
import { optimize as svgoOptimize } from 'svgo';
import type LoaderOptions from '../types/loaderOptions';

export default (svg: string, resourcePath: string, options: LoaderOptions): string => {
	const $ = cheerio(svg, {
		xmlMode: true,
	});

	if (options.defaultSize !== false) {
		// 删除默认高度和宽度
		$('svg').removeAttr('width');
		$('svg').removeAttr('height');

		// 添加 Vue 的属性
		$('svg').attr(':width', 'size');
		$('svg').attr(':height', 'size');
	}

	// 添加颜色属性为来自父元素的颜色
	if (options.useFillCurrentColor) {
		$('svg').attr('fill', 'currentColor');
	}

	// 删除所有的 fill 属性
	if (options.removeAllFill) {
		$('path').removeAttr('fill');
	}

	svg = $.xml();

	// 调用 svgo
	if (options.enableSvgo) {
		svg = svgoOptimize(svg, {
			...options.svgoConfig,
			path: resourcePath,
		}).data;
	}

	return svg;
};
