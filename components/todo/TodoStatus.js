import { useState, useEffect } from 'react';

import {
	Button,
	Flex,
	HStack,
	Text,
	useColorModeValue,
	useToast,
} from '@chakra-ui/react';

import { useTodoContext } from '@/context/todo';
import TodoList from './TodoList';
import TodoStatusMobile from './TodoStatusMobile';

const TodoStatus = () => {
	// Use context
	const { state } = useTodoContext();
	const { todos } = state;

	// useState hook
	const [localTodos, setLocalTodos] = useState(todos);

	// useEffect hook
	useEffect(() => {
		setLocalTodos(todos);
	}, [todos]);

	// useToast hook
	const toast = useToast();

	// Todos left
	const todosLeft = todos.filter((todo) => !todo.completed);

	// All todos
	const getAllTodos = () => setLocalTodos(todos);

	// Todos active
	const getActiveTodos = () => {
		const activeTodos = todos.filter((todo) => !todo.completed);

		if (activeTodos.length) {
			setLocalTodos(activeTodos);
		} else {
			// Show toast
			toast({
				title: 'No active todos yet.',
				status: 'info',
				duration: 5000,
				isClosable: true,
			});
			// Set local todos to original todos
			setLocalTodos(todos);
		}
	};

	// Todos completed
	const getCompletedTodos = () => {
		const completedTodos = todos.filter((todo) => todo.completed);

		if (completedTodos.length) {
			setLocalTodos(completedTodos);
		} else {
			// Show toast
			toast({
				title: 'No completed todos yet.',
				status: 'info',
				duration: 5000,
				isClosable: true,
			});
			// Set local todos to original todos
			setLocalTodos(todos);
		}
	};

	// Clear todos
	const clearTodos = () => {
		const completedTodos = todos.filter((todo) => todo.completed);

		// Check if there are todos to clear
		if (completedTodos.length) {
			const unchangedTodos = todos.map((todo) => {
				todo.completed = false;

				return todo;
			});

			setLocalTodos(unchangedTodos);
		} else {
			// Show toast
			toast({
				title: 'No todos to clear yet.',
				status: 'info',
				duration: 5000,
				isClosable: true,
			});
		}
	};

	// Theme colors depending on theme mode
	const todosStatusBgColor = useColorModeValue(
		'hsl(0, 0%, 98%)',
		'hsl(235, 24%, 19%)'
	);

	const todosStatusColor = useColorModeValue(
		'hsl(236, 9%, 61%)',
		'hsl(234, 11%, 52%)'
	);

	const todosStatusHover = useColorModeValue(
		'hsl(235, 19%, 35%)',
		'hsl(236, 33%, 92%)'
	);

	return (
		<>
			<TodoList todos={localTodos} />

			<Flex
				d={{ base: 'none', md: 'none', lg: 'flex' }}
				px='1.563rem'
				py='1.25rem'
				mb='5rem'
				align='center'
				justify='space-between'
				bgColor={todosStatusBgColor}
				borderBottomRadius='0.625rem'
				borderTopWidth='1px'
			>
				<Text
					fontSize='0.875rem'
					color={todosStatusColor}
					_hover={{ color: todosStatusHover }}
				>
					{todosLeft.length === 1
						? `${todosLeft.length} item left`
						: `${todosLeft.length} items left`}
				</Text>
				<HStack spacing={0}>
					<Button
						fontSize='0.875rem'
						fontWeight='bold'
						variant='ghost'
						color={todosStatusColor}
						_hover={{ color: todosStatusHover }}
						_focus={{ color: 'hsl(220, 98%, 61%)' }}
						onClick={getAllTodos}
					>
						All
					</Button>
					<Button
						fontSize='0.875rem'
						variant='ghost'
						color={todosStatusColor}
						_hover={{ color: todosStatusHover }}
						_focus={{ color: 'hsl(220, 98%, 61%)' }}
						onClick={getActiveTodos}
					>
						Active
					</Button>
					<Button
						fontSize='0.875rem'
						variant='ghost'
						color={todosStatusColor}
						_hover={{ color: todosStatusHover }}
						_focus={{ color: 'hsl(220, 98%, 61%)' }}
						onClick={getCompletedTodos}
					>
						Completed
					</Button>
				</HStack>
				<Button
					fontSize='0.875rem'
					fontWeight='normal'
					variant='ghost'
					color={todosStatusColor}
					_hover={{ color: todosStatusHover }}
					onClick={clearTodos}
				>
					Clear Completed
				</Button>
			</Flex>

			<Flex d={{ base: 'flex', md: 'flex', lg: 'none' }} direction='column'>
				<TodoStatusMobile
					todosLeft={todosLeft}
					getAllTodos={getAllTodos}
					getActiveTodos={getActiveTodos}
					getCompletedTodos={getCompletedTodos}
					clearTodos={clearTodos}
				/>
			</Flex>
		</>
	);
};

export default TodoStatus;
