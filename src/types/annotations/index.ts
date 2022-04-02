import {ErrorType} from '@/constants/ErrorType';
import {NumGroup} from '@/constants/NumberTypes';

type ErrorTypeKeys = keyof typeof ErrorType
type NumberGroupKeys = keyof typeof NumGroup
type GroupCollectionType = Map<number, string>

export type {
  ErrorTypeKeys,
  NumberGroupKeys,
  GroupCollectionType,
};
