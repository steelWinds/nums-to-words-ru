import { ErrorType } from '@/constants';
import { NumGroup } from '@/constants';
declare type ErrorTypeKeys = keyof typeof ErrorType;
declare type NumberGroupKeys = keyof typeof NumGroup;
declare type GroupCollectionType = Map<number, string>;
export type { ErrorTypeKeys, NumberGroupKeys, GroupCollectionType, };
