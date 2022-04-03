import type { IDigitsWords, IDigitsNumWords } from '@/interfaces';
declare const NumTokenTypes: {
    readonly Minus: "minus";
    readonly MinusToken: "-";
};
declare const Tokens: {
    readonly "-": "минус";
};
declare const NumGroup: {
    Units: IDigitsNumWords;
    PreTens: IDigitsNumWords;
    Tens: IDigitsNumWords;
    Hundreds: IDigitsNumWords;
    Thousands: IDigitsNumWords;
};
declare const NumWord: IDigitsWords;
export { NumTokenTypes, NumWord, NumGroup, Tokens, };
