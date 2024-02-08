import path from 'path';
import { readFileAsynchronously, doStuffByTimeout, doStuffByInterval } from '.';

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    jest.spyOn(global, 'setTimeout');
    doStuffByTimeout(() => {
      return 'annie are you okay?';
    }, 500);
    expect(setTimeout).toHaveBeenCalledTimes(1);
  });

  test('should call callback only after timeout', () => {
    const logspy = jest.spyOn(console, 'log');
    doStuffByTimeout(() => {
      console.log('hi');
    }, 500);

    expect(logspy).not.toHaveBeenCalled();
    jest.runAllTimers();
    expect(logspy).toHaveBeenCalled();
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    jest.spyOn(global, 'setInterval');
    doStuffByInterval(() => {
      return 'annie are you okay?';
    }, 100);
    expect(setInterval).toHaveBeenCalledTimes(1);
  });

  test('should call callback multiple times after multiple intervals', () => {
    jest.spyOn(console, 'log');
    doStuffByInterval(() => {
      console.log('hi');
    }, 100);

    expect(console.log).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(420);
    expect(console.log).toHaveBeenCalledTimes(4);
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    const joinFunc = jest.spyOn(path, 'join');
    await readFileAsynchronously('index.ts');
    expect(joinFunc).toHaveBeenCalledTimes(1);
  });

  test('should return null if file does not exist', async () => {
    const result = await readFileAsynchronously('someNotExistingFile.ts');
    expect(result).toBe(null);
  });

  test('should return file content if file exists', async () => {
    const result = await readFileAsynchronously('index.ts');
    expect(result).not.toBe(null);
    expect(result?.length).toBeGreaterThan(10);
    expect(typeof result).toBe('string');
  });
});
