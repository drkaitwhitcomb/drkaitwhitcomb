import { g as createAstro, c as createComponent, b as addAttribute, i as renderScript, a as renderTemplate, s as spreadAttributes, u as unescapeHTML, r as renderComponent, j as renderHead, m as maybeRenderHead, h as renderSlot, k as renderTransition, l as fade } from './astro/server_tdyPPOLk.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro$a = createAstro("https://drkaitwhitcomb.com");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/node_modules/.pnpm/astro@5.13.2_@types+node@24.3.0_idb-keyval@6.2.2_jiti@2.5.1_lightningcss@1.30.1_rollup@_47419ec4e79b857ce382fc02dddb33ea/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/node_modules/.pnpm/astro@5.13.2_@types+node@24.3.0_idb-keyval@6.2.2_jiti@2.5.1_lightningcss@1.30.1_rollup@_47419ec4e79b857ce382fc02dddb33ea/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$9 = createAstro("https://drkaitwhitcomb.com");
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.9.2/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$8 = createAstro("https://drkaitwhitcomb.com");
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.9.2/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$7 = createAstro("https://drkaitwhitcomb.com");
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.9.2/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$6 = createAstro("https://drkaitwhitcomb.com");
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.9.2/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$5 = createAstro("https://drkaitwhitcomb.com");
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.9.2/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$4 = createAstro("https://drkaitwhitcomb.com");
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.9.2/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$3 = createAstro("https://drkaitwhitcomb.com");
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.9.2/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$2 = createAstro("https://drkaitwhitcomb.com");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || defaultCanonicalUrl.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.9.2/node_modules/astro-seo/src/SEO.astro", void 0);

const $$Astro$1 = createAstro("https://drkaitwhitcomb.com");
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Head;
  const faviconBasePath = "/assets/favicons/";
  const { title, description } = Astro2.props;
  return renderTemplate`<head>${renderScript($$result, "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/src/includes/Head/Head.astro?astro&type=script&index=0&lang.ts")}<meta charset="utf-8"><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="icon" type="image/png"${addAttribute(faviconBasePath + "favicon.png", "href")}><link rel="icon" type="image/png"${addAttribute(faviconBasePath + "favicon-32x32.png", "href")}><link rel="icon" type="image/png"${addAttribute(faviconBasePath + "favicon-16x16.png", "href")}><link rel="apple-touch-icon" sizes="180x180"${addAttribute(faviconBasePath + "apple-touch-icon.png", "href")}><link rel="icon" type="image/png" sizes="32x32"${addAttribute(faviconBasePath + "favicon-32x32.png", "href")}><link rel="icon" type="image/png" sizes="16x16"${addAttribute(faviconBasePath + "favicon-16x16.png", "href")}><link rel="manifest"${addAttribute(faviconBasePath + "site.webmanifest", "href")}><link rel="mask-icon"${addAttribute(faviconBasePath + "safari-pinned-tab.svg", "href")} color="#5bbad5"><meta name="msapplication-TileColor" content="#da532c"><meta name="theme-color" content="#ffffff"><link rel="icon" type="image/png"${addAttribute(faviconBasePath + "favicon-192x192.png", "href")}><meta name="viewport" content="width=device-width"><link rel="sitemap" href="/sitemap-index.xml"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "openGraph": {
    basic: {
      title,
      type: "website",
      image: "https://user-images.githubusercontent.com/5182256/131216951-8f74f425-f775-463d-a11b-0e01ad9fce8d.png"
    }
  }, "twitter": {
    creator: "@drkaitwhitcomb"
  } })}${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head>`;
}, "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/src/includes/Head/Head.astro", void 0);

const $$Astro = createAstro("https://drkaitwhitcomb.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en" class="bg-white dark:bg-[#252525] text-black dark:text-white"> ${renderComponent($$result, "Head", $$Head, { "title": title, "description": description })}${maybeRenderHead()}<body class="min-h-screen bg-white dark:bg-[#252525] text-black dark:text-white overflow-x-hidden overflow-y-auto transition-colors duration-200"${addAttribute(renderTransition($$result, "6jkhvj7v", fade({ duration: 1111 })), "data-astro-transition-scope")}> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/arepo/Documents/CODE/drkaitwhitcomb.com/packages/www/src/layouts/BaseLayout.astro", "self");

export { $$BaseLayout as $ };
