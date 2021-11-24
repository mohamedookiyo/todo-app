// Todo actions
export const FETCH_TODOS = 'FETCH_TODOS';
export const fetchTodos = (todos) => ({
	type: FETCH_TODOS,
	payload: { todos },
});

export const ADD_TODO = 'ADD_TODO';
export const addTodo = (todo) => ({
	type: ADD_TODO,
	payload: { todo },
});
