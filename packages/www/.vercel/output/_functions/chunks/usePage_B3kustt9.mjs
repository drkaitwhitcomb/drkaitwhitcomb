import { g as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, h as renderSlot, b as addAttribute } from './astro/server_tdyPPOLk.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_BtPJM0b2.mjs';
import 'clsx';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';

const $$Astro$c = createAstro("https://drkaitwhitcomb.com");
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$PageLayout;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": Astro2.props.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col min-h-screen w-screen"> ${renderSlot($$result2, $$slots["header"])} ${renderSlot($$result2, $$slots["navigator"])} <main class="flex-1 w-full"> ${renderSlot($$result2, $$slots["default"])} ${renderSlot($$result2, $$slots["main"])} </main> ${renderSlot($$result2, $$slots["footer"])} </div> ` })}`;
}, "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/src/layouts/PageLayout.astro", void 0);

const $$HeaderContainer = createComponent(($$result, $$props, $$slots) => {
  const styles = `sticky top-0 left-0 z-40 flex flex-col items-center justify-between w-full h-48 py-2 backdrop-blur-lg bg-white/20 dark:bg-black/20`;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(styles, "class")}> ${renderSlot($$result, $$slots["default"])} </header>`;
}, "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/src/includes/Header/HeaderContainer.astro", void 0);

function Link({ children, ...props }) {
  return /* @__PURE__ */ jsx("a", { href: props.url, children });
}

const $$Astro$b = createAstro("https://drkaitwhitcomb.com");
const $$HeaderFavicon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$HeaderFavicon;
  const styles = {
    container: `flex items-center justify-center w-full border-black h-36 m-1`,
    image: `object-contain w-auto h-full`
  };
  const { favicon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<main${addAttribute(styles.container, "class")}> <div class="flex backdrop-blur-lg items-center"> ${renderComponent($$result, "Link", Link, { "url": favicon?.image?.url }, { "default": ($$result2) => renderTemplate` <img${addAttribute(styles.image, "class")}${addAttribute(favicon?.image?.src, "src")}${addAttribute(favicon?.image?.alt, "alt")}> ` })} </div> </main>`;
}, "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/src/includes/Header/HeaderFavicon.astro", void 0);

const $$Astro$a = createAstro("https://drkaitwhitcomb.com");
const styles$2 = {
  container: `flex items-center justify-center text-center backdrop-blur-lg transition-colors`,
  span: `relative text-black dark:text-white tracking-tight whitespace-nowrap`
};
const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { name, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(styles$2.container, "class")}${addAttribute(url, "href")}> <span${addAttribute(styles$2.span, "class")}> ${name} </span> </a>`;
}, "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/src/includes/Header/HeaderLink.astro", void 0);

const $$Astro$9 = createAstro("https://drkaitwhitcomb.com");
const $$HeaderLinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$HeaderLinks;
  const { links } = Astro2.props;
  const styles = `flex-row hidden lg:flex items-center justify-center w-full min-h-10 border-black dark:border-white
                border-opacity-100 gap-40 no-scrollbar border-t backdrop-blur-lg`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(styles, "class")}> ${links?.map((link) => renderTemplate`${renderComponent($$result, "HeaderLink", $$HeaderLink, { "name": link?.name, "url": link?.url })}`)} </div>`;
}, "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/src/includes/Header/HeaderLinks.astro", void 0);

const $$Astro$8 = createAstro("https://drkaitwhitcomb.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Header;
  const { favicon, links } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "HeaderContainer", $$HeaderContainer, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Favicon", $$HeaderFavicon, { "favicon": favicon })} ${renderComponent($$result2, "Links", $$HeaderLinks, { "links": links })} ` })}`;
}, "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/src/includes/Header/Header.astro", void 0);

const $$FooterContainer = createComponent(($$result, $$props, $$slots) => {
  const styles = `relative bottom-0 z-40 w-full p-6 border-t border-black backdrop-blur-md relative-20 md:flex md:items-center md:justify-between md:p-6 dark:border-gray-600`;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(styles, "class:list")}> ${renderSlot($$result, $$slots["default"])} </footer>`;
}, "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/src/includes/Footer/FooterContainer.astro", void 0);

const $$Astro$7 = createAstro("https://drkaitwhitcomb.com");
const $$FooterCopyright = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$FooterCopyright;
  const styles = `m-2 text-black dark:text-white text-md sm:text-center`;
  const { copyright } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(copyright, "title")}${addAttribute(styles, "class")}>${`\xA9 ${copyright}, ${(/* @__PURE__ */ new Date()).getFullYear()}`}</span>`;
}, "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/src/includes/Footer/FooterCopyright.astro", void 0);

