import path from 'node:path';
import resolvePackagePath from 'pkg-from-path';

const matchPackageName = (packageName: string, packageRelativePath: string): string | null => {
	switch (packageName) {
		case '@material-design-icons/svg': {
			const fileName = path.basename(packageRelativePath, '.svg');
			const parentDirName = path.basename(path.dirname(packageRelativePath));
			return `material-design-icon-${parentDirName}-${fileName}`;
		}
		case '@fortawesome/fontawesome-free': {
			const fileName = path.basename(packageRelativePath, '.svg');
			const parentDirName = path.basename(path.dirname(packageRelativePath));
			return `fontawesome-free-icon-${parentDirName}-${fileName}`;
		}
		default:
			return null;
	}
};

const processComponentName = (svgPath: string, componentNameOption: string): string => {
	switch (componentNameOption) {
		case 'packageIconNameList': {
			const packageInfo = resolvePackagePath(svgPath);

			if (packageInfo === null) {
				// 如果找不到包信息，则使用 fileNameIcon 选项
				return processComponentName(svgPath, 'fileNameIcon');
			} else {
				const name = matchPackageName(packageInfo.packageName, svgPath);

				if (name === null) {
					// 如果找不到匹配的包名，则使用 packageIconName 选项
					return processComponentName(svgPath, 'packageIconName');
				} else {
					return name;
				}
			}
		}
		case 'packageIconName': {
			const packageInfo = resolvePackagePath(svgPath);

			if (packageInfo === null) {
				// 如果找不到包信息，则使用 fileNameIcon 选项
				return processComponentName(svgPath, 'fileNameIcon');
			} else {
				// 生成组件名
				const name = packageInfo.packageName
					.toLowerCase() // 转换为小写
					.replace('@', '') // 移除 @ 符号
					.replace(/\//g, '-'); // 将 / 替换为 -

				return `${name}-${path.basename(svgPath, '.svg')}`;
			}
		}
		case 'fileName': {
			return path.basename(svgPath, '.svg');
		}
		case 'fileNameIcon': {
			return `${path.basename(svgPath, '.svg')}Icon`;
		}
		case 'icon': {
			return 'Icon';
		}
		default: {
			throw new Error(`Invalid componentName option: ${componentNameOption}`);
		}
	}
};

export default processComponentName;
