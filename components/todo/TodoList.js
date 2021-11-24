import { Stack, StackDivider } from '@chakra-ui/react';
import Todo from './Todo';

const TodoList = ({ todos }) => {
	return (
		<Stack
			spacing={0}
			direction='column'
			divider={<StackDivider />}
			borderTopRadius='0.625rem'
			overflow='hidden'
			wordBreak='break-all'
		>
			{todos?.map((todo) => (
				<Todo key={todo.id} todo={todo} />
			))}
		</Stack>
	);
};

export default TodoList;
