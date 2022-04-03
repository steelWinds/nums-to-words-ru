import type { IGrouper } from '@/interfaces';
declare class Grouper implements IGrouper {
    getNumbersGroups(num: number): Map<any, any>;
}
export default Grouper;
