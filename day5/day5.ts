import fs from 'fs';

const parseInput = () => {
  return fs.readFileSync('day5/day5.txt', 'utf8').split(/\r?\n\r?\n/);
};

const getStacks = (unparsedStacks: string) => {
  const rows = unparsedStacks.split(/\r?\n/).slice(0, -1);

  const stacks: string[] = new Array(Math.ceil(rows[0].length / 4)).fill('');
  for (const row of rows) {
    let idx = 0;
    for (let i = 1; i < rows[0].length; i += 4) {
      if (row[i] !== ' ') {
        stacks[idx] = stacks[idx] + row[i];
      }
      idx++;
    }
  }

  return stacks;
};

const computeSolutionPartOne = (input: string[]) => {
  const [unparsedStacks, instructions] = input;

  const stacks = getStacks(unparsedStacks);

  for (const instruction of instructions.split(/\r?\n/)) {
    const parsedInstruction = instruction.match(/\d+/g);

    if (parsedInstruction) {
      const howMany = parseInt(parsedInstruction[0]);
      const from = parseInt(parsedInstruction[1]);
      const to = parseInt(parsedInstruction[2]);

      const boxesToMove = stacks[from - 1]
        .slice(0, howMany)
        .split('')
        .reverse()
        .join('');
      stacks[from - 1] = stacks[from - 1].slice(howMany);
      stacks[to - 1] = boxesToMove + stacks[to - 1];
    }
  }

  const solution = stacks.map(stack => stack[0]).join('');
  return solution;
};

const computeSolutionPartTwo = (input: string[]) => {
  const [unparsedStacks, instructions] = input;

  const stacks = getStacks(unparsedStacks);

  for (const instruction of instructions.split(/\r?\n/)) {
    const parsedInstruction = instruction.match(/\d+/g);

    if (parsedInstruction) {
      const howMany = parseInt(parsedInstruction[0]);
      const from = parseInt(parsedInstruction[1]);
      const to = parseInt(parsedInstruction[2]);

      const boxesToMove = stacks[from - 1].slice(0, howMany);
      stacks[from - 1] = stacks[from - 1].slice(howMany);
      stacks[to - 1] = boxesToMove + stacks[to - 1];
    }
  }

  const solution = stacks.map(stack => stack[0]).join('');
  return solution;
};

const input = parseInput();

console.log(`Part one: ${computeSolutionPartOne(input)}.`);
console.log(`Part two: ${computeSolutionPartTwo(input)}.`);
