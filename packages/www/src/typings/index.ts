export type Weak<Type> = Type | undefined;

export type Flatten<T> = { [K in keyof T]: T[K] };

export type WeakFlatten<T> = Partial<Flatten<T>>;

// Link used by callouts and actions
export type LinkProps = {
  url: string;
  name?: string;
  label?: string;
};

// Masonry container sizing
export type MasonryContainerProps = {
  columns?: number;
  rows?: number;
  gap?: number;
};

// Base item shared fields
type BaseItem = {
  type: string;
  span?: number;
  order?: number;
};

export type ImageItem = BaseItem & {
  type: "image";
  src?: string;
  alt?: string;
};

export type HeaderItem = BaseItem & {
  type: "header";
  content: string;
};

export type TextItem = BaseItem & {
  type: "text";
  content: string;
};

export type DataItem = BaseItem & {
  type: "data";
  title?: string;
  content?: string;
};

export type CalloutItem = BaseItem & {
  type: "callout";
  title?: string;
  subTitle?: string;
  content?: string;
  link?: LinkProps;
  emailAddress?: string;
  phoneNumber?: string;
  faxNumber?: string;
  fees?: string;
};

export type ContactItem = BaseItem & {
  type: "contact";
  title?: string;
  emailAddress?: string;
  phoneNumber?: string;
  faxNumber?: string;
};

// Union of all supported item types (extend as new templates are added)
export type MasonryItem =
  | ImageItem
  | HeaderItem
  | TextItem
  | DataItem
  | CalloutItem
  | ContactItem;

// Grid options and recursive structure
export type MasonryGridProps = MasonryContainerProps & {
  name?: string;
  span?: number;
  order?: number;
  items?: MasonryItem[];
  grids?: MasonryGridProps[];
};

// Top-level masonry data payload
export type MasonryData = {
  container: MasonryContainerProps;
  items?: MasonryItem[];
  grids?: MasonryGridProps[];
};

// Backward-compat alias for older references (if any)
export type MasonryItemTypes = MasonryItem;
