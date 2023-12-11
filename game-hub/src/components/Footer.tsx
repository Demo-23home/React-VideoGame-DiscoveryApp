// Footer.tsx
import React, { Component } from "react";
import {
  Box,
  Text,
  Link as Links,
  Flex,
  Icon,
  Avatar,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import abdo from "../assets/profile_pic_abdo.png";
import zeyad from "../assets/profile_pic_zeyad.png";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <Box as="footer" py="8">
      <Flex direction="column" align="center" justify="center">
        {/* GitHub Link */}
        <Links
          href="https://github.com/Demo-23home/React-VideoGame-DiscoveryApp/"
          fontSize="sm"
          display="flex"
          alignItems="center"
          mb="2"
        >
          <Icon as={FaGithub} mr="2" />
          GitHub Repository
        </Links>
        {/* Additional Links */}
        <Flex gridGap="4">
          <Link to="/terms">Terms of Service</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </Flex>

        {/* Copyright */}
        <Text fontSize="sm" mt="2">
          © {new Date().getFullYear()} GamesHub. All rights reserved.
        </Text>

        {/* Developed by */}
        <Text fontSize="sm" mt="2">
          <Wrap>
            <WrapItem>
              Developed by{" "}
              <Links
                href="https://github.com/AbdelrahmanEsmail"
                target="_blank"
              >
                {" "}
                <Avatar name="Abdelrahman Esmail" src={abdo} />{" "}
              </Links>{" "}
              &{" "}
              <Links href="https://github.com/Demo-23home" target="_blank">
                <Avatar name="Zeyad Salama" src={zeyad} />{" "}
              </Links>
            </WrapItem>
          </Wrap>
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
