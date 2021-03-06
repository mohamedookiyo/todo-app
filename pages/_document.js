import { ColorModeScript } from '@chakra-ui/react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import theme from '@/styles/theme';

class MyDocument extends Document {
	render() {
		return (
			<Html land='eng'>
				<Head>
					<link
						href='https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<ColorModeScript initialColorMode={theme.config.initialColorMode} />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
export default MyDocument;