const $$Astro$6 = createAstro("https://drkaitwhitcomb.com");
const $$FooterAgencyTag = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$FooterAgencyTag;
  const styles = `absolute mb-4 ease-in-out bg-black bg-opacity-50 rounded-full cursor-pointer bottom-10 hover:opacity-90 opacity-70 right-2 lg:left-2 h-12 w-12`;
  const { tag } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(tag?.url, "href")}${addAttribute(styles, "class:list")}> <img class="object-contain rounded-full h-12 w-12"${addAttribute(tag?.image?.src, "src")}> </a>`;
}, "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/src/includes/Footer/FooterAgencyTag.astro", void 0);

const $$Astro$5 = createAstro("https://drkaitwhitcomb.com");
const $$FooterPhoneNumber = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$FooterPhoneNumber;
  const { phoneNumber } = Astro2.props;
  const styles = `m-2 text-black dark:text-white text-md sm:text-center`;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(phoneNumber, "title")}${addAttribute(styles, "class")}>${phoneNumber}</span>`;
}, "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/src/includes/Footer/FooterPhoneNumber.astro", void 0);

const $$Astro$4 = createAstro("https://drkaitwhitcomb.com");
const $$FooterEmailAddress = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$FooterEmailAddress;
  const { emailAddress } = Astro2.props;
  const styles = `m-2 text-black dark:text-white text-md sm:text-center`;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(emailAddress, "title")}${addAttribute(styles, "class")}>${emailAddress}</span>`;
}, "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/src/includes/Footer/FooterEmailAddress.astro", void 0);

const $$Astro$3 = createAstro("https://drkaitwhitcomb.com");
const $$FooterLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$FooterLink;
  const { name, url } = Astro2.props;
  const styles = `mr-4 text-black dark:text-white hover:underline md:mr-6`;
  return renderTemplate`${maybeRenderHead()}<li> <a${addAttribute(url, "href")}${addAttribute(styles, "class")}> ${`${name}`} </a> </li>`;
}, "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/src/includes/Footer/FooterLink.astro", void 0);

const $$Astro$2 = createAstro("https://drkaitwhitcomb.com");
const $$FooterLinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FooterLinks;
  const styles = `flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-white sm:mt-0`;
  const { links } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(styles, "class:list")}> ${links ? links?.map((link) => renderTemplate`${renderComponent($$result, "FooterLink", $$FooterLink, { "name": link.name, "url": link.url })}`) : null} </ul>`;
}, "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/src/includes/Footer/FooterLinks.astro", void 0);

const $$Astro$1 = createAstro("https://drkaitwhitcomb.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const { copyright, tag, phoneNumber, emailAddress, links } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "FooterContainer", $$FooterContainer, {}, { "default": ($$result2) => renderTemplate`${copyright && renderTemplate`${renderComponent($$result2, "FooterCopyright", $$FooterCopyright, { ...copyright })}`}${tag && renderTemplate`${renderComponent($$result2, "FooterAgencyTag", $$FooterAgencyTag, { ...tag })}`}${phoneNumber && renderTemplate`${renderComponent($$result2, "FooterPhoneNumber", $$FooterPhoneNumber, { ...phoneNumber })}`}${emailAddress && renderTemplate`${renderComponent($$result2, "FooterEmailAddress", $$FooterEmailAddress, { ...emailAddress })}`}${links && renderTemplate`${renderComponent($$result2, "FooterLinks", $$FooterLinks, { ...links })}`}` })}`;
}, "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/src/includes/Footer/Footer.astro", void 0);

