import type { Product } from '../api-types';

export default function getCategoriesPrices(products: Product[]) {
	const productCategories: Record<string, number> = {};
	for (const product of products) {
		if (product.category in productCategories) {
			productCategories[product.category] += product.price;
		} else {
			productCategories[product.category] = product.price;
		}
	}
	return productCategories;
}
