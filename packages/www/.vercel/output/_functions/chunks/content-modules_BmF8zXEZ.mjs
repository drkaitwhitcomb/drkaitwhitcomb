const contentModules = new Map([
["src/content/posts/first-post.mdoc", () => import('./first-post_bwn33BaT.mjs')],
["src/content/posts/sec.mdoc", () => import('./sec_C7MyZpRY.mjs')],
["src/content/data/first.mdoc", () => import('./first_CVr1pxTe.mjs')],
["src/content/resources/first.mdoc", () => import('./first_C_c_RISO.mjs')]]);

export { contentModules as default };
