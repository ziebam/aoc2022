import fs from 'fs';

type EnemyShape = 'A' | 'B' | 'C';
type MyShape = 'X' | 'Y' | 'Z';

interface Matchup {
  beats: EnemyShape;
  equals: EnemyShape;
  losesTo: EnemyShape;
  win: number;
  draw: number;
  loss: number;
}

type Matchups = {
  [shape in MyShape]: Matchup;
};

const matchups: Matchups = {
  X: {
    beats: 'C',
    equals: 'A',
    losesTo: 'B',
    win: 7,
    draw: 4,
    loss: 1,
  },
  Y: {
    beats: 'A',
    equals: 'B',
    losesTo: 'C',
    win: 8,
    draw: 5,
    loss: 2,
  },
  Z: {
    beats: 'B',
    equals: 'C',
    losesTo: 'A',
    win: 9,
    draw: 6,
    loss: 3,
  },
};

const parseInput = () => {
  return fs.readFileSync('day2/day2.txt', 'utf8').split(/\r?\n/);
};

const computeScorePartOne = (input: string[]) => {
  let score = 0;
  for (const round of input) {
    if (!round) continue;

    const [opponent, me] = round.split(' ');

    if (matchups[me as MyShape].beats === opponent) {
      score += matchups[me as MyShape].win;
    } else if (matchups[me as MyShape].equals === opponent) {
      score += matchups[me as MyShape].draw;
    } else {
      score += matchups[me as MyShape].loss;
    }
  }

  return score;
};

const computeScorePartTwo = (input: string[]) => {
  let score = 0;
  for (const round of input) {
    if (!round) continue;

    const [opponent, result] = round.split(' ');

    if (result === 'X') {
      score += Object.values(matchups).find(
        matchup => matchup.losesTo === opponent
      )!.loss;
    } else if (result === 'Y') {
      score += Object.values(matchups).find(
        matchup => matchup.equals === opponent
      )!.draw;
    } else {
      score += Object.values(matchups).find(
        matchup => matchup.beats === opponent
      )!.win;
    }
  }

  return score;
};

const input = parseInput();

console.log(`Part one: ${computeScorePartOne(input)}.`);
console.log(`Part two: ${computeScorePartTwo(input)}.`);
