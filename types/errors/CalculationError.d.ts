import type { ErrorTypeKeys } from '@/annotations';
declare class CalculationError extends Error {
    readonly type: ErrorTypeKeys;
    constructor(message: string, type?: ErrorTypeKeys);
}
export default CalculationError;
