import { c as createComponent, r as renderComponent, a as renderTemplate, b as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_tdyPPOLk.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BtPJM0b2.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const configuration = {
    src: "/keystatic",
    title: "Admin"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": configuration.title }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<section style="height: 100dvh; display: grid; grid-template-rows: 1fr;"> <iframe', "", ' loading="eager" referrerpolicy="same-origin" sandbox="allow-scripts allow-same-origin allow-forms" style="width: 100%; height: 100%; border: 0; background: transparent;"></iframe> </section> <script>\n    (function () {\n      const iframe = document.querySelector(\n        `iframe[title="${configuration.title}"]`\n      );\n      if (!iframe) return;\n\n      const targetOrigin = window.location.origin; // same-origin admin UI\n\n      function postContext() {\n        // Provide only minimal, non-sensitive context\n        const context = {\n          type: "parent-context",\n          path: window.location.pathname,\n          query: window.location.search,\n          hash: window.location.hash,\n        };\n        try {\n          iframe.contentWindow?.postMessage(context, targetOrigin);\n        } catch (_) {\n          /* no-op */\n        }\n      }\n\n      // Optional: listen for requests from the embedded UI\n      window.addEventListener("message", (event) => {\n        if (event.origin !== targetOrigin) return; // strict origin check\n        const data = event.data;\n        if (!data || typeof data !== "object") return;\n\n        // Simple handshake: child can request context\n        if (data.type === "request-parent-context") {\n          postContext();\n        }\n      });\n\n      // Send initial context after iframe loads\n      iframe.addEventListener("load", () => {\n        postContext();\n      });\n    })();\n  <\/script> '], [" ", '<section style="height: 100dvh; display: grid; grid-template-rows: 1fr;"> <iframe', "", ' loading="eager" referrerpolicy="same-origin" sandbox="allow-scripts allow-same-origin allow-forms" style="width: 100%; height: 100%; border: 0; background: transparent;"></iframe> </section> <script>\n    (function () {\n      const iframe = document.querySelector(\n        \\`iframe[title="\\${configuration.title}"]\\`\n      );\n      if (!iframe) return;\n\n      const targetOrigin = window.location.origin; // same-origin admin UI\n\n      function postContext() {\n        // Provide only minimal, non-sensitive context\n        const context = {\n          type: "parent-context",\n          path: window.location.pathname,\n          query: window.location.search,\n          hash: window.location.hash,\n        };\n        try {\n          iframe.contentWindow?.postMessage(context, targetOrigin);\n        } catch (_) {\n          /* no-op */\n        }\n      }\n\n      // Optional: listen for requests from the embedded UI\n      window.addEventListener("message", (event) => {\n        if (event.origin !== targetOrigin) return; // strict origin check\n        const data = event.data;\n        if (!data || typeof data !== "object") return;\n\n        // Simple handshake: child can request context\n        if (data.type === "request-parent-context") {\n          postContext();\n        }\n      });\n\n      // Send initial context after iframe loads\n      iframe.addEventListener("load", () => {\n        postContext();\n      });\n    })();\n  <\/script> '])), maybeRenderHead(), addAttribute(configuration.src, "src"), addAttribute(configuration.title, "title")) })}`;
}, "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/src/pages/admin/index.astro", void 0);

const $$file = "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
