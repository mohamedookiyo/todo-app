import { useState } from 'react';
import {
	FormControl,
	Input,
	useColorModeValue,
	useToast,
} from '@chakra-ui/react';
import { nanoid } from 'nanoid';

import { useTodoContext } from '@/context/todo';
import { addTodo } from '@/actions/todo';

const AddTodo = () => {
	// useState hook
	const [inputValue, setInputValue] = useState('');

	// Use context
	const { state, dispatch } = useTodoContext();
	const { todos } = state;

	// Use toast
	const toast = useToast();

	// Clean input value
	const userInput = inputValue.trim().toLowerCase().replace(/ +/g, ' ');

	// Handle form submit
	const handleSubmit = (e) => {
		e.preventDefault();

		// Check if input value is empty
		if (!userInput.length) {
			// Show toast
			return toast({
				title: 'Form must be filled out.',
				status: 'error',
				duration: 5000,
				isClosable: true,
			});
		}

		// Check if input value is already in todo list
		const todoExists = todos.filter((todo) => todo.title === userInput);

		// If todo does not exist
		if (!todoExists.length) {
			// Add new todo to todo list
			const newTodo = { id: nanoid(), title: userInput, completed: false };

			// Dispatch new todo
			dispatch(addTodo(newTodo));
		} else {
			// Else show toast message
			toast({
				title: 'Todo already exists.',
				status: 'error',
				duration: 5000,
				isClosable: true,
			});
		}

		// Clear the input field after submit
		setInputValue('');
	};

	// Theme colors depending on theme mode
	const inputBgColor = useColorModeValue(
		'hsl(0, 0%, 98%)',
		'hsl(235, 24%, 19%)'
	);

	const inputBgColorHover = useColorModeValue(
		'hsl(236, 33%, 92%)',
		'hsl(235, 24%, 22%)'
	);

	const inputColor = useColorModeValue(
		'hsl(235, 19%, 35%)',
		'hsl(234, 39%, 85%)'
	);

	return (
		<>
			<FormControl as='form' onSubmit={handleSubmit}>
				<Input
					placeholder='Create a new todo...'
					value={inputValue}
					variant='filled'
					fontSize='1.125rem'
					bgColor={inputBgColor}
					color={inputColor}
					py='1.875rem'
					px='1.25rem'
					mb={{ base: '1.563rem', md: '2.5rem', lg: '2.5rem' }}
					border='none'
					rounded='0.625rem'
					_hover={{
						bgColor: inputBgColorHover,
					}}
					_focus={{
						bgColor: inputBgColor,
					}}
					onChange={(e) => setInputValue(e.target.value)}
				/>
			</FormControl>
		</>
	);
};

export default AddTodo;
