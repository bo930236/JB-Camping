import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Skeleton,
  Stack,
  useColorModeValue,
  Text,
  Button
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { Link as ReactLink } from 'react-router-dom';
import { GiCampingTent } from 'react-icons/gi';

const LandingScreen = () => (
  <Box maxW='8xl' mx='auto' px={{ base: '0', lg: '12' }} py={{ base: '0', lg: '40' }} minH='2xl'>
    <Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
      <Box
        width={{ lg: 'sm' }}
        transform={{ base: 'translateY(-50%)', lg: 'none' }}
        bg={{ base: useColorModeValue('orange.50', 'gray.700'), lg: 'transparent' }}
        mx={{ base: '6', md: '8', lg: '0' }}
        px={{ base: '6', md: '8', lg: '0' }}
        py={{ base: '6', md: '8', lg: '12' }}
      >
        <Stack spacing={{ base: '8', lg: '10' }}>
          <Stack spacing={{ base: '2', lg: '4' }}>
            <Flex alignItems='center'>
              <Icon as={GiCampingTent} h={12} w={12} color={useColorModeValue('orange.500', 'orange.300')} mr='1' />
              <Text fontSize='5xl' fontWeight='bold' color={useColorModeValue('orange.500', 'orange.300')}>
                JB Camping
              </Text>
            </Flex>
            <Heading size='lg' fontWeight='bold'>
              Just Buy Camping: <br />
              where adventure begins.
            </Heading>
          </Stack>
          <HStack spacing='3'>
            <Button
              as={ReactLink}
              to='/products'
              colorScheme='orange'
              fontWeight='bold'
              fontSize='xl'
              rightIcon={<FaArrowRight />}
            >
              Discover now
            </Button>
          </HStack>
        </Stack>
      </Box>
      <Flex flex='1' overflow='hidden'>
        <Image
          src='images/landing.jpg'
          alt='Lovely Image'
          fallback={<Skeleton />}
          maxH='700px'
          minW='300px'
          objectFit='cover'
          flex='1'
        />
      </Flex>
    </Stack>
  </Box>
);

export default LandingScreen;
