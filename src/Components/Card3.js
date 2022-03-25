import React from 'react'
import {
    Avatar,
    Box,
    Button,
    Center,
    Container,
    HStack,
    Image,
    LinkBox,
    SimpleGrid,
    Spacer,
    Stack,
    Text,
    Wrap,
    WrapItem,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    background,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { AiOutlineAlignLeft,AiFillBulb,AiOutlineBulb,AiOutlineWoman,AiOutlineDingding ,AiOutlineVerified } from "react-icons/ai";
import { Fade } from 'react-reveal';

export default function ServiceCard({color,title,description,icon}) {
  const BoxColor = useColorModeValue("white", "gray.gray300")
  const boxShadow = useColorModeValue("#C0C0C1", "black")
  const colorT = useColorModeValue( "black" , "white")
  return (
    <Fade bottom duration={2200}>
    <Box borderBottom={`3px solid ${color}`} bgColor={BoxColor} boxShadow={`3px 3px 25px 2px ${boxShadow}` } p="25px" textAlign={"start"} pb={"32px"} mb={"32px"} textAlign={"center"}>
    <Center mt={"-73px"}>
    <Box h={"80px"} w={"80px"} fontSize={"30px"} bgColor={`${color}`}  clipPath="polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)"> <Center fontSize={"35px"} color={"white"} pt={"23px"}>{icon}</Center> </Box>
    </Center>
  
    
    <Text fontSize={"16px"} pt={"35px"} color={colorT} fontWeight={"700"}>{title}</Text>
    <Text fontSize={"15px"} pt={"30px"} color={colorT}>{description}</Text>
    </Box>
    </Fade>
   
  )
}