function Action({ label, url, action }) {
  return /* @__PURE__ */ jsx(
    "a",
    {
      "data-tooltip-target": "tooltip-share",
      "data-tooltip-placement": "left",
      className: "z-50 flex items-center justify-center w-auto h-8 px-2 text-black duration-500 delay-100 bg-white border border-gray-700 rounded-md opacity-0 hover:shadow-lg shadow-black bg-opacity-60 backdrop-blur-sm group-hover:opacity-100 hover:text-gray-900 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400",
      href: url,
      children: /* @__PURE__ */ jsx("span", { className: "text-black text-md", children: label })
    }
  );
}
function Container({ children }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      id: "speed-dial-menu-bottom-right",
      className: "flex-col items-center mb-4 space-y-2",
      children
    }
  );
}
function NavigatorActions({ actions }) {
  if (actions) {
    return /* @__PURE__ */ jsx(Container, { children: actions?.map((action) => {
      return /* @__PURE__ */ jsx(Action, { ...action });
    }) });
  }
}

function BrandingSVG() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      width: 500,
      zoomAndPan: "magnify",
      viewBox: "0 0 375 374.999991",
      height: 500,
      preserveAspectRatio: "xMidYMid meet",
      children: [
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsx("filter", { x: "0%", y: "0%", width: "100%", height: "100%", id: "034b310e6c", children: /* @__PURE__ */ jsx(
            "feColorMatrix",
            {
              values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0",
              colorInterpolationFilters: "sRGB"
            }
          ) }),
          /* @__PURE__ */ jsx("filter", { x: "0%", y: "0%", width: "100%", height: "100%", id: "e5a2eba4f7", children: /* @__PURE__ */ jsx(
            "feColorMatrix",
            {
              values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0.2126 0.7152 0.0722 0 0",
              colorInterpolationFilters: "sRGB"
            }
          ) }),
          /* @__PURE__ */ jsx("clipPath", { id: "78e8c17f75", children: /* @__PURE__ */ jsx(
            "path",
            {
              d: "M 0 3.863281 L 375 3.863281 L 375 375 L 0 375 Z M 0 3.863281 ",
              clipRule: "nonzero"
            }
          ) }),
          /* @__PURE__ */ jsx(
            "image",
            {
              x: 0,
              y: 0,
              width: 346,
              xlinkHref: "data:image/png;base64,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",
              id: "fa3f355d8a",
              height: 154,
              preserveAspectRatio: "xMidYMid meet"
            }
          ),
          /* @__PURE__ */ jsx("mask", { id: "0c30ea35b7", children: /* @__PURE__ */ jsx("g", { filter: "url(#034b310e6c)", children: /* @__PURE__ */ jsx(
            "g",
            {
              filter: "url(#e5a2eba4f7)",
              transform: "matrix(5.724711, 0, 0, 5.722402, -107.723513, -250.65116)",
              children: /* @__PURE__ */ jsx(
                "image",
                {
                  x: 0,
                  y: 0,
                  width: 346,
                  xlinkHref: "data:image/png;base64,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",
                  height: 154,
                  preserveAspectRatio: "xMidYMid meet"
                }
              )
            }
          ) }) }),
          /* @__PURE__ */ jsx(
            "image",
            {
              x: 0,
              y: 0,
              width: 346,
              xlinkHref: "data:image/png;base64,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",
              id: "7ebbdee7ad",
              height: 154,
              preserveAspectRatio: "xMidYMid meet"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("g", { clipPath: "url(#78e8c17f75)", children: /* @__PURE__ */ jsx("g", { mask: "url(#0c30ea35b7)", children: /* @__PURE__ */ jsx("g", { transform: "matrix(5.724711, 0, 0, 5.722402, -107.723513, -250.65116)", children: /* @__PURE__ */ jsx(
          "image",
          {
            x: 0,
            y: 0,
            width: 346,
            xlinkHref: "data:image/png;base64,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",
            height: 154,
            preserveAspectRatio: "xMidYMid meet"
          }
        ) }) }) })
      ]
    }
  );
}

