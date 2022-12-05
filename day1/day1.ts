import { assertEqual, newLineRegex, readInput } from '../utils';

const computeSolution = (input: string[]) => {
  const totalCaloriesPerElf: number[] = [];

  let sum = 0;
  for (const calories of input) {
    if (!calories) {
      totalCaloriesPerElf.push(sum);
      sum = 0;
    } else {
      sum += parseInt(calories);
    }
  }

  const sorted = totalCaloriesPerElf.sort((a, b) => a - b);
  const len = sorted.length;

  return [sorted[len - 1], sorted[len - 1] + sorted[len - 2] + sorted[len - 3]];
};

const testInput = readInput('day1/day1test.txt').split(newLineRegex);
assertEqual(computeSolution(testInput)[0], 24000);
assertEqual(computeSolution(testInput)[1], 45000);

const input = readInput('day1/day1.txt').split(newLineRegex);
const [partOne, partTwo] = computeSolution(input);
console.log(`Part one solution: ${partOne}.`);
console.log(`Part two solution: ${partTwo}.`);
