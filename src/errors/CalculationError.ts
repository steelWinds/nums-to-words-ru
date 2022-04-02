import type {ErrorTypeKeys} from '@/annotations/ErrorTypes'
import {ErrorType} from '@/constants/ErrorType'

class CalculationError extends Error {
    public readonly type: ErrorTypeKeys;
    
    constructor(message: string, type?: ErrorTypeKeys) {
        super(message)

        this.type = type ?? ErrorType.Unknow

        this.name = this.constructor.name
    }
}

export default CalculationError