const styles$1 = "flex shadow-black shadow-sm ease-in-out items-center justify-center text-white bg-[#C3CFBD] rounded-full p-1 w-14 h-14 hover:bg-black focus:ring-4 focus:ring-black focus:outline-none";
const STORAGE_KEY = "theme";
function prefersDark() {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function applyTheme(mode) {
  const root = document.documentElement;
  if (mode === "system") {
    const systemDark = prefersDark();
    root.classList.toggle("dark", systemDark);
    root.style.colorScheme = systemDark ? "dark" : "light";
    return;
  }
  const isDark = mode === "dark";
  root.classList.toggle("dark", isDark);
  root.style.colorScheme = isDark ? "dark" : "light";
}
function currentMode() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ?? "system";
}
function toggleTheme() {
  const mode = currentMode();
  if (mode === "system") {
    const next2 = prefersDark() ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, next2);
    applyTheme(next2);
    return;
  }
  const next = mode === "dark" ? "light" : "dark";
  localStorage.setItem(STORAGE_KEY, next);
  applyTheme(next);
}
if (typeof window !== "undefined") {
  applyTheme(currentMode());
}
function NavigatorCover() {
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      "data-dial-toggle": "speed-dial-menu-bottom-right",
      "aria-controls": "speed-dial-menu-bottom-right",
      "aria-expanded": "false",
      className: styles$1,
      onClick: toggleTheme,
      title: "Toggle theme",
      children: /* @__PURE__ */ jsx(BrandingSVG, {})
    }
  );
}

const styles = "fixed z-50 right-6 bottom-28 group opacity-70 hover:opacity-100 transition-opacity duration-200";
function NavigatorContainer({ children }) {
  return /* @__PURE__ */ jsx("div", { draggable: true, className: styles, children });
}

function Navigator({ navigator }) {
  return /* @__PURE__ */ jsxs(NavigatorContainer, { children: [
    /* @__PURE__ */ jsx(NavigatorActions, {}),
    /* @__PURE__ */ jsx(NavigatorCover, {})
  ] });
}

function columnsClass(columns) {
  const presets = {
    1: "grid-cols-1",
    2: "lg:grid-cols-2 sm:grid-cols-1",
    3: "lg:grid-cols-3 sm:grid-cols-1",
    4: "lg:grid-cols-4 sm:grid-cols-1"
  };
  return presets[columns];
}
function rowsClass(rows) {
  const presets = {
    1: "grid-rows-1",
    2: "grid-rows-2",
    3: "grid-rows-3"
  };
  return presets[rows];
}
function gapClass(gap) {
  const presets = {
    1: "gap-0.5",
    2: "gap-4",
    3: "gap-6",
    4: "gap-8"
  };
  return presets[gap];
}
function columnSpanClass(span) {
  const presets = {
    1: "col-span-1 lg:col-span-1",
    2: "col-span-1 lg:col-span-2",
    3: "col-span-1 lg:col-span-3",
    4: "col-span-1 lg:col-span-4"
  };
  return presets[span];
}
function orderClass(order) {
  const presets = {
    0: "order-none lg:order-none sm:order-none",
    1: "order-first lg:order-none sm:order-none",
    2: "order-2 lg:order-none sm:order-none",
    3: "order-3 lg:order-none sm:order-none",
    4: "order-4 lg:order-none sm:order-none",
    5: "order-5 lg:order-none sm:order-none",
    6: "order-6 lg:order-none sm:order-none",
    7: "order-7 lg:order-none sm:order-none",
    8: "order-8 lg:order-none sm:order-none",
    9: "order-9 lg:order-none sm:order-none",
    10: "order-10 lg:order-none sm:order-none"
  };
  return presets[order];
}

function defaultClass$1() {
  return `relative grid mt-8 w-full max-w-screen-xl mx-auto px-2 sm:px-4 object-scale-down`;
}
function MasonryContainer({ container, children }) {
  const { columns = 0, rows = 0, gap = 0 } = container || {};
  return /* @__PURE__ */ jsx("div", { className: `${defaultClass$1()} ${rowsClass(rows)} ${gapClass(gap)} ${columnsClass(columns)}`, children });
}

function MasonryGrid({
  options,
  children
}) {
  const { columns = 0, rows = 0, gap = 0, span = 0, order = 0 } = options;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `grid ${rowsClass(rows)} ${gapClass(gap)} ${orderClass(order)} ${columnSpanClass(span)} ${columnsClass(columns)}`,
      children: children ? children : /* @__PURE__ */ jsx(Fragment, {})
    }
  );
}

function Image(props) {
  return /* @__PURE__ */ jsx("img", { ...props });
}

