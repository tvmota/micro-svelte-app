import './set-public-path';
import singleSpaSvelte from 'single-spa-svelte';
import root from './main.js';

const svelteLifecycles = singleSpaSvelte({
  component: root,
  domElementGetter: () => document.getElementById('svelte-app'),
  data: { someData: 'data' }
});

export const bootstrap = svelteLifecycles.bootstrap;
export const mount = svelteLifecycles.mount;
export const unmount = svelteLifecycles.unmount;
