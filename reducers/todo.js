import { FETCH_TODOS, ADD_TODO } from '@/actions/todo';

// Todos reducer
export const todosReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case FETCH_TODOS:
			const { todos } = payload;
			return {
				...state,
				todos: todos,
			};

		case ADD_TODO:
			const { todo } = payload;

			return {
				...state,
				todos: state.todos.concat(todo),
			};

		default:
			return state;
	}
};
