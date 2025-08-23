import { c as createComponent, a as renderTemplate } from '../../chunks/astro/server_tdyPPOLk.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const getStaticPaths = async () => [];
const $$slug = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/src/pages/posts/[slug].astro", void 0);

const $$file = "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/src/pages/posts/[slug].astro";
const $$url = "/posts/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