function defaultClass() {
  return `z-10 h-full w-auto flex bg-[#C8C8C8] flex-grow justify-stretch
  flex flex-col duration-500 ease-in-out hover:opacity-80 rounded-sm shadow-black`;
}
function Item({
  item,
  children,
  sx
}) {
  const { span, order } = item;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `${defaultClass()} ${sx} ${orderClass(order)} ${columnSpanClass(span)}`,
      children
    }
  );
}

function ArrowSVG() {
  return /* @__PURE__ */ jsx("span", { className: "text-black hover:text-white m-2 group-hover:text-gray-300 -rotate-90 ", children: /* @__PURE__ */ jsx(
    "svg",
    {
      width: 10,
      height: 6,
      viewBox: "0 0 10 6",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M1 1L5 5L9 1",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  ) });
}

function CalloutTemplate({ item }) {
  return /* @__PURE__ */ jsxs(Item, { sx: "flex-start p-2", item, children: [
    /* @__PURE__ */ jsx("h1", { className: "w-full text-xl text-left text-white m-1 p-1 tracking-tight", children: item.title }),
    /* @__PURE__ */ jsx("h2", { className: "text-lg text-left text-white opacity-90 m-1 p-1", children: item.subTitle }),
    /* @__PURE__ */ jsx("blockquote", { className: "text-lg text-left text-black p-1 m-1", children: item.content }),
    /* @__PURE__ */ jsxs("a", { className: "text-md text-left flex flex-row text-white m-1 p-1  border-white border-1", href: item?.link?.url ?? "", children: [
      item?.link?.label ?? "",
      !item?.link?.label ? /* @__PURE__ */ jsx(Fragment, {}) : /* @__PURE__ */ jsx(ArrowSVG, {}),
      " "
    ] })
  ] });
}
function ContactTemplate({ item }) {
  return /* @__PURE__ */ jsxs(Item, { sx: "items-center mb-2", item, children: [
    /* @__PURE__ */ jsx("h1", { className: "px-6 py-2 text-xl text-left text-white", children: item.title }),
    /* @__PURE__ */ jsx("h2", { className: "px-4 text-lg text-left text-white opacity-90", children: item.emailAddress }),
    /* @__PURE__ */ jsxs("blockquote", { className: "text-xl text-left text-black flex flex-row", children: [
      "Phone ",
      item.phoneNumber
    ] }),
    /* @__PURE__ */ jsxs("blockquote", { className: "text-xl text-left text-black flex flex-row", children: [
      "Fax ",
      item.faxNumber
    ] })
  ] });
}
function ImageTemplate({ item }) {
  return /* @__PURE__ */ jsx(Item, { item, children: /* @__PURE__ */ jsx(Image, { className: "object-cover w-full h-full bg-center rounded-sm", ...item }) });
}
function DataTemplate({ item }) {
  return /* @__PURE__ */ jsxs(Item, { sx: "flex-start", item, children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl p-1 m-1", children: item.title }),
    /* @__PURE__ */ jsx("blockquote", { className: "p-1 m-1", children: item.content })
  ] });
}
function HeaderTemplate({ item }) {
  return /* @__PURE__ */ jsx(Item, { sx: "bg-black", item, children: /* @__PURE__ */ jsx("h1", { className: "p-2 text-2xl tracking-tight text-center text-white", children: item.content }) });
}
function TextTemplate({ item }) {
  return /* @__PURE__ */ jsx(Item, { item, children: /* @__PURE__ */ jsx("h2", { className: "m-1 p-1", children: item.content }) });
}
const Templates = {
  image: ImageTemplate,
  text: TextTemplate,
  header: HeaderTemplate,
  callout: CalloutTemplate,
  contact: ContactTemplate,
  data: DataTemplate
};

function RenderItems(items) {
  if (!items) {
    return null;
  } else {
    return /* @__PURE__ */ jsx(Fragment, { children: items.map((item, idx) => {
      const SelectedTemplate = Templates[item.type];
      if (!SelectedTemplate) return null;
      return /* @__PURE__ */ jsx(SelectedTemplate, { item }, `item-${idx}-${item.type}-${item.title ?? item.content ?? item.src ?? idx}`);
    }) });
  }
}
function RenderGrids(grids) {
  if (!grids) {
    return /* @__PURE__ */ jsx(Fragment, {});
  } else {
    return /* @__PURE__ */ jsx(Fragment, { children: grids.map((grid, idx) => {
      return /* @__PURE__ */ jsx(MasonryGrid, { options: grid, children: grid?.grids ? RenderGrids(grid.grids) : RenderItems(grid?.items) }, `grid-${idx}-${grid.name ?? "unnamed"}`);
    }) });
  }
}
function Masonry({ masonry }) {
  if (masonry != void 0) {
    const { grids = [], items = [], container = {} } = masonry;
    return /* @__PURE__ */ jsxs(MasonryContainer, { container, children: [
      RenderItems(items),
      RenderGrids(grids)
    ] });
  } else {
    return /* @__PURE__ */ jsx(Fragment, { children: "NADA" });
  }
}

const copyright = {"copyright":"Dr. Kait Whitcomb LLC"};
const links$1 = {"links":[{"name":"Home","url":"/"},{"name":"About","url":"/about"},{"name":"Services","url":"/services"},{"name":"Contact","url":"/contact"},{"name":"Resources","url":"/resources"}]};
const tag = {"tag":{"image":{"src":"https://storage.ko-fi.com/cdn/useruploads/4a30523b-678b-4e1b-a85b-cb794cd29439.png","url":"https://ko-fi.com/desirablesolutions"}}};
const phoneNumber = {"phoneNumber":"(407) 493-2238"};
const emailAddress = {"emailAddress":"therapy@drkaitwhitcomb.com"};
const footer = {
  copyright,
  links: links$1,
  tag,
  phoneNumber,
  emailAddress,
};

const favicon = {"image":{"alt":"logo","src":"https://static.wixstatic.com/media/254c65_f4b64d6d825546f186dc0a4358ffa178~mv2.png/v1/fill/w_346,h_154,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Kait%20Whitcomb%20logo-04.png","url":"https://drkaitwhitcomb.com"}};
const links = [{"name":"Home","url":"/"},{"name":"About Me","url":"/about"},{"name":"Services","url":"/services"},{"name":"Contact","url":"/contact"}];
const header = {
  favicon,
  links,
};

const map = "images/map.jpg";
const nature = "https://static.wixstatic.com/media/148286_5154b40f0a32424394c963e8a6c73271~mv2.jpg/v1/crop/x_0,y_2062,w_7360,h_2547/fill/w_1211,h_419,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/148286_5154b40f0a32424394c963e8a6c73271~mv2.jpg";
const overlooking = "https://static.wixstatic.com/media/148286_e7602f25ebe7452b90aaca2b0248d6c2~mv2.jpg/v1/crop/x_0,y_73,w_3456,h_3303/fill/w_404,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Bookshelf_JPG.jpg";
const flowers = "https://static.wixstatic.com/media/148286_d98ff02dbdfa4e14ac4214f5fd27d6d4~mv2.jpg/v1/crop/x_0,y_73,w_3456,h_3303/fill/w_404,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Flowers_JPG.jpg";
const office = "https://static.wixstatic.com/media/148286_8336bd7412da42ebb81f5976c90293ac~mv2.jpg/v1/crop/x_102,y_194,w_2960,h_2873/fill/w_394,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Chairs_JPG.jpg";
const profile = "https://static.wixstatic.com/media/148286_5cfb157ebb4f4d5aa061d89c84dce4eb~mv2.jpg/v1/crop/x_0,y_171,w_3135,h_4039/fill/w_406,h_525,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_0002%20(1).jpg";
const landscape = "https://static.wixstatic.com/media/148286_0e5e6307be454421b61d5d9c485ab0dd~mv2.jpg/v1/crop/x_437,y_0,w_4733,h_4000/fill/w_806,h_680,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/oc-gonzalez-UIAyfvo9Bbw-unsplash.jpg";
const images = {
  map,
  nature,
  overlooking,
  flowers,
  office,
  profile,
  landscape,
};

const about = {"metaData":{"pageTitle":"About Me"},"data":{"masonry":{"container":{"gap":1,"rows":1,"columns":3},"items":[{"type":"header","content":"About Dr. Kait Whitcomb","span":3}],"grids":[{"name":"primary","span":2,"items":[{"type":"image","span":2,"src":"/assets/images/kait-looking-over-chair.jpg"},{"type":"callout","span":1,"content":"I'm a licensed psychologist practicing in Oviedo, Florida. I earned my PhD in Clinical Psychology in 2017 from Brigham Young University, then completed a postdoctoral residency at a university counseling center. I opened my own practice in 2019. I specialize in treating adults with OCD, PTSD, anxiety, and depression. It is important to me that clients of all identities and from all cultural backgrounds feel safe, accepted, and celebrated in my practice.​","title":" My experience and training"}]}]}}};
const about$1 = {
  about,
};

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  about,
  default: about$1
}, Symbol.toStringTag, { value: 'Module' }));

