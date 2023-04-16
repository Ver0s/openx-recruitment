import './style.css';

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
