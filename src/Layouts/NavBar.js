import React, { useState } from 'react'
import {
  Avatar,
  Box,
  Button,
  Center,
  HStack,
  Image,
  LinkBox,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import LinkMenu from '../Components/LinkMenu';
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';

export default function NavBar({ home = false, about=false, service=false, skill=false, education=false, experience=false, work=false, contact=false,   }) {

  const [Light, setLight] = useState(false);


  const { toggleColorMode } = useColorMode()

  const bg = useColorModeValue("background", "gray.gray400")
  


  const toggle = () => {
    toggleColorMode()
    setLight(!Light)
  }
  return (

    <Box bgColor={bg} p="14px" w="300px" textAlign={"center"} overflowY={"scroll"} pos={"fixed"} fontFamily={"body"} h={"100vh"} >
      <Button onClick={toggle} bg="transparent" _hover={{ bg: "transparent" }} cursor={"pointer"}>{Light == false ? (<> Switch to Dark mode <Text px="10px"><BsFillMoonStarsFill /> </Text></>) : (<> Switch to Light mode <Text px="10px"><BsSunFill /></Text>  </>)}</Button>
      <Center mt={"32px"}>
        <Wrap>
          <WrapItem>
            <Avatar size='2xl' name='Solomon Adeleke' src='avater.jpeg.png' bgColor="white" />{' '}
          </WrapItem>
        </Wrap>
      </Center>
      <Text mt={"28px"} fontSize={"20px"} fontFamily={"heading"}>
        Solomon Adeleke
      </Text>
      <Text mt={"3px"} fontSize={"15px"} fontFamily={"body"}>
        Software Engineer
      </Text>

      <Stack mt={"32px"} spacing={"15px"}>
        <LinkMenu active={home} link="#Home" title="Home" />
        <LinkMenu active={about} link="#About" title="About" />
        <LinkMenu active={service} link="#Services" title="Services" />
        <LinkMenu active={skill} link="#Skills" title="Skills" />
        <LinkMenu active={education} link="#Education" title="Education" />
        <LinkMenu active={experience} link="#Experience" title="Experience" />
        <LinkMenu active={work} link="#Work" title="Work" />
        <LinkMenu active={contact} link="#Contact" title="Contact" />

      </Stack>

      <Text fontSize={"12px"} mt={"32px"}>© Copyright ©2022 All rights reserved |</Text>

      <Text fontSize={"12px"} mt={"12px"}>This Portfolio is made with <i className="fa-solid fa-heart" /> by <Box as={"span"} color={"blue.blue500"}>solomonleke</Box> </Text>

      <Center mt={"12px"} pb={"62px"}>
        <HStack spacing={"12px"} cursor={"pointer"}>
          <LinkBox as={"a"} href="https://www.linkedin.com/in/solomon-adeleke-740426170/" target={"blank"}> <FaLinkedinIn /></LinkBox>
          <LinkBox as={"a"} href="https://github.com/solomonleke" target={"blank"}> <FaGithub /></LinkBox>
          <LinkBox as={"a"} href="https://twitter.com/moyin_s" target={"blank"}><FaTwitter /></LinkBox>



        </HStack>

      </Center>


    </Box>




  )
}
