import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  test('should generate linked list from values 1', () => {
    const emptyList = generateLinkedList([]);
    expect(emptyList).toStrictEqual({ next: null, value: null });

    const filledList = generateLinkedList([1]);
    expect(filledList).toStrictEqual({
      value: 1,
      next: { value: null, next: null },
    });
  });

  test('should generate linked list from values 2', () => {
    const emptyList = generateLinkedList([1, 2, 3]);
    expect(emptyList).toMatchSnapshot();
  });
});
