import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic';
import { parseString } from 'set-cookie-parser';
import { jsx } from 'react/jsx-runtime';
import { config as config$1, collection, singleton, fields } from '@keystatic/core';
export { renderers } from '../../../renderers.mjs';

function makeHandler(_config) {
  return async function keystaticAPIRoute(context) {
    var _context$locals, _ref, _config$clientId, _ref2, _config$clientSecret, _ref3, _config$secret;
    const envVarsForCf = (_context$locals = context.locals) === null || _context$locals === void 0 || (_context$locals = _context$locals.runtime) === null || _context$locals === void 0 ? void 0 : _context$locals.env;
    const handler = makeGenericAPIRouteHandler({
      ..._config,
      clientId: (_ref = (_config$clientId = _config.clientId) !== null && _config$clientId !== void 0 ? _config$clientId : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_ID) !== null && _ref !== void 0 ? _ref : tryOrUndefined(() => {
        return undefined                                          ;
      }),
      clientSecret: (_ref2 = (_config$clientSecret = _config.clientSecret) !== null && _config$clientSecret !== void 0 ? _config$clientSecret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_SECRET) !== null && _ref2 !== void 0 ? _ref2 : tryOrUndefined(() => {
        return undefined                                              ;
      }),
      secret: (_ref3 = (_config$secret = _config.secret) !== null && _config$secret !== void 0 ? _config$secret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_SECRET) !== null && _ref3 !== void 0 ? _ref3 : tryOrUndefined(() => {
        return undefined                                ;
      })
    }, {
      slugEnvName: "PUBLIC_KEYSTATIC_GITHUB_APP_SLUG"
    });
    const {
      body,
      headers,
      status
    } = await handler(context.request);
    let headersInADifferentStructure = /* @__PURE__ */ new Map();
    if (headers) {
      if (Array.isArray(headers)) {
        for (const [key, value] of headers) {
          if (!headersInADifferentStructure.has(key.toLowerCase())) {
            headersInADifferentStructure.set(key.toLowerCase(), []);
          }
          headersInADifferentStructure.get(key.toLowerCase()).push(value);
        }
      } else if (typeof headers.entries === "function") {
        for (const [key, value] of headers.entries()) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
        if ("getSetCookie" in headers && typeof headers.getSetCookie === "function") {
          const setCookieHeaders2 = headers.getSetCookie();
          if (setCookieHeaders2 !== null && setCookieHeaders2 !== void 0 && setCookieHeaders2.length) {
            headersInADifferentStructure.set("set-cookie", setCookieHeaders2);
          }
        }
      } else {
        for (const [key, value] of Object.entries(headers)) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
      }
    }
    const setCookieHeaders = headersInADifferentStructure.get("set-cookie");
    headersInADifferentStructure.delete("set-cookie");
    if (setCookieHeaders) {
      for (const setCookieValue of setCookieHeaders) {
        var _options$sameSite;
        const {
          name,
          value,
          ...options
        } = parseString(setCookieValue);
        const sameSite = (_options$sameSite = options.sameSite) === null || _options$sameSite === void 0 ? void 0 : _options$sameSite.toLowerCase();
        context.cookies.set(name, value, {
          domain: options.domain,
          expires: options.expires,
          httpOnly: options.httpOnly,
          maxAge: options.maxAge,
          path: options.path,
          sameSite: sameSite === "lax" || sameSite === "strict" || sameSite === "none" ? sameSite : void 0
        });
      }
    }
    return new Response(body, {
      status,
      headers: [...headersInADifferentStructure.entries()].flatMap(([key, val]) => val.map((x) => [key, x]))
    });
  };
}
function tryOrUndefined(fn) {
  try {
    return fn();
  } catch {
    return void 0;
  }
}

