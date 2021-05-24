import {babel} from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';

import {main} from './package.json';

let globals = {
	'chart.js': 'Chart',
	'vue-demi': 'VueDemi',
};

export default {
	external: Object.keys(globals),
	input: 'src/index.js',
	plugins: [
		babel({
			babelHelpers: 'bundled',
			presets: [['@babel/preset-env', {
				targets: 'defaults and not IE 11',
			}]],
		}),
		terser(),
	],
	output: {
		file: main,
		format: 'umd',
		name: 'VueChart',
		globals,
	},
};
