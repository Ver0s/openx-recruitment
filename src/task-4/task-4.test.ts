import getFurthestUsers from './task-4';
import { describe, test, expect } from 'vitest';

describe('getFurthestUsers', () => {
	test('should return the furthest two users when given an array of users', () => {
		const users = [
			{
				address: {
					geolocation: { lat: '-37.3159', long: '81.1496' },
				},
			},
			{
				address: {
					geolocation: { lat: '10.3456', long: '20.6419' },
				},
			},
			{
				address: {
					geolocation: { lat: '50.3467', long: '-20.1310' },
				},
			},
		];
		const furthestUsers = getFurthestUsers(users);
		expect(furthestUsers[0]).toEqual(users[0]);
		expect(furthestUsers[1]).toEqual(users[2]);
	});

	test('should return the first two users when given an array with only two users', () => {
		const users = [
			{ address: { geolocation: { lat: '40.7128', long: '-74.0060' } } },
			{ address: { geolocation: { lat: '41.8781', long: '-87.6298' } } },
		];
		const furthestUsers = getFurthestUsers(users);
		expect(furthestUsers[0]).toEqual(users[0]);
		expect(furthestUsers[1]).toEqual(users[1]);
	});

	test('should return null when given an empty array', () => {
		const furthestUsers = getFurthestUsers([]);
		expect(furthestUsers).toBeNull();
	});

	test('should return null when given an array with only one user', () => {
		const furthestUsers = getFurthestUsers([]);
		expect(furthestUsers).toBeNull();
	});
});
