import fetchData, { getErrorMessage } from './task-1';
import { describe, test, vi, beforeEach, afterEach, expect } from 'vitest';

describe('fetchData function', () => {
	const mockData = { name: 'John Doe', age: 30 };
	const mockUrl = 'https://example.com/data';
	const mockResponse = {
		ok: true,
		json: vi.fn(async () => await Promise.resolve(mockData)),
	};

	beforeEach(() => {
		global.fetch = vi.fn(async () => await Promise.resolve(mockResponse));
	});

	afterEach(() => {
		vi.resetAllMocks();
	});

	test('returns the data on successful API response', async () => {
		const data = await fetchData<typeof mockData>(mockUrl);
		expect(data).toEqual(mockData);
		expect(global.fetch).toHaveBeenCalledTimes(1);
		expect(global.fetch).toHaveBeenCalledWith(mockUrl);
		expect(mockResponse.json).toHaveBeenCalledTimes(1);
	});

	test('throws an error on unsuccessful API response', async () => {
		const mockError = new Error('404: Not Found');
		global.fetch.mockImplementationOnce(async () => {
			return await Promise.resolve({
				ok: false,
				statusText: 'Not Found',
				status: 404,
				json: vi.fn(async () => await Promise.reject(mockError)),
			});
		});
		await expect(fetchData(mockUrl)).rejects.toThrow(mockError);
	});

	test('throws an error on network error', async () => {
		const mockError = new Error('Network Error');
		global.fetch.mockImplementationOnce(
			async () => await Promise.reject(mockError)
		);
		await expect(fetchData(mockUrl)).rejects.toThrow(
			getErrorMessage(mockError)
		);
	});
});
