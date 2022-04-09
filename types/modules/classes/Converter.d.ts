import type { IConverter } from '@/interfaces';
declare class Converter implements IConverter {
    private readonly grouper;
    constructor();
    convert(num: number): string;
    private convertTripleGroup;
    private convertDoubleGroup;
}
export default Converter;
