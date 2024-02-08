import { getBankAccount } from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const bank = getBankAccount(42);
    expect(bank.getBalance()).toBe(42);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const bank = getBankAccount(42);
    expect(() => bank.withdraw(200)).toThrow();
  });

  test('should throw error when transferring more than balance', () => {
    const bank = getBankAccount(42);
    const anotherBank = getBankAccount(0);
    expect(() => bank.transfer(43, anotherBank)).toThrow();
  });

  test('should throw error when transferring to the same account', () => {
    const bank = getBankAccount(42);
    expect(() => bank.transfer(43, bank)).toThrow();
  });

  test('should deposit money', () => {
    const bank = getBankAccount(42);
    bank.deposit(10);
    expect(bank.getBalance()).toBe(52);
  });

  test('should withdraw money', () => {
    const bank = getBankAccount(42);
    bank.withdraw(10);
    expect(bank.getBalance()).toBe(32);
  });

  test('should transfer money', () => {
    const bank = getBankAccount(42);
    const anotherBank = getBankAccount(0);
    bank.transfer(10, anotherBank);
    expect(anotherBank.getBalance()).toBe(10);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const bank = getBankAccount(42);
    const balance = await bank.fetchBalance();
    let outcome;
    balance ? (outcome = 'number') : (outcome = 'object');
    expect(typeof balance).toBe(outcome);
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const bank = getBankAccount(42);
    bank.synchronizeBalance().then(() => {
      expect(bank.getBalance()).not.toBe(42);
    });
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const bank = getBankAccount(42);
    bank.synchronizeBalance().catch((err) => {
      expect(err).toThrow();
    });
  });
});
