import { GroupCollectionType } from '@/annotations';
interface IGrouper {
    getNumbersGroups(num: number): GroupCollectionType | never;
}
export default IGrouper;
