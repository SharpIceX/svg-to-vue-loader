import fs from 'node:fs';
import url from 'node:url';
import loader from './dist/index.mjs';

const createTest = (path, options) => {
	const content = fs.readFileSync(path, 'utf-8');
	const context = {
		resourcePath: path,
		getOptions: () => options,
		cacheable: () => {},
	};

	return loader.call(context, content);
};

{
	console.log(`\n${'='.repeat(80)}`);

	const resourcePath = url.fileURLToPath(import.meta.resolve('@material-design-icons/svg/round/rss_feed.svg'));

	console.log(`Input: ${resourcePath}\nOptions: None`);

	const result = createTest(resourcePath, {});
	console.log(`Output: \n${result}`);

	console.log(`\n${'='.repeat(80)}`);
}

{
	console.log(`\n${'='.repeat(80)}`);

	const resourcePath = url.fileURLToPath(import.meta.resolve('@fortawesome/fontawesome-free/svgs/brands/github.svg'));
	const options = {
		defaultSize: false,
	};

	console.log(`Input: ${resourcePath}\nOptions: ${JSON.stringify(options, null, 4)}`);

	const result = createTest(resourcePath, options);
	console.log(`Output: \n${result}`);

	console.log(`\n${'='.repeat(80)}`);
}

{
	console.log(`\n${'='.repeat(80)}`);

	const resourcePath = url.fileURLToPath(import.meta.resolve('@fortawesome/fontawesome-free/svgs/brands/github.svg'));
	const options = {
		defaultSize: 20,
	};

	console.log(`Input: ${resourcePath}\nOptions: ${JSON.stringify(options, null, 4)}`);

	const result = createTest(resourcePath, options);
	console.log(`Output: \n${result}`);

	console.log(`\n${'='.repeat(80)}`);
}

{
	console.log(`\n${'='.repeat(80)}`);

	const resourcePath = url.fileURLToPath(import.meta.resolve('@material-design-icons/svg/round/code.svg'));
	const options = {
		enableSvgo: true,
		removeAllFill: true,
		useFillCurrentColor: true,
		svgoConfig: {
			multipass: true,
		},
	};

	console.log(`Input: ${resourcePath}\nOptions: ${JSON.stringify(options, null, 4)}`);

	const result = createTest(resourcePath, options);
	console.log(`Output: \n${result}`);

	console.log(`\n${'='.repeat(80)}`);
}
