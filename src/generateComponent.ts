import * as acorn from 'acorn';
import escodegen from 'escodegen';
import type LoaderOptions from './options';
import getComponentName from './getComponentName';

const generateScript = (svg: string, resourcePath: string, options: LoaderOptions): string => {
	const defaultExport: Record<string, unknown> = {};

	// 处理组件名
	if (options.componentName !== false) {
		defaultExport.name = getComponentName(resourcePath, options.componentName || 'packageIconNameList');
	}

	// 处理默认大小
	if (options.defaultSize !== false) {
		defaultExport.props = {
			size: {
				type: Number,
				default: options.defaultSize || 24,
			},
		};
	}

	if (Object.keys(defaultExport).length === 0) {
		return '';
	} else {
		// 生成 defaultExport 对象的 AST
		const scriptAST = acorn.parse(`export default ${JSON.stringify(defaultExport)};`, {
			ecmaVersion: 2020,
			sourceType: 'module',
		});

		// 生成 JavaScript 代码
		const script = escodegen.generate(scriptAST);

		return `<script>${script}</script>`;
	}
};

export default (svg: string, resourcePath: string, options: LoaderOptions): string => {
	const template = `<template>${svg}</template>`;
	const script = generateScript(svg, resourcePath, options);
	return template + script;
};
