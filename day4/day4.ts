import fs from 'fs';

const parseInput = () => {
  return fs.readFileSync('day4/day4.txt', 'utf8').split(/\r?\n/);
};

const computeOverlapsPartOne = (input: string[]) => {
  let overlaps = 0;
  for (const pair of input) {
    if (!pair) continue;

    const [firstElf, secondElf] = pair.split(',');
    const [firstElfLow, firstElfHigh] = firstElf
      .split('-')
      .map(section => parseInt(section));
    const [secondElfLow, secondElfHigh] = secondElf
      .split('-')
      .map(section => parseInt(section));

    if (
      (secondElfLow >= firstElfLow && secondElfHigh <= firstElfHigh) ||
      (firstElfLow >= secondElfLow && firstElfHigh <= secondElfHigh)
    ) {
      overlaps++;
    }
  }

  return overlaps;
};

const computeOverlapsPartTwo = (input: string[]) => {
  let overlaps = 0;
  for (const pair of input) {
    if (!pair) continue;

    const [firstElf, secondElf] = pair.split(',');
    const [firstElfLow, firstElfHigh] = firstElf
      .split('-')
      .map(section => parseInt(section));
    const [secondElfLow, secondElfHigh] = secondElf
      .split('-')
      .map(section => parseInt(section));

    if (
      (secondElfLow <= firstElfHigh && secondElfLow >= firstElfLow) ||
      (firstElfLow <= secondElfHigh && firstElfLow >= secondElfLow)
    ) {
      overlaps++;
    }
  }

  return overlaps;
};

const input = parseInput();

console.log(`Part one: ${computeOverlapsPartOne(input)}.`);
console.log(`Part two: ${computeOverlapsPartTwo(input)}.`);
