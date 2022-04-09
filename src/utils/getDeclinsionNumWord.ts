export const getDeclinsionNumWord = (
    num: number, group: readonly string[],
): string => {
  let word = '';

  const tens = num % 10;
  const hundredts = num % 100;

  if (tens === 1 && (hundredts < 10 || hundredts > 19)) {
    word = group[0];
  } else if (tens > 1 && tens < 5 && (hundredts > 19 || hundredts < 10)) {
    word = group[1];
  } else {
    word = group[2];
  }

  return word;
};
