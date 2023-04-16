import getCategories from './task-2';
import { describe, test, expect } from 'vitest';
import type { Product } from '../api-types';

describe('getCategories', () => {
	test('should return an empty object given an empty products array', () => {
		const products: Product[] = [];
		const result = getCategories(products);
		expect(result).toEqual({});
	});

	test('should return categories with their prices', () => {
		const products = [
			{
				id: 3,
				title: 'Mens Cotton Jacket',
				price: 55.99,
				description:
					'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
				category: "men's clothing",
				image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
				rating: {
					rate: 4.7,
					count: 500,
				},
			},
			{
				id: 5,
				title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
				price: 695,
				description:
					"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
				category: 'jewelery',
				image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
				rating: {
					rate: 4.6,
					count: 400,
				},
			},
			{
				id: 6,
				title: 'Solid Gold Petite Micropave ',
				price: 168,
				description:
					'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
				category: 'jewelery',
				image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
				rating: {
					rate: 3.9,
					count: 70,
				},
			},
			{
				id: 12,
				title: 'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
				price: 114,
				description:
					"Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
				category: 'electronics',
				image: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
				rating: {
					rate: 4.8,
					count: 400,
				},
			},
			{
				id: 13,
				title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
				price: 599,
				description:
					'21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
				category: 'electronics',
				image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
				rating: {
					rate: 2.9,
					count: 250,
				},
			},
			{
				id: 14,
				title: 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ',
				price: 999.99,
				description:
					'49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag',
				category: 'electronics',
				image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
				rating: {
					rate: 2.2,
					count: 140,
				},
			},
			{
				id: 17,
				title: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
				price: 39.99,
				description:
					"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
				category: "women's clothing",
				image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
				rating: {
					rate: 3.8,
					count: 679,
				},
			},
			{
				id: 18,
				title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
				price: 9.85,
				description:
					'95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
				category: "women's clothing",
				image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
				rating: {
					rate: 4.7,
					count: 130,
				},
			},
		];
		const properResult = {
			"men's clothing": 55.99,
			jewelery: 863,
			electronics: 1712.99,
			"women's clothing": 49.84,
		};
		const result = getCategories(products);
		expect(result).toEqual(properResult);
	});
});
