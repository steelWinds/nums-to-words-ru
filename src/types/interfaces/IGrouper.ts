import {GroupCollectionType} from '@/annotations/index';

interface IGrouper {
    getNumbersGroups(num: number): GroupCollectionType | never
}

export default IGrouper;
