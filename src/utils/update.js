import {helpers} from 'chart.js';

let {
	isArray,
	isObject,
} = helpers;

import equals from './equals';

function update(target, source) {
	if (equals(target, source)) {
		return target;
	}
	if (isArray(source)) {
		if (isArray(target)) {
			let targetLength = target.length;
			let sourceLength = source.length;
			for (let i = 0, ii = Math.min(targetLength, sourceLength); i < ii; i++) {
				target[i] = update(target[i], source[i]);
			}
			if (targetLength > sourceLength) {
				target.splice(sourceLength);
			} else
			if (targetLength < sourceLength) {
				target.push(...source.slice(targetLength));
			}
			return target;
		}
	} else
	if (isObject(source)) {
		if (isObject(target)) {
			let targetKeys = new Set(Object.keys(target));
			let sourceKeys = new Set(Object.keys(source));
			(new Set([...targetKeys, ...sourceKeys])).forEach(key => {
				if (targetKeys.has(key)) {
					if (sourceKeys.has(key)) {
						target[key] = update(target[key], source[key]);
					} else {
						delete target[key];
					}
				} else {
					if (sourceKeys.has(key)) {
						target[key] = source[key];
					}
				}
			});
			return target;
		}
	}
	return source;
}

export default update;
