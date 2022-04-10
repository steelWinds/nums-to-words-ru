import {describe, test, expect} from 'vitest';
import faker from '@faker-js/faker';
import {IGrouper} from '@/interfaces';
import {PrefixGroupType} from '@/constants';
import Grouper from '../classes/Grouper';

describe('Test Grouper class', () => {
  test('Create instance, and try grouping', () => {
    const fakeNumberBillion = faker.datatype.number({
      min: 1_000_000_000,
      max: 100_000_000_000,
    });
    const groups: string[] = [...PrefixGroupType];
    const grouper: IGrouper = new Grouper();
    const allGroups: number[] = Array.from(
        grouper.getNumbersGroups(fakeNumberBillion).keys(),
    );

    expect(allGroups).toEqual(expect.arrayContaining(groups));
  });
});
