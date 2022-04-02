/* eslint-disable require-jsdoc */
import type {IConverter} from '@/interfaces/index';
import type {NumberGroupKeys} from '@/annotations/index';
import {
  NumTokenTypes,
  NumGroup,
  NumWord,
  Tokens,
} from '@/constants';
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

      if (reminder || hundredth) {
        if (!reminder) {
          wordsGroup = this.convertDoubleGroup({
            number: hundredth,
            group,
          });
        } else {
          wordsGroup = this.convertTripleGroup({
            group,
            reminder,
            hundredth,
          });
        }
      }

      numWords.push(...wordsGroup);
    }

    return numWords.join(' ');
  }

  // Convert separate numbers groups

  private convertTripleGroup(
      {
        reminder,
        hundredth,
        group,
      }: {
                reminder: number;
                hundredth: number;
                group: NumberGroupKeys
            }): string[] {
    const words: Array<string> = [];

    if (!hundredth) {
      words.push(NumGroup.Hundreds[reminder]);
    } else {
      words.push(NumGroup.Hundreds[reminder], ...this.convertDoubleGroup({
        number: hundredth,
        group,
      }));
    }

    return words;
  }

  private convertDoubleGroup({
    number,
    group,
  }: {
            number: number;
            group: NumberGroupKeys;
        }): string[] {
    const words: Array<string> = [];
    const namedGroup = NumWord[group];

    const numUnits = number % 10;
    const numTens = Math.trunc(number / 10);

    if (!numTens) {
      words.push(NumGroup.Units[numUnits]);
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

    if (namedGroup) {
      words.push(this.getDeclinsionNumWord(number, namedGroup));
    }

    return words;
  }

  // eslint-disable-next-line require-jsdoc
  private getDeclinsionNumWord(num: number, group: readonly string[]): string {
    let word = '';

    const tens = num % 10;
    const hundredts = num % 100;

    if (tens === 1 && (hundredts < 10 || hundredts > 19)) {
      word = group[0];
    } else if (tens > 1 && tens < 5 && hundredts > 19) {
      word = group[1];
    } else {
      word = group[2];
    }

    return word;
  }
}

export default Converter;
