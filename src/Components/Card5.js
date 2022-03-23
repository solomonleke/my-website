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
    Progress,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from "@chakra-ui/react";
import { Fade, Roll } from 'react-reveal';

export default function ExperienceCard({title,description, color, icon, date}) {
  return (
   
    <HStack mt={{base: "20px", md: "-5px"}}>

    <Box w="10%" display={{base: "none", md: "block"}} cursor="pointer">
      <Stack >
      <Roll bottom duration={2500}>
      <Box _hover={{bgColor: "green", transform: "rotateY(180deg)"}} transition="0.5s" bg={`${color}`} border={"4px solid #f2f3f7"} borderRadius="100%" width={"50px"} h={"50px"}><Center  transition="2s" color="white" pt="10px" fontSize={"20"}>{icon}</Center></Box>
      </Roll>
        <Box left="23px" top={"-2"} pos={"relative"}  borderLeft={"6px dotted #f2f3f7"} width={"1px"} h={"160px"}></Box>
      </Stack>
    </Box>
    <Fade right duration={2500}>
    <Box w="100%" bg={"#f2f3f7"} p="25px">
      <Text fontWeight={"700"} fontSize="20px">{title} <Box pl={"5px"} fontWeight={"bold"} fontSize="16px" color={"#858383"} as="span">{date}</Box></Text>
      <Text mt={"30px"}>{description}
      </Text>
    </Box>
    </Fade>
   </HStack>
   
   
  )
}
