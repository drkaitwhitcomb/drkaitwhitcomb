import footer from "@/configs/footer.json";
import header from "@/configs/header.json";
import images from "@/configs/images.json";
import pages from "@/configs/pages";
import navigator from "@/configs/navigator.json";
import themes from "@/configs/themes.json";

type AnyObject = Record<string, any>;

function getByPath(obj: AnyObject, path: string): any {
  return path.split(".").reduce((acc: any, key) => (acc == null ? acc : acc[key]), obj);
}

function resolveMacros<T>(value: T, ctx: AnyObject): T {
  if (typeof value === "string" && value.startsWith("@")) {
    const expr = value.slice(1); // remove leading '@'
    const [root, ...rest] = expr.split(".");
    const path = rest.join(".");
    if (root && ctx[root]) {
      const resolved = path ? getByPath(ctx[root], path) : ctx[root];
      return (resolved as unknown) as T;
    }
    return value;
  }
  if (Array.isArray(value)) {
    return (value.map((v) => resolveMacros(v as any, ctx)) as unknown) as T;
  }
  if (value && typeof value === "object") {
    const out: AnyObject = Array.isArray(value) ? [] : {};
    for (const [k, v] of Object.entries(value as AnyObject)) {
      out[k] = resolveMacros(v, ctx);
    }
    return out as T;
  }
  return value;
}

export function useConfiguration() {
    const ctx = {
        footer: JSON.parse(JSON.stringify(footer)),
        header: JSON.parse(JSON.stringify(header)),
        images: JSON.parse(JSON.stringify(images)),
        pages: JSON.parse(JSON.stringify(pages)),
        navigator: JSON.parse(JSON.stringify(navigator)),
        themes: JSON.parse(JSON.stringify(themes))
    } as const;

    return {
        footer: resolveMacros(ctx.footer, ctx),
        header: resolveMacros(ctx.header, ctx),
        images: resolveMacros(ctx.images, ctx),
        pages: resolveMacros(ctx.pages, ctx),
        navigator: resolveMacros(ctx.navigator, ctx),
        themes: resolveMacros(ctx.themes, ctx),
    };
}