const config = config$1({
  storage: {
    kind: "cloud"
  },
  ui: {
    brand: {
      name: "Dr. Kait Whitcomb",
      mark: () => /* @__PURE__ */ jsx("img", { src: "/assets/favicons/favicon-192x192.png", style: { objectFit: "cover", width: "45px", height: "45px" }, alt: "Dr. Kait Whitcomb" })
    },
    navigation: {
      "configuration": ["themes", "footer", "header", "navigator", "images", "metadata"],
      "content": ["data", "posts", "resources", "pages"]
    }
  },
  singletons: {
    themes: singleton({
      label: "Themes",
      format: "json",
      path: "/src/configs/themes",
      schema: {
        default: fields.object({
          font: fields.text({ label: "Font" }),
          colors: fields.object({
            primary: fields.text({ label: "Primary" }),
            secondary: fields.text({ label: "Secondary" }),
            tertiary: fields.text({ label: "Tertiary" }),
            quaternary: fields.text({ label: "Quaternary" })
          })
        })
      }
    }),
    header: singleton({
      label: "Header",
      format: "json",
      path: "/src/configs/header",
      schema: {
        favicon: fields.object({
          image: fields.object({
            alt: fields.text({ label: "Alt" }),
            src: fields.url({ label: "Src" }),
            url: fields.url({ label: "URL" })
          })
        }),
        links: fields.array(
          fields.object({
            name: fields.text({ label: "Name" }),
            url: fields.url({ label: "URL" })
          })
        )
      }
    }),
    images: singleton({
      label: "Images",
      format: "json",
      path: "/src/configs/images",
      schema: {
        map: fields.text({ label: "Map URL" }),
        nature: fields.text({ label: "Nature URL" }),
        overlooking: fields.text({ label: "Overlooking URL" }),
        flowers: fields.text({ label: "Flowers URL" }),
        office: fields.text({ label: "Office URL" }),
        profile: fields.text({ label: "Profile URL" }),
        landscape: fields.text({ label: "Landscape URL" })
      }
    }),
    footer: singleton({
      label: "Footer",
      format: "json",
      path: "/src/configs/footer",
      schema: {
        links: fields.object({
          links: fields.array(
            fields.object({
              name: fields.text({ label: "Name" }),
              url: fields.url({ label: "URL" })
            })
          )
        }),
        copyright: fields.object({
          copyright: fields.text({ label: "Copyright" })
        }),
        tag: fields.object({
          tag: fields.object({
            image: fields.object({
              src: fields.image({ label: "Image" }),
              url: fields.url({ label: "URL" })
            })
          })
        }),
        phoneNumber: fields.object({
          phoneNumber: fields.text({ label: "Phone Number" })
        }),
        emailAddress: fields.object({
          emailAddress: fields.text({ label: "Email Address" })
        })
      }
    }),
    navigator: singleton({
      label: "Navigator",
      format: "json",
      path: "/src/configs/navigator",
      schema: {
        $resource: fields.text({ label: "Resource" }),
        $version: fields.text({ label: "Version" })
      }
    }),
    metadata: singleton({
      label: "Metadata",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        theme: fields.select({
          label: "Theme",
          options: [{ label: "Light", value: "light" }, { label: "Dark", value: "dark" }],
          defaultValue: "light"
        })
      }
    })
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      schema: {
        "$resource": fields.text({ label: "Resource" }),
        "$version": fields.text({ label: "Version" }),
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.markdoc({
          label: "Content",
          options: {
            image: {
              directory: "/src/assets/images/posts",
              publicPath: "/assets/images/posts/"
            }
          }
        })
      }
    }),
    pages: collection({
      label: "Pages",
      slugField: "$resource",
      path: "src/content/pages/*/",
      format: "json",
      schema: {
        "$resource": fields.text({ label: "Resource" }),
        "$version": fields.text({ label: "Version" }),
        metaData: fields.object({
          title: fields.slug({ name: { label: "Title" } })
        })
      }
    }),
    resources: collection({
      label: "Resources",
      slugField: "title",
      path: "src/content/resources/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.markdoc({
          label: "Content",
          options: {
            image: {
              directory: "public/assets/images/",
              publicPath: "public/assets/images/"
            }
          }
        })
      }
    }),
    data: collection({
      label: "Data",
      slugField: "title",
      path: "src/content/data/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.markdoc({
          label: "Content",
          options: {
            image: {
              directory: "public/assets/images/data",
              publicPath: "public/assets/images/data/"
            }
          }
        })
      }
    })
  }
});

const all = makeHandler({ config });
const ALL = all;

const prerender = false;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ALL,
  all,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
