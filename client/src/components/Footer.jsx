import {
  Box,
  Flex,
  Icon,
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import * as React from 'react';
import { FaGithub } from 'react-icons/fa';
import { GiCampingTent } from 'react-icons/gi';
// import { Logo } from './Logo';

const Footer = () => (
  <Box w='100%' bg={useColorModeValue('gray.100', 'gray.900')}>
    <Container as='footer' role='contentinfo' maxW='7xl'>
      <Stack
        spacing='8'
        direction={{ base: 'column', md: 'row' }}
        justify='space-between'
        py={{ base: '12', md: '16' }}
      >
        <Stack spacing={{ base: '6', md: '8' }} align='start'>
          <Flex alignItems='center'>
            <Icon as={GiCampingTent} h={10} w={10} color='orange.400'mr='1' />
            <Text fontSize='2xl' fontWeight='extrabold'>
              JB Camping
            </Text>
          </Flex>
          <Text color='muted'>"Get everything you need for your adventure."</Text>
        </Stack>
        <Stack
          direction={{ base: 'column-reverse', md: 'column', lg: 'row' }}
          spacing={{ base: '12', md: '8' }}
          justifyContent='space-between'
          alignItems='center'
        >
          <Stack direction='row' spacing='8'>
            <Stack spacing='4' minW='36' flex='1'>
              <Text fontSize='sm' fontWeight='semibold' color='subtle'>
                ABOUT US
              </Text>
              <Stack spacing='3' shouldWrapChildren>
                <Button variant='link'>Brand Concept</Button>
                <Button variant='link'>Brand Story</Button>
                <Button variant='link'>Join Us</Button>
              </Stack>
            </Stack>
            <Stack spacing='4' minW='36' flex='1'>
              <Text fontSize='sm' fontWeight='semibold' color='subtle'>
                Contact:
              </Text>
              <Stack spacing='3' shouldWrapChildren>
                <Button variant='link'>Service Hotline</Button>
                <Button variant='link'>Service Email</Button>
                <Button variant='link'>Store Information</Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider />
      <Stack pt='2' pb='2' justify='space-between' direction={{ base: 'column-reverse', md: 'row' }} align='center'>
        <Text fontSize='sm' color='subtle'>
          &copy; {new Date().getFullYear()} Just Buy, Inc. All rights reserved.
        </Text>
        <ButtonGroup variant='ghost'>
          <IconButton
            as='a'
            href='https://github.com/bo930236/Just-Buy'
            aria-label='GitHub'
            icon={<FaGithub fontSize='2rem' />}
          />
        </ButtonGroup>
      </Stack>
    </Container>
  </Box>
);

export default Footer;
