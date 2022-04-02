import type {IGrouper} from '@/interfaces/IGrouper'
import {PrefixGroupType, ErrorType, NumTokenTypes} from '@/constants'
import {CalculationError} from '@/errors'

class Grouper implements IGrouper {
    public getNumbersGroups(num: number) {
        const numGroups = new Map()

        let numString = String(num)
        let numCurrentGroup = ''
        
        // Checking of number on have minus symbol
        let numTypeToken = Math.sign(num)
        
        if (numTypeToken < 0) {
            numGroups.set(NumTokenTypes.Minus, NumTokenTypes.MinusToken)
            
            numString = numString.slice(1)
        }

        const numStringIterations = Math.ceil(numString.length / 3)
        
        try {
            // Separate of number to triple groups and naming them with enum
            for (let numIndex = 0; numIndex < numStringIterations; numIndex++) {
                [numCurrentGroup, numString] = [numString.slice(-3), numString.slice(0, -3)]

                // Throw error if number too much
                if (!PrefixGroupType[numIndex]) {
                    throw new CalculationError('Too much number', ErrorType.MuchGroups)
                }

                numGroups.set(PrefixGroupType[numIndex], numCurrentGroup)
           }

           return numGroups
        } catch(error) {
            throw error
        }
    }
}

export default Grouper
