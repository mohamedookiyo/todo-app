import Image from 'next/image';
import { Flex, useToast } from '@chakra-ui/react';

import { useTodoContext } from '@/context/todo';
import { fetchTodos } from '@/actions/todo';

const RemoveTodo = ({ todoToRemove }) => {
	// Use context
	const { state, dispatch } = useTodoContext();
	const { todos } = state;

	// Use toast
	const toast = useToast();

	const handleRemoveTodo = () => {
		const modifiedTodos = todos.filter((todo) => todo.id != todoToRemove.id);

		// Dispatch modified todos
		dispatch(fetchTodos(modifiedTodos));

		// Show toast
		toast({
			title: 'Todo has been removed.',
			status: 'success',
			duration: 5000,
			isClosable: true,
		});
	};

	return (
		<Flex ml='auto' minW='18px' cursor='pointer'>
			<Image
				src='/icon-cross.svg'
				width='18'
				height='18'
				alt='Remove todo'
				onClick={handleRemoveTodo}
			/>
		</Flex>
	);
};

export default RemoveTodo;
