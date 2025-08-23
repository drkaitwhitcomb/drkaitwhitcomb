export function columnsClass(columns: number) {
    const presets = {
        1: "grid-cols-1",
        2: "lg:grid-cols-2 sm:grid-cols-1",
        3: "lg:grid-cols-3 sm:grid-cols-1",
        4: "lg:grid-cols-4 sm:grid-cols-1",
    } as const

    type ColumnsClassKeyType = keyof typeof presets;

    type ColumnsClassType = typeof presets[ColumnsClassKeyType]

    return presets[columns as ColumnsClassKeyType] as ColumnsClassType
}

export function rowsClass(rows: number) {

    const presets = {
        1: "grid-rows-1",
        2: "grid-rows-2",
        3: "grid-rows-3",
    } as const

    type RowsClassKeyType = keyof typeof presets;

    type RowsClassType = typeof presets[RowsClassKeyType]

    return presets[rows as RowsClassKeyType] as RowsClassType
}

export function gapClass(gap: number) {
    const presets = {
        1: "gap-0.5",
        2: "gap-4",
        3: "gap-6",
        4: "gap-8",
    } as const

    type GapClassKeyType = keyof typeof presets;

    type GapClassType = typeof presets[GapClassKeyType]

    return presets[gap as GapClassKeyType] as GapClassType
}

export function columnSpanClass(span: number) {

    const presets = {
        1: "col-span-1 lg:col-span-1",
        2: "col-span-1 lg:col-span-2",
        3: "col-span-1 lg:col-span-3",
        4: "col-span-1 lg:col-span-4",
    } as const

    type ColumnSpanClassKeyType = keyof typeof presets;

    type ColumnSpanClassType = typeof presets[ColumnSpanClassKeyType]

    return presets[span as ColumnSpanClassKeyType] as ColumnSpanClassType
}

export function orderClass(order: number) {
    const presets = {
        0: "order-none lg:order-none sm:order-none",
        1: "order-first lg:order-none sm:order-none",
        2: "order-2 lg:order-none sm:order-none",
        3: "order-3 lg:order-none sm:order-none",
        4: "order-4 lg:order-none sm:order-none",
        5: "order-5 lg:order-none sm:order-none",
        6: "order-6 lg:order-none sm:order-none",
        7: "order-7 lg:order-none sm:order-none",
        8: "order-8 lg:order-none sm:order-none",
        9: "order-9 lg:order-none sm:order-none",
        10: "order-10 lg:order-none sm:order-none",
    } as const

    type OrderClassKeyType = keyof typeof presets;

    type OrderClassType = typeof presets[OrderClassKeyType]

    return presets[order as OrderClassKeyType] as OrderClassType
}

export function classes(...classes: string[]) {
    return [...new Set(classes.flat().filter(Boolean))].join(' ');
}