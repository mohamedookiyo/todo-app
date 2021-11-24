import Head from 'next/head';
import { Flex, Text } from '@chakra-ui/react';

import { useTodoContext } from '@/context/todo';
import Header from '@/components/Header';
import AddTodo from '@/components/todo/AddTodo';
import TodoStatus from '@/components/todo/TodoStatus';

export default function Home() {
	// Use context
	const { state } = useTodoContext();
	const { todos } = state;

	return (
		<>
			<Head>
				<title>Todo</title>
				<meta name='description' content='Todo app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />

			<Flex
				direction='column'
				maxW='37.5rem'
				mx='auto'
				mt={{ base: '-6.875rem', md: '-9.375rem', lg: '-9.375rem' }}
				px='1.25rem'
			>
				<AddTodo />
				{todos.length > 0 ? (
					<TodoStatus />
				) : (
					<Text color='gray.600' mt={24}>
						There are no todos available yet! Add some using the above form.
					</Text>
				)}
			</Flex>
		</>
	);
}
