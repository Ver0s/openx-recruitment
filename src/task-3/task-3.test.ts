import getMostValuableCart from './task-3';
import { describe, test, expect } from 'vitest';
import type { Cart, Product, User } from '../api-types';

describe('getMostValuableCart', () => {
	// test('should return the most valuable cart given an array of carts', () => {
	// 	const carts = [
	// 		{
	// 			id: 1,
	// 			userId: 1,
	// 			date: '2020-03-02T00:00:00.000Z',
	// 			products: [
	// 				{
	// 					productId: 1,
	// 					quantity: 4,
	// 				},
	// 				{
	// 					productId: 2,
	// 					quantity: 1,
	// 				},
	// 				{
	// 					productId: 3,
	// 					quantity: 6,
	// 				},
	// 			],
	// 			__v: 0,
	// 		},
	// 		{
	// 			id: 2,
	// 			userId: 1,
	// 			date: '2020-01-02T00:00:00.000Z',
	// 			products: [
	// 				{
	// 					productId: 2,
	// 					quantity: 4,
	// 				},
	// 				{
	// 					productId: 1,
	// 					quantity: 10,
	// 				},
	// 				{
	// 					productId: 5,
	// 					quantity: 2,
	// 				},
	// 			],
	// 			__v: 0,
	// 		},
	// 		{
	// 			id: 6,
	// 			userId: 4,
	// 			date: '2020-03-01T00:00:00.000Z',
	// 			products: [
	// 				{
	// 					productId: 10,
	// 					quantity: 2,
	// 				},
	// 				{
	// 					productId: 12,
	// 					quantity: 3,
	// 				},
	// 			],
	// 			__v: 0,
	// 		},
	// 	];
	// });
	test('should an object with initial values given an empty array of carts', () => {
		const carts: Cart[] = [];
		const products: Product[] = [];
		const users: User[] = [];
		const result = getMostValuableCart(carts, products, users);
		const expectedResult = {
			cart: {},
			value: 0,
			owner: '',
		};
		expect(result).toEqual(expectedResult);
	});
});
