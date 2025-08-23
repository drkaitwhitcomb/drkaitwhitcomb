import pagesRaw from "@/configs/pages";

type ReservedKeys = "$resource" | "$version";

export type Pages = Omit<typeof pagesRaw, ReservedKeys>;
export type PageKey = keyof Pages;

function assertResource(resource: unknown, expected: string): asserts resource is string {
    if (resource !== expected) {
        throw new Error(`Invalid resource. Expected "${expected}", got "${String(resource)}"`);
    }
}

assertResource((pagesRaw as any).$resource, "pages");

export function usePage<const K extends PageKey>(name: K): Pages[K] {
    const pages = pagesRaw as Pages;
    return pages[name];
}