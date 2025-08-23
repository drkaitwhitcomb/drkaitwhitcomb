import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_tdyPPOLk.mjs';
import 'kleur/colors';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$KeystaticAstroPage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Keystatic", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/node_modules/.pnpm/@keystatic+astro@5.0.6_@keystatic+core@0.5.48_react-dom@19.1.1_react@19.1.1__react@19.1_bf81f7216d754ce964d8405c49e523cd/node_modules/@keystatic/astro/internal/keystatic-page.js", "client:component-export": "Keystatic" })}`;
}, "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/node_modules/.pnpm/@keystatic+astro@5.0.6_@keystatic+core@0.5.48_react-dom@19.1.1_react@19.1.1__react@19.1_bf81f7216d754ce964d8405c49e523cd/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", void 0);

const $$file = "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/node_modules/.pnpm/@keystatic+astro@5.0.6_@keystatic+core@0.5.48_react-dom@19.1.1_react@19.1.1__react@19.1_bf81f7216d754ce964d8405c49e523cd/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro";
const $$url = undefined;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$KeystaticAstroPage,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
