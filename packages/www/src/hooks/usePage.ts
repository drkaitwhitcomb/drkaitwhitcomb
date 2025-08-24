import pagesRaw from "@/configs/pages";

// Keep exported types for potential use; runtime remains flexible.
export type Pages = typeof pagesRaw;
export type PageKey = keyof Pages;

// Return a permissive shape so consumers can safely access metadata/data.
export function usePage(name: string): any {
  const pages = pagesRaw as any;
  return pages[name];
}