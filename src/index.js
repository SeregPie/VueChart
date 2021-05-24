import component from './components/VueChart';

export default component;

import {isVue2} from 'vue-demi';

if (isVue2) {
	globalThis.window?.Vue?.component(component.name, component);
}
