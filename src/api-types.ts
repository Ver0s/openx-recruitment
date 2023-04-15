export type Product = {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: { rate: number; count: number };
};

type UserAddress = {
	geolocation: {
		lat: string;
		long: string;
	};
	city: string;
	street: string;
	number: number;
	zipcode: string;
};

export type User = {
	address: UserAddress;
	id: number;
	email: string;
	username: string;
	password: string;
	name: {
		firstname: string;
		lastname: string;
	};
	phone: string;
	__v: number;
};

type CartProduct = {
	productId: number;
	quantity: number;
};

export type Cart = {
	id: number;
	userId: number;
	date: string;
	products: CartProduct[];
	__v: number;
};
