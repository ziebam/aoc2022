import fs from 'fs';

export const shallowEqual = (a: NonNullable<any>, b: NonNullable<any>) => {
  if (typeof a !== 'object') {
    return a === b;
  }

  return (
    Object.keys(a).length === Object.keys(b).length &&
    Object.entries(a).every(([k, v]) => v === b[k])
  );
};

export const assertEqual = (
  actual: NonNullable<any>,
  expected: NonNullable<any>
) => {
  if (!shallowEqual(actual, expected)) {
    throw new Error(
      `Assertion failed. Expected ${JSON.stringify(
        expected
      )} but got ${JSON.stringify(actual)}.`
    );
  }

  console.log('Assertion succeeded.');
};

export const newLineRegex = /\r?\n/;

export const readInput = (path: string) => {
  return fs.readFileSync(path, 'utf8');
};
