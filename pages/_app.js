import { ChakraProvider } from '@chakra-ui/react';

import theme from '@/styles/theme';
import { TodoProvider } from '@/context/todo';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<TodoProvider>
				<Component {...pageProps} />
			</TodoProvider>
		</ChakraProvider>
	);
}

export default MyApp;
