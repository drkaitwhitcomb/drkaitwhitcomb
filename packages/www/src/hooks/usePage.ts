import pagesRaw from "@/configs/pages.json";

type ReservedKeys = "$resource" | "$version";

// Optional: keep literal types by freezing a const copy
const pagesConst = pagesRaw as const;

export type Pages = Omit<typeof pagesConst, ReservedKeys>;
export type PageKey = keyof Pages;

function assertResource(resource: unknown, expected: string): asserts resource is string {
    if (resource !== expected) {
        throw new Error(`Invalid resource. Expected "${expected}", got "${String(resource)}"`);
    }
}

assertResource((pagesRaw as any).$resource, "pages");

export function usePage<const K extends PageKey>(name: K): Pages[K] {
    const pages = pagesConst as Pages; // strip reserved keys at the type level
    return pages[name] as Pages[K];
}