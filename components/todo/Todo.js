import { Flex, Text, useColorModeValue } from '@chakra-ui/react';

import Checkbox from '../checkbox/Checkbox';
import RemoveTodo from './RemoveTodo';

const Todo = ({ todo }) => {
	// Theme colors depending on theme mode
	const todoBgColor = useColorModeValue(
		'hsl(0, 0%, 98%)',
		'hsl(235, 24%, 19%)'
	);

	const todoColor = useColorModeValue(
		'hsl(233, 14%, 35%)',
		'hsl(234, 39%, 85%)'
	);

	const todoColorHover = useColorModeValue(
		'hsl(237, 14%, 26%)',
		'hsl(236, 33%, 92%)'
	);

	return (
		<Flex
			align='center'
			bgColor={todoBgColor}
			position='relative'
			px='1.563rem'
			py='1.25rem'
			userSelect='none'
		>
			<Flex as='label' align='center' cursor='pointer'>
				<Checkbox todo={todo} />

				<Text
					fontSize='1.125rem'
					color={todoColor}
					mx='1.563rem'
					_hover={{
						color: todoColorHover,
					}}
				>
					{todo.title.charAt(0).toUpperCase() + todo.title.slice(1)}
				</Text>
			</Flex>

			<RemoveTodo todoToRemove={todo} />
		</Flex>
	);
};

export default Todo;
