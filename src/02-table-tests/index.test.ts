import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 5, b: 5, action: Action.Add, expected: 10 },
  { a: 5, b: 5, action: Action.Subtract, expected: 0 },
  { a: 5, b: 5, action: Action.Multiply, expected: 25 },
  { a: 5, b: 5, action: Action.Divide, expected: 1 },
  { a: 5, b: 5, action: Action.Exponentiate, expected: 3125 },
  { a: 5, b: 5, action: 'blueberry', expected: null },
  { a: 'strawberry', b: 'raspberry', action: Action.Add, expected: null },
];

describe('simpleCalculator table-driven tests array format', () => {
  it.each(testCases)(
    'should perform all calculations correctly',
    ({ a, b, action, expected }) => {
      const rawInput = { a, b, action };
      expect(simpleCalculator(rawInput)).toBe(expected);
    },
  );
});
