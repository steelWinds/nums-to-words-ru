interface IConverter {
    convert(num: number): string | never
}

export type { IConverter }