export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const receiveTodos = (todos) => {
	// todos is an array
	// backend sends data as an array to frontend
	// reducers' function is to convert data to an object

	return {
		type: RECEIVE_TODOS,
		todos
	};
};

export const receiveTodo = (todo) => {
	return {
		type: RECEIVE_TODO,
		todo
	};
};

export const removeTodo = (todo) => {
	return {
		type: REMOVE_TODO,
		todo
	};
};
