import {
	Chart,
	helpers,
} from 'chart.js';
import {
	defineComponent,
	h,
	isVue2,
	onMounted,
	onUnmounted,
	ref,
	watchEffect,
} from 'vue-demi';

let {clone} = helpers;

import update from '../utils/update';

export default defineComponent({
	name: 'VueChart',
	props: {
		data: Object,
		options: Object,
		type: {
			type: String,
			required: true,
		},
		updateMode: String,
	},
	setup(props, {refs}) {
		let chart;
		let canvasRef = ref(null);
		onMounted(() => {
			let canvas = isVue2 ? refs.canvas : canvasRef.value;
			watchEffect(() => {
				let {
					data,
					options,
					type,
					updateMode,
				} = props;
				data = clone(data);
				options = clone(options);
				chart = (() => {
					if (chart) {
						if (chart.config.type === type) {
							// todo
							update(chart.data, data);
							chart.options = options;
							chart.update(updateMode);
							return chart;
						}
						chart.destroy();
					}
					return new Chart(canvas, {type, data, options});
				})();
			});
		});
		onUnmounted(() => {
			if (chart) {
				chart.destroy();
			}
		});
		return (() => {
			return h(
				'div',
				{
					style: {
						height: '100%',
						position: 'relative',
						width: '100%',
					},
				},
				[h(
					'canvas',
					{
						style: {
							bottom: 0,
							left: 0,
							position: 'absolute',
							right: 0,
							top: 0,
						},
						ref: isVue2 ? 'canvas' : canvasRef,
					},
				)],
			);
		});
	},
});
