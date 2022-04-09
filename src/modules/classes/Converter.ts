/* eslint-disable require-jsdoc */
import type {IConverter} from '@/interfaces';
import type {NumberGroupKeys} from '@/annotations';
import {
  NumTokenTypes,
  NumGroup,
  NumWord,
  Tokens,
} from '@/constants';
import {getDeclinsionNumWord} from '@/utils/getDeclinsionNumWord';
import Grouper from './Grouper';

class Converter implements IConverter {
  private readonly grouper: Grouper;

  constructor() {
    this.grouper = new Grouper();
  }

  public convert(num: number) {
    const numGroups = this.grouper.getNumbersGroups(num);
    const numWords: string[] = [];

    if (numGroups.delete(NumTokenTypes.Minus)) {
      numWords.push(Tokens[NumTokenTypes.MinusToken]);
    }

    const numGroupsToArray = new Map(Array.from(numGroups).reverse());

    for (const [group, number] of numGroupsToArray) {
      const [
        reminder,
        hundredth,
      ] = [Math.trunc(number / 100), number % 100];

      let wordsGroup: string[] = [];

      wordsGroup = this.convertTripleGroup({
        number,
        group,
        reminder,
        hundredth,
      });

      numWords.push(...wordsGroup);
    }

    return numWords.join(' ').trim();
  }

  // Convert separate numbers groups

  private convertTripleGroup(
      {
        reminder,
        hundredth,
        group,
      }: {
        number: number;
        reminder: number;
        hundredth: number;
        group: NumberGroupKeys
    }): string[] {
    const words: Array<string> = [];

    words.push(NumGroup.Hundreds[reminder], ...this.convertDoubleGroup({
      reminder: reminder,
      hundredth,
      group,
    }));

    return words;
  }

  private convertDoubleGroup({
    reminder,
    hundredth,
    group,
  }: {
        reminder: number
        hundredth: number;
        group: NumberGroupKeys;
    }): string[] {
    const words: Array<string> = [];
    const namedGroup = NumWord[group];
    const numWordGroup = NumGroup?.[group];

    const numUnits = hundredth % 10;
    const numTens = Math.trunc(hundredth / 10);

    const numUnitsGroup = (numWordGroup && namedGroup) ?
      numWordGroup : NumGroup.Units;

    if (!numTens) {
      words.push(numUnitsGroup[numUnits]);
    } else if (!numUnits && numTens !== 1) {
      words.push(NumGroup.Tens[numTens]);
    } else if (numTens === 1) {
      words.push(NumGroup.PreTens[numUnits]);
    } else {
      words.push(
          NumGroup.Tens[numTens],
          NumGroup.Units[numUnits],
      );
    }

    if (namedGroup && (hundredth || reminder)) {
      words.push(getDeclinsionNumWord(hundredth, namedGroup));
    }

    return words;
  }
}

export default Converter;
