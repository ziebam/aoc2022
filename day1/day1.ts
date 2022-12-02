import fs from 'fs';

const parseInput = () => {
  return fs.readFileSync('day1/day1.txt', 'utf8').split(/\r?\n/);
};

const computeSums = (input: string[]) => {
  const totalCaloriesCarriedPerElf: number[] = [];

  let sum = 0;
  for (const calories of input) {
    if (!calories) {
      totalCaloriesCarriedPerElf.push(sum);
      sum = 0;
    } else {
      sum += parseInt(calories);
    }
  }

  return totalCaloriesCarriedPerElf.sort((a, b) => a - b).reverse();
};

const input = parseInput();
const sums = computeSums(input);

console.log(`Part one: ${sums[0]}.`);
console.log(`Part two: ${sums[0] + sums[1] + sums[2]}.`);