const contact = {"data":{"masonry":{"container":{"gap":1,"rows":1,"columns":3},"items":[{"type":"header","content":"Contact Me","span":3}],"grids":[{"columns":1,"gap":1,"span":3,"items":[{"type":"image","src":"/assets/images/office-map-location.jpg"}]},{"span":3,"columns":3,"items":[{"type":"callout","span":2,"content":"If you think I might be a good fit, I’d love to hear from you. Please call or email me to schedule your free consultation today.","emailAddress":"therapy@drkaitwhitcomb.com","phoneNumber":"(407) 493-2238","faxNumber":"(407) 542-1804","title":"870 Clark St. ste #1020 Oviedo, FL 32765"},{"type":"contact","span":1}]}]}}};
const contact$1 = {
  contact,
};

const __vite_glob_0_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  contact,
  default: contact$1
}, Symbol.toStringTag, { value: 'Module' }));

const $resource$1 = "pages";
const $version$1 = "1.0.0";
const home = {"metadata":{"title":"Dr. Kait Whitcomb | Licensed Psychologist","slug":"/","name":"Home","themeColor":"#C3CFBD","icons":{"icon":"/icons/apple-touch-icon.png","apple":"/icons/apple-touch-icon.png"},"description":"Individual therapy from a licensed psychologist"},"data":{"masonry":{"container":{"gap":1,"rows":1,"columns":3},"grids":[{"id":"primary","columns":2,"gap":1,"span":2,"order":1,"items":[{"type":"image","span":2,"src":"/assets/images/nature-wheat-field.jpg"},{"type":"header","content":"Office and Telehealth Visits Available","span":2},{"type":"image","span":1,"src":"/assets/images/office-chairs.jpg"},{"type":"image","span":1,"src":"/assets/images/flower-painting.jpg"}]},{"id":"secondary","columns":1,"gap":1,"span":1,"order":0,"items":[{"type":"callout","sx":"flex-start content-start","title":"Individual Therapy from a Licensed Psychologist","link":{"label":"Learn More","url":"/about"},"content":"I work with adult clients to help them find the healing they’re looking for. I’m glad you’re here!\n"},{"type":"image","src":"/assets/images/kait-profile-picture.jpg"},{"type":"contact","title":"Dr. Kait Whitcomb, LLC","emailAddress":"therapy@drkaitwhitcomb.com","faxNumber":"(407) 542-1804","phoneNumber":"(407) 493-2238"}]}]}}};
const home$1 = {
  $resource: $resource$1,
  $version: $version$1,
  home,
};

