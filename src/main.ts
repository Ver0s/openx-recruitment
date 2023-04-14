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
