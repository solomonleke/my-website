import React from 'react'
import {
  Avatar,
  Box,
  Center,
  HStack,
  Image,
  LinkBox,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import LinkMenu from '../Components/LinkMenu';
import { FaLinkedinIn,FaGithub,FaTwitter} from "react-icons/fa";

export default function NavBar() {
  return (
    <>
    <Box bgColor={"background"} display={{base: "none", md: "block"}} p="14px" w="300px" textAlign={"center"} overflowY={"scroll"} pos={"fixed"} left={"150px"} fontFamily={"body"} h={"100vh"}>
    <Center mt={"32px"}>
      <Wrap>
      <WrapItem>
        <Avatar size='2xl' name='Solomon Adeleke' src='avater.jpeg' />{' '}
      </WrapItem>
    </Wrap>
    </Center>
      <Text mt={"28px"} fontSize={"20px"}  fontFamily={"heading"}>
          Solomon Adeleke
      </Text>
      <Text mt={"3px"} fontSize={"15px"}  fontFamily={"body"}>
         Software Engineer
      </Text>

      <Stack mt={"32px"} spacing={"15px"}>
          <LinkMenu link="google.com" title= "Home"/>
          <LinkMenu link="google.com" title= "About"/>
          <LinkMenu link="google.com" title= "Services"/>
          <LinkMenu link="google.com" title= "Skills"/>
          <LinkMenu link="google.com" title= "Education"/>
          <LinkMenu link="google.com" title= "Experience"/>
          <LinkMenu link="google.com" title= "Work"/>
          <LinkMenu link="google.com" title= "Contact"/>
          
      </Stack>

      <Text fontSize={"12px"} mt={"32px"}>© Copyright ©2022 All rights reserved |</Text>

      <Text fontSize={"12px"}  mt={"12px"}>This Portfolio is made with <i className="fa-solid fa-heart" /> by <Box as={"span"} color={"red.red500"}>solomonleke</Box> </Text>

    <Center mt={"12px"} pb={"62px"}>
     <HStack spacing={"12px"} cursor={"pointer"}>
     <LinkBox as={"a"} href="https://www.linkedin.com/in/solomon-adeleke-740426170/" target={"blank"}> <FaLinkedinIn/></LinkBox>
     <LinkBox as={"a"} href="https://github.com/solomonleke" target={"blank"}> <FaGithub/></LinkBox>
     <LinkBox as={"a"} href="https://twitter.com/moyin_s" target={"blank"}><FaTwitter/></LinkBox>
     
     
      
      </HStack> 

    </Center>
     

    </Box>

    
    </>
    
  )
}
