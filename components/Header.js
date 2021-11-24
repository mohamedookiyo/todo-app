import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
	Box,
	Flex,
	Heading,
	IconButton,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';

const Header = () => {
	const { toggleColorMode } = useColorMode();

	const headerBgDesktop = useColorModeValue(
		'/bg-desktop-light.jpg',
		'/bg-desktop-dark.jpg'
	);

	const headerBgMobile = useColorModeValue(
		'/bg-mobile-light.jpg',
		'/bg-mobile-dark.jpg'
	);

	const toggleIcon = useColorModeValue(
		<MoonIcon w='1.625rem' h='1.625rem' />,
		<SunIcon w='1.625rem' h='1.625rem' />
	);

	return (
		<>
			<Box
				as='header'
				maxW={{ base: '100%', md: '90rem', lg: '90rem' }}
				h={{ base: '12.5rem', md: '18.75rem', lg: '18.75rem' }}
				mx='auto'
				pt={{ base: '1.875rem', md: '4.375rem', lg: '4.375rem' }}
				bgImage={{
					base: headerBgMobile,
					md: headerBgDesktop,
					lg: headerBgDesktop,
				}}
				bgSize='cover'
			>
				<Flex
					maxW='37.5rem'
					mx='auto'
					align='center'
					justify='space-between'
					px='1.25rem'
				>
					<Heading
						as='h1'
						fontSize={{ base: '1.5rem', md: '2rem', lg: '2rem' }}
						color='white'
						textTransform='uppercase'
						letterSpacing={{ base: '0.375rem', md: '0.75rem', lg: '0.75rem' }}
					>
						Todo
					</Heading>
					<IconButton
						aria-label='Change theme'
						icon={toggleIcon}
						color='white'
						variant='unstyled'
						onClick={toggleColorMode}
					/>
				</Flex>
			</Box>
		</>
	);
};

export default Header;
