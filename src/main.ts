import './reset.css';
import './style.css';
import fetchData from './task-1/task-1';
import type { Product, User, Cart } from './api-types';
import getCategoriesPrices from './task-2/task-2';
import getMostValuableCart from './task-3/task-3';
import getFurthestUsers from './task-4/task-4';

let users: User[] = [];
let products: Product[] = [];
let carts: Cart[] = [];
let dataFetched = false;

// I know this caching is not the best but at the same time I don't really need anything
// more complicated than that. I just wanted something so that I don't fetch the data with
// every button click.
function reportCacheStatus() {
	const cacheStatus = document.querySelector<HTMLDivElement>('#cache-status');
	if (!dataFetched) {
		cacheStatus.textContent = 'API data is not cached';
	} else {
		cacheStatus.textContent = 'API data is cached';
	}
}

async function fetchDataAndSetFlag() {
	dataFetched = false;
	reportCacheStatus();
	const loadingText = document.querySelector<HTMLDivElement>('#loading');
	if (loadingText !== null) {
		loadingText.textContent = 'Loading data...';
	}

	users = await fetchData<User[]>('https://fakestoreapi.com/users');
	products = await fetchData<Product[]>('https://fakestoreapi.com/products');
	carts = await fetchData<Cart[]>(
		'https://fakestoreapi.com/carts/?startdate=2000-01-01&enddate=2023-04-07'
	);

	dataFetched = true;
	reportCacheStatus();
	if (loadingText !== null) {
		loadingText.textContent = '';
	}
}

function getErrorMessage(error: unknown) {
	if (error instanceof Error) return error.message;
	return String(error);
}

async function getData<T>(url: string) {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`${response.status}: ${response.statusText}`);
		}
		const data = (await response.json()) as T;
		return data;
	} catch (err) {
		throw new Error(getErrorMessage(err));
	}
}

const task1Btn = document.querySelector<HTMLButtonElement>('#task-1');
task1Btn?.addEventListener('click', () => {
	void taskManager('task1');
});

const task2Btn = document.querySelector<HTMLButtonElement>('#task-2');
task2Btn?.addEventListener('click', () => {
	void taskManager('task2');
});

const task3Btn = document.querySelector<HTMLButtonElement>('#task-3');
task3Btn?.addEventListener('click', () => {
	void taskManager('task3');
});

const task4Btn = document.querySelector<HTMLButtonElement>('#task-4');
task4Btn?.addEventListener('click', () => {
	void taskManager('task4');
});

const refetchBtn = document.querySelector<HTMLButtonElement>('#refetch');
refetchBtn?.addEventListener('click', () => {
	void fetchDataAndSetFlag();
});
