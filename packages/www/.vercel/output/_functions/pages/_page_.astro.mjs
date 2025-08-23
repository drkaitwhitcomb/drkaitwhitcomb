import { c as createComponent, a as renderTemplate } from '../chunks/astro/server_tdyPPOLk.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const getStaticPaths = async () => [];
const $$page = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/src/pages/[page].astro", void 0);

const $$file = "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/src/pages/[page].astro";
const $$url = "/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$page,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
