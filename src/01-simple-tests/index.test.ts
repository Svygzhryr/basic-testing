import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  const rawInput = {
    a: 5,
    b: 5,
  };

  test('should add two numbers', () => {
    expect(simpleCalculator({ ...rawInput, action: Action.Add })).toBe(10);
  });

  test('should subtract two numbers', () => {
    expect(simpleCalculator({ ...rawInput, action: Action.Subtract })).toBe(0);
  });

  test('should multiply two numbers', () => {
    expect(simpleCalculator({ ...rawInput, action: Action.Multiply })).toBe(25);
  });

  test('should divide two numbers', () => {
    expect(simpleCalculator({ ...rawInput, action: Action.Divide })).toBe(1);
  });

  test('should exponentiate two numbers', () => {
    expect(simpleCalculator({ ...rawInput, action: Action.Exponentiate })).toBe(
      3125,
    );
  });

  test('should return null for invalid action', () => {
    expect(simpleCalculator({ ...rawInput, action: 'veni' })).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    expect(simpleCalculator({ a: 'vidi', b: 'vici', action: Action.Add })).toBe(
      null,
    );
  });
});
