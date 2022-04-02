type GroupCollectionType = Map<number, string>

interface IGrouper {
    getNumbersGroups(num: number): GroupCollectionType | never
}

export { IGrouper, GroupCollectionType }