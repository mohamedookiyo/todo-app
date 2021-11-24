import { createContext, useContext, useReducer } from 'react';
import { todosReducer } from '@/reducers/todo';

// Create todo context
const TodoContext = createContext();

// Initial state
const intialState = { todos: [], loading: false };

// Todo provider
export function TodoProvider({ children }) {
	// useRducer hook
	const [state, dispatch] = useReducer(todosReducer, intialState);

	const value = { state, dispatch };

	return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

// useContext hook
export function useTodoContext() {
	return useContext(TodoContext);
}
