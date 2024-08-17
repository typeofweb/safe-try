type PromiseToTupleResult<T> = [Error, null] | [null, Awaited<T>];

export const try_ = async <T extends Promise<unknown>>(
	promise: T,
): Promise<PromiseToTupleResult<T>> => {
	try {
		const result = await promise;
		return [null, result];
	} catch (maybeError) {
		// TODO change the logic here to handle errors in a more sophisticated way maybe?
		const error = maybeError instanceof Error ? maybeError : new Error(String(maybeError));
		return [error, null];
	}
};
