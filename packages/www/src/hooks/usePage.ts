import pagesRaw from "@/configs/pages";

type ReservedKeys = "$resource" | "$version";

// Keep exported types for potential use, but treat at runtime as flexible content.
export type Pages = Omit<typeof pagesRaw, ReservedKeys>;
export type PageKey = keyof Pages;

function assertResource(resource: unknown, expected: string): asserts resource is string {
  if (resource !== expected) {
    throw new Error(`Invalid resource. Expected "${expected}", got "${String(resource)}"`);
  }
}

assertResource((pagesRaw as any).$resource, "pages");

// Return a permissive shape so consumers can safely access metadata/data.
export function usePage(name: string): any {
  const pages = pagesRaw as any;
  return pages[name];
}