import type { Cart, Product, User } from '../api-types';

type CartProductType = { productId: number; quantity: number };

function getCartValue(
	cartProducts: CartProductType[],
	productPrices: Record<number, number>
) {
	return cartProducts.reduce((total, currentProduct) => {
		const productPrice = productPrices[currentProduct.productId];
		return total + productPrice * currentProduct.quantity;
	}, 0);
}

// This is a seperate function to avoid looping through all products in every
// cart loop which would make it O(n*k) time complexity where `n` is length of carts array
// and `k` is length of products array.
function getProductsPrices(products: Product[]) {
	const productPrices: Record<number, number> = {};

	for (const product of products) {
		productPrices[product.id] = product.price;
	}

	return productPrices;
}

function getUsernameById(userId: number, users: User[]) {
	const user = users.find((user) => user.id === userId);
	if (user === undefined) return '';

	return `${user.name.firstname} ${user.name.lastname}`;
}

export default function getMostValuableCart(
	carts: Cart[],
	products: Product[],
	users: User[]
) {
	let maxCartValue = 0;
	let mostValueableCart: Cart | Record<string, never> = {};
	const productPrices = getProductsPrices(products);

	for (const cart of carts) {
		const value = getCartValue(cart.products, productPrices);
		if (value > maxCartValue) {
			maxCartValue = value;
			mostValueableCart = cart;
		}
	}

	const owner = getUsernameById(mostValueableCart.id, users);

	return { cart: mostValueableCart, value: maxCartValue, owner };
}
