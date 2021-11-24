import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
	config: {
		initialColorMode: 'dark',
		useSystemColorMode: false,
	},

	fonts: {
		heading: 'Josefin Sans',
		body: 'Josefin Sans',
	},
	fontWeights: {
		normal: 400,
		bold: 700,
	},

	styles: {
		global: (props) => ({
			body: {
				bg:
					props.colorMode === 'dark'
						? 'hsl(235, 21%, 11%)'
						: 'hsl(236, 33%, 92%)',

				overflowY: 'scroll',
			},
		}),
	},
});

export default theme;
