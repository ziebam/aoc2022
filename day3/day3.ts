import fs from 'fs';

const parseInput = () => {
  return fs.readFileSync('day3/day3.txt', 'utf8').split(/\r?\n/);
};

const computePriorityPartOne = (input: string[]) => {
  let score = 0;
  for (const rucksack of input) {
    if (!rucksack) continue;

    const len = rucksack.length;
    const firstCompartment = new Set(rucksack.slice(0, len / 2).split(''));
    const secondCompartment = new Set(rucksack.slice(len / 2, len).split(''));

    const commonItem = [...firstCompartment].filter(item =>
      secondCompartment.has(item)
    )[0];

    const asciiValue = commonItem.charCodeAt(0);
    if (commonItem === commonItem.toLowerCase()) {
      score += asciiValue - 96;
    } else {
      score += asciiValue - 38;
    }
  }

  return score;
};

const computePriorityPartTwo = (input: string[]) => {
  let score = 0;
  for (let i = 0; i < input.length; i = i + 3) {
    if (!input[i]) continue;

    const firstRucksack = new Set(input[i].split(''));
    const secondRucksack = new Set(input[i + 1].split(''));
    const thirdRucksack = new Set(input[i + 2].split(''));

    const commonItem = [...firstRucksack].filter(
      item => secondRucksack.has(item) && thirdRucksack.has(item)
    )[0];

    const asciiValue = commonItem.charCodeAt(0);
    if (commonItem === commonItem.toLowerCase()) {
      score += asciiValue - 96;
    } else {
      score += asciiValue - 38;
    }
  }

  return score;
};

const input = parseInput();

console.log(`Part one: ${computePriorityPartOne(input)}.`);
console.log(`Part two: ${computePriorityPartTwo(input)}.`);
