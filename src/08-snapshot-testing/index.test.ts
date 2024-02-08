import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  test('should generate linked list from values 1', () => {
    const emptyList = generateLinkedList([]);
    expect(emptyList).toStrictEqual({ next: null, value: null });

    const filledList = generateLinkedList([]);
    expect(filledList).toStrictEqual({ next: null, value: null });
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    // Write your test here
  });
});
