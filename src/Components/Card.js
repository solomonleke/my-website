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
  } from "@chakra-ui/react";
  import { AiOutlineAlignLeft,AiFillBulb,AiOutlineBulb } from "react-icons/ai";

export default function AboutCard({color,title, icon}) {

  return (
    <Box borderBottom={`3px solid ${color}`} bgColor={"white"} boxShadow={"3px 3px 25px 2px #C0C0C1"} p="25px" textAlign={"start"} pb={"42px"}>
    <Box fontSize={"30px"} color={`${color}`}> {icon} </Box>
    <Text fontSize={"16px"} pt={"35px"}>{title}</Text>
    </Box>
  )
}
