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
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { GiTechnoHeart } from 'react-icons/gi';
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
            <Icon as={GiTechnoHeart} h={10} w={10} color='orange.400' />
            <Text fontSize='2xl' fontWeight='extrabold'>
              Just Buy
            </Text>
          </Flex>
          <Text color='muted'>"Enjoy a worry-free shopping experience with Just Buy."</Text>
        </Stack>
        <Stack direction={{ base: 'column-reverse', md: 'column', lg: 'row' }} spacing={{ base: '12', md: '8' }}>
          <Stack direction='row' spacing='8'>
            <Stack spacing='4' minW='36' flex='1'>
              <Text fontSize='sm' fontWeight='semibold' color='subtle'>
                Product
              </Text>
              <Stack spacing='3' shouldWrapChildren>
                <Button variant='link'>How it works</Button>
                <Button variant='link'>Pricing</Button>
              </Stack>
            </Stack>
            <Stack spacing='4' minW='36' flex='1'>
              <Text fontSize='sm' fontWeight='semibold' color='subtle'>
                Legal
              </Text>
              <Stack spacing='3' shouldWrapChildren>
                <Button variant='link'>Privacy</Button>
                <Button variant='link'>Terms</Button>
                <Button variant='link'>License</Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider />
      <Stack pt='8' pb='12' justify='space-between' direction={{ base: 'column-reverse', md: 'row' }} align='center'>
        <Text fontSize='sm' color='subtle'>
          &copy; {new Date().getFullYear()} Just Buy, Inc. All rights reserved.
        </Text>
        <ButtonGroup variant='ghost'>
          <IconButton as='a' href='#' aria-label='LinkedIn' icon={<FaLinkedin fontSize='1.25rem' />} />
          <IconButton
            as='a'
            href='https://github.com/bo930236/Just-Buy'
            aria-label='GitHub'
            icon={<FaGithub fontSize='1.25rem' />}
          />
          <IconButton as='a' href='#' aria-label='Twitter' icon={<FaTwitter fontSize='1.25rem' />} />
        </ButtonGroup>
      </Stack>
    </Container>
  </Box>
);

export default Footer;
