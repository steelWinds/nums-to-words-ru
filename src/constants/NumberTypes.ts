import type {IDigitsWords, IDigitsNumWords} from '@/interfaces';

const NumTokenTypes = {
  Minus: 'minus',
  MinusToken: '-',
} as const;

const Tokens = {
  [NumTokenTypes.MinusToken]: 'минус',
} as const;

const Units: IDigitsNumWords = {
  1: 'один',
  2: 'два',
  3: 'три',
  4: 'четыре',
  5: 'пять',
  6: 'шесть',
  7: 'семь',
  8: 'восемь',
  9: 'девять',
} as const;

const PreTens: IDigitsNumWords = {
  0: 'десять',
  1: 'одинадцать',
  2: 'двенадцать',
  3: 'тринадцать',
  4: 'четырнадцать',
  5: 'пятнадцать',
  6: 'шестнадцать',
  7: 'семнадцать',
  8: 'восемнадцать',
  9: 'девятнадцать',
} as const;

const Tens: IDigitsNumWords = {
  2: 'двадцать',
  3: 'тридцать',
  4: 'сорок',
  5: 'пятьдесят',
  6: 'шестьдесят',
  7: 'семьдесят',
  8: 'восемьдесят',
  9: 'девяносто',
} as const;

const Hundreds: IDigitsNumWords = {
  1: 'сто',
  2: 'двести',
  3: 'триста',
  4: 'четыреста',
  5: 'пятьсот',
  6: 'шестьсот',
  7: 'семьсот',
  8: 'восемьсот',
  9: 'девятьсот',
} as const;

const Thousands: IDigitsNumWords = {
  1: 'одна',
  2: 'две',
} as const;

const NumGroup = {
  Units,
  PreTens,
  Tens,
  Hundreds,
  Thousands,
};

const ThousandWord = [
  'тысяча',
  'тысячи',
  'тысяч',
] as const;

const MillionsWord = [
  'миллион',
  'миллиона',
  'милионов',
] as const;

const BillionsWord = [
  'миллиард',
  'миллиарда',
  'миллиардов',
] as const;

const NumWord: IDigitsWords = {
  'Thousands': ThousandWord,
  'Millions': MillionsWord,
  'Billions': BillionsWord,
};

export {
  NumTokenTypes,
  NumWord,
  NumGroup,
  Tokens,
};
