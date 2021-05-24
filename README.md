# VueChart

A simple wrapper for Chart.js.

Works for Vue 2 & 3.

## dependencies

- [VueDemi](https://github.com/antfu/vue-demi)

## setup

### npm

```shell
npm i @seregpie/vue-chart
```

---

```javascript
import VueChart from '@seregpie/vue-chart';
```

### browser

```html
<!-- if using Vue 2 -->
<script src="https://unpkg.com/vue@2"></script>
<script src="https://unpkg.com/@vue/composition-api"></script>

<!-- if using Vue 3 -->
<script src="https://unpkg.com/vue@3"></script>

<script src="https://unpkg.com/vue-demi"></script>
<script src="https://unpkg.com/chart.js@3"></script>
<script src="https://unpkg.com/@seregpie/vue-chart"></script>
```

The module is globally available as `VueChart`.

## usage

Register the component globally.

```javascript
import {createApp} from 'vue';
import VueChart from '@seregpie/vue-chart';

let app = createApp({/*...*/});
app.component(VueChart.name, VueChart);
app.mount('body');
```

*or*

Register the component locally.

```javascript
import VueChart from '@seregpie/vue-chart';

export default {
  components: {
    VueChart,
  },
  // ...
};
```

---

```html
<vue-chart
  :data="chartData"
  :options="{scales: {y: {beginAtZero: true}}}"
  style="width: 800px; height: 600px;"
  type="bar"
/>
```

## properties

| name | type | description |
| ---: | :--- | :--- |
| `data` | `Object` | The data of the chart. |
| `options` | `Object` | The configuration options of the chart of the current type. |
| `type` | `String` | The type of the chart. Changing the value will recreate the chart. |
| `updateMode` | `String` | The mode for the update process. |
