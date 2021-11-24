import { Button, Flex, Text, useColorModeValue } from '@chakra-ui/react';

const TodoStatusMobile = ({
	todosLeft,
	getAllTodos,
	getActiveTodos,
	getCompletedTodos,
	clearTodos,
}) => {
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
			<Flex
				align='center'
				justify='space-between'
				bgColor={todosStatusBgColor}
				px='1.563rem'
				py='1.25rem'
				mb='1.25rem'
				borderTopWidth='1px'
				borderBottomRadius='0.625rem'
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

			<Flex
				justify='center'
				bgColor={todosStatusBgColor}
				p='1.25rem'
				rounded='0.625rem'
				marginBottom='8rem'
			>
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
			</Flex>
		</>
	);
};

export default TodoStatusMobile;
