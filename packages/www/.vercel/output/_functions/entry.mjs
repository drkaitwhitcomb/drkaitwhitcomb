import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_D_39y1xa.mjs';
import { manifest } from './manifest_nL0MdeAR.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin.astro.mjs');
const _page2 = () => import('./pages/api/configs.json.astro.mjs');
const _page3 = () => import('./pages/api/keystatic/_---params_.astro.mjs');
const _page4 = () => import('./pages/api/pages.json.astro.mjs');
const _page5 = () => import('./pages/keystatic/_---params_.astro.mjs');
const _page6 = () => import('./pages/posts/_slug_.astro.mjs');
const _page7 = () => import('./pages/_page_.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const _page9 = () => import('./pages/_---page_.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.13.2_@types+node@24.3.0_idb-keyval@6.2.2_jiti@2.5.1_lightningcss@1.30.1_rollup@_47419ec4e79b857ce382fc02dddb33ea/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/admin/index.astro", _page1],
    ["src/pages/api/configs.json.ts", _page2],
    ["node_modules/.pnpm/@keystatic+astro@5.0.6_@keystatic+core@0.5.48_react-dom@19.1.1_react@19.1.1__react@19.1_bf81f7216d754ce964d8405c49e523cd/node_modules/@keystatic/astro/internal/keystatic-api.js", _page3],
    ["src/pages/api/pages.json.ts", _page4],
    ["node_modules/.pnpm/@keystatic+astro@5.0.6_@keystatic+core@0.5.48_react-dom@19.1.1_react@19.1.1__react@19.1_bf81f7216d754ce964d8405c49e523cd/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page5],
    ["src/pages/posts/[slug].astro", _page6],
    ["src/pages/[page].astro", _page7],
    ["src/pages/index.astro", _page8],
    ["src/pages/[...page].astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "1f67c375-dff5-400d-8e7d-97af0f812bc5",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
