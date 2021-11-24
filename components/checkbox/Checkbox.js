import { useState, useEffect } from 'react';

import { useTodoContext } from '@/context/todo';
import { fetchTodos } from '@/actions/todo';
import styles from './Checkbox.module.css';

const Checkbox = ({ todo }) => {
	// Use context
	const { state, dispatch } = useTodoContext();
	const { todos } = state;

	// useState hook
	const [checked, setChecked] = useState(false);

	// useEffect hook
	useEffect(() => {
		if (todo.completed) {
			setChecked(true);
		}

		// Clean up effect
		return () => {
			setChecked(false);
		};
	});

	// Handle complete todo
	const handleCompleteTodo = (e) => {
		const inputCheckBox = e.target;

		// Map through todos
		todos.map((todo, i) => {
			if (todo.id === inputCheckBox.id) {
				if (inputCheckBox.checked) {
					todos[i].completed = true;
					// Fetch the updated todos
					dispatch(fetchTodos(todos));
					setChecked(true);
				} else {
					todos[i].completed = false;
					dispatch(fetchTodos(todos));
					setChecked(false);
				}
			}
		});
	};

	return (
		<>
			<input
				className={styles.sr__only}
				type='checkbox'
				id={todo.id}
				checked={checked}
				onChange={(e) => handleCompleteTodo(e)}
			/>

			<label className={styles.checkbox__label} htmlFor={todo.id}>
				<svg viewBox='0 0 100 100'>
					<path
						className={styles.path}
						fill='none'
						stroke='#000'
						strokeWidth='13'
						d='M12.1 52.1l24.4 24.4 53-53'
					/>
				</svg>
			</label>
		</>
	);
};

export default Checkbox;
