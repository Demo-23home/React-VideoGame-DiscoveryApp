// Footer.tsx
import React, { Component } from 'react';
import { Box, Text, Link, Flex, Icon, Avatar, Wrap, WrapItem } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import abdo from '../assets/profile_pic_abdo.png';
import zeyad from '../assets/profile_pic_zeyad.png';

const Footer: React.FC = () => {
  return (
    <Box as="footer" py="8">
      <Flex direction="column" align="center" justify="center">
        {/* GitHub Link */}
        <Link href="https://github.com/Demo-23home/React-VideoGame-DiscoveryApp/" fontSize="sm" display="flex" alignItems="center" mb="2">
          <Icon as={FaGithub} mr="2" />
          GitHub Repository
        </Link>
        {/* Additional Links */}
        <Flex gridGap="4">
          <Link href="termsOfService.html" fontSize="sm" target='_blank'>
            Terms of Service
          </Link>
          <Link href="privacyPolicy.html" fontSize="sm" target='_blank'>
            Privacy Policy
          </Link>
        </Flex>
        
          {/* Copyright */}
        <Text fontSize="sm" mt="2">
          © {new Date().getFullYear()} GamesHub. All rights reserved.
        </Text>

          {/* Developed by */}
        <Text fontSize="sm" mt="2">
        <Wrap>
          <WrapItem>
          Developed by <Link href='https://github.com/AbdelrahmanEsmail' target='_blank'> <Avatar name='Abdelrahman Esmail' src={abdo} /> </Link> & <Link href='https://github.com/Demo-23home' target='_blank'><Avatar name='Zeyad Salama' src={zeyad} /> </Link> 
          </WrapItem>
        </Wrap>
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
