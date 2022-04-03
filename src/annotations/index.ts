import {ErrorType} from '@/constants';
import {NumGroup} from '@/constants';

type ErrorTypeKeys = keyof typeof ErrorType
type NumberGroupKeys = keyof typeof NumGroup
type GroupCollectionType = Map<number, string>

export type {
  ErrorTypeKeys,
  NumberGroupKeys,
  GroupCollectionType,
};