const __vite_glob_0_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  $resource: $resource$1,
  $version: $version$1,
  default: home$1,
  home
}, Symbol.toStringTag, { value: 'Module' }));

const services = {"metaData":{"pageTitle":"Services"},"data":{"masonry":{"container":{"gap":1,"rows":1,"columns":3},"items":[{"type":"header","content":"Individual Therapy Services","span":3}],"grids":[{"span":3,"columns":3,"items":[{"type":"callout","span":2,"title":"My approach","content":"I specialize in treating adults with PTSD, OCD, anxiety, and depression. While every client is different, individual therapy with me often follows a similar pattern. First, we’ll do a free phone consultation to make sure I’m a good fit for you. Then we’ll do a few sessions together, so I can better understand your concerns, history, and goals. After that, we’ll develop a flexible treatment plan using research-supported treatments. This document will help you understand what to expect from our time together, so you can see the steps we’ll take to help you reach your goals.","fees":"$150/Session​"},{"type":"callout","span":1,"title":"Fees","subTitle":"$150/Session​"}]},{"columns":1,"gap":1,"span":3,"items":[{"type":"image","src":"images.nature"}]}]}}};
const services$1 = {
  services,
};

const __vite_glob_0_3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: services$1,
  services
}, Symbol.toStringTag, { value: 'Module' }));

