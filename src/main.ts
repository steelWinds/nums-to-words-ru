import Converter from '@/modules/classes/Converter';

// Random function for generate to absolute random numbers

const random = <T extends number | number[]>(
  min: number, max: number, iterations: number,
): T => {
  const generate = () => Math.floor((Math.random() * (max - min)) + min);

  if (iterations) {
    return <T>Array.from({length: iterations}).map((_) => generate());
  }

  return <T>generate();
};

// Test of work converter (show simple <ul> with 15 converted words);

const converter = new Converter();

const randomNums: number[] = random(1, 1000000000, 15);

const container = <HTMLElement>document.createElement('ul');

const elements: Array<HTMLElement> = randomNums.map((num) => {
  const el = <HTMLElement>document.createElement('li');

  el.append(converter.convert(num));

  return el;
},
);

container.append(...elements);

document.body.append(container);
