import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_tdyPPOLk.mjs';
import 'kleur/colors';
import { u as usePage, $ as $$ApplicationLayout } from '../chunks/usePage_B3kustt9.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const { data, metadata } = usePage("home");
  return renderTemplate`${renderComponent($$result, "ApplicationLayout", $$ApplicationLayout, { "title": metadata.title, "masonry": data.masonry })}`;
}, "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/src/pages/index.astro", void 0);

const $$file = "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