const modules = /* #__PURE__ */ Object.assign({"/src/content/pages/about.json": __vite_glob_0_0,"/src/content/pages/contact.json": __vite_glob_0_1,"/src/content/pages/home.json": __vite_glob_0_2,"/src/content/pages/services.json": __vite_glob_0_3


});
function basename(path) {
  const name = path.split("/").pop() || "";
  return name.replace(/\.json$/i, "");
}
function mergePages() {
  const out = { $resource: "pages", $version: "1.0.0" };
  for (const [path, mod] of Object.entries(modules)) {
    const data = mod.default || {};
    if (data && (data.$resource || data.metadata || data.metaData)) {
      const key = basename(path);
      out[key] = {
        metadata: data.metadata ?? data.metaData ?? {},
        data: data.data ?? {}
      };
      continue;
    }
    for (const [k, v] of Object.entries(data)) {
      out[k] = v;
    }
  }
  return out;
}
const pages = mergePages();

const $resource = "navigator";
const $version = "1.0.0";
const navigator = {
  $resource,
  $version,
};

const themes = {
  "default": {"font":"Avenir","colors":{"primary":"#000000","secondary":"#FFFFFF","tertiary":"#000000","quaternary":"#000000"}},
};

function getByPath(obj, path) {
  return path.split(".").reduce((acc, key) => acc == null ? acc : acc[key], obj);
}
function resolveMacros(value, ctx) {
  if (typeof value === "string" && value.startsWith("@")) {
    const expr = value.slice(1);
    const [root, ...rest] = expr.split(".");
    const path = rest.join(".");
    if (root && ctx[root]) {
      const resolved = path ? getByPath(ctx[root], path) : ctx[root];
      return resolved;
    }
    return value;
  }
  if (Array.isArray(value)) {
    return value.map((v) => resolveMacros(v, ctx));
  }
  if (value && typeof value === "object") {
    const out = Array.isArray(value) ? [] : {};
    for (const [k, v] of Object.entries(value)) {
      out[k] = resolveMacros(v, ctx);
    }
    return out;
  }
  return value;
}
function useConfiguration() {
  const ctx = {
    footer: JSON.parse(JSON.stringify(footer)),
    header: JSON.parse(JSON.stringify(header)),
    images: JSON.parse(JSON.stringify(images)),
    pages: JSON.parse(JSON.stringify(pages)),
    navigator: JSON.parse(JSON.stringify(navigator)),
    themes: JSON.parse(JSON.stringify(themes))
  };
  return {
    footer: resolveMacros(ctx.footer, ctx),
    header: resolveMacros(ctx.header, ctx),
    images: resolveMacros(ctx.images, ctx),
    pages: resolveMacros(ctx.pages, ctx),
    navigator: resolveMacros(ctx.navigator, ctx),
    themes: resolveMacros(ctx.themes, ctx)
  };
}

const $$Astro = createAstro("https://drkaitwhitcomb.com");
const $$ApplicationLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ApplicationLayout;
  const { footer, header } = useConfiguration();
  const { title, masonry } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": title }, { "default": ($$result2) => renderTemplate`    ${renderSlot($$result2, $$slots["debug"])} `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer", ...footer })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", ...header })}`, "main": ($$result2) => renderTemplate`${masonry ? renderTemplate`${renderComponent($$result2, "Masonry", Masonry, { "client:load": true, "slot": "main", "masonry": masonry, "client:component-hydration": "load", "client:component-path": "@/components/Masonry/Masonry", "client:component-export": "default" })}` : renderTemplate`${renderSlot($$result2, $$slots["main"])}`}`, "navigator": ($$result2) => renderTemplate`${renderComponent($$result2, "Navigator", Navigator, { "slot": "navigator", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/includes/Navigator/Navigator", "client:component-export": "default" })}` })}`;
}, "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/src/layouts/ApplicationLayout.astro", void 0);

function assertResource(resource, expected) {
  if (resource !== expected) {
    throw new Error(`Invalid resource. Expected "${expected}", got "${String(resource)}"`);
  }
}
assertResource(pages.$resource, "pages");
function usePage(name) {
  const pages$1 = pages;
  return pages$1[name];
}

export { $$ApplicationLayout as $, pages as p, usePage as u };
