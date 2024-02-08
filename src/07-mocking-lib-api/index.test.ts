import axios, { AxiosResponse } from 'axios';
import { throttledGetDataFromApi } from './index';

describe('throttledGetDataFromApi', () => {
  test('should create instance with provided base url', async () => {
    jest.mock('axios');
    const arg = { baseURL: 'https://jsonplaceholder.typicode.com' };
    const instance = jest.spyOn(axios, 'create');
    throttledGetDataFromApi('1');
    expect(instance).toHaveBeenLastCalledWith(arg);
  });

  test('should perform request to correct provided url', async () => {
    jest.mock('axios');
    const arg = { baseURL: 'https://jsonplaceholder.typicode.com' };
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValue({
      data: {
        whatever: 'nevermind',
      },
      status: 200,
    });
  });

  test('should return response data', async () => {
    // Write your test here
  });
});
