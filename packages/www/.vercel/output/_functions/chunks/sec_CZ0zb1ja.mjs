import { c as createGetHeadings, a as createContentComponent, b as assetsConfig, $ as $$Renderer } from './runtime-assets-config_vVTzahu4.mjs';

const markdocConfig = {};
markdocConfig.nodes = { ...assetsConfig.nodes, ...markdocConfig.nodes };




const tagComponentMap = {};
const nodeComponentMap = {};

const options = undefined;

const stringifiedAst = "{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[3,4],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[3,4],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[3,4],\"inline\":true,\"attributes\":{\"content\":\"First!\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":3},\"end\":{\"line\":4}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":3},\"end\":{\"line\":4}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":3},\"end\":{\"line\":4}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[5,6],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[5,6],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[5,6],\"inline\":true,\"attributes\":{\"content\":\"You can edit this page in the \"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":5},\"end\":{\"line\":6}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[5,6],\"inline\":true,\"attributes\":{\"href\":\"/keystatic/collection/posts/item/first-post\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[5,6],\"inline\":true,\"attributes\":{\"content\":\"Admin UI\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":5},\"end\":{\"line\":6}}}],\"type\":\"link\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":5},\"end\":{\"line\":6}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[5,6],\"inline\":true,\"attributes\":{\"content\":\", or directly in your IDE at \"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":5},\"end\":{\"line\":6}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[5,6],\"inline\":true,\"attributes\":{\"content\":\"src/content/posts/first-post.mdoc\"},\"children\":[],\"type\":\"code\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":5},\"end\":{\"line\":6}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[5,6],\"inline\":true,\"attributes\":{\"content\":\".\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":5},\"end\":{\"line\":6}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":5},\"end\":{\"line\":6}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":5},\"end\":{\"line\":6}}}],\"type\":\"document\",\"annotations\":[],\"slots\":{}}";

const getHeadings = createGetHeadings(stringifiedAst, markdocConfig);
const Content = createContentComponent(
	$$Renderer,
	stringifiedAst,
	markdocConfig,
  options,
	tagComponentMap,
	nodeComponentMap,
);

export { Content, getHeadings };
