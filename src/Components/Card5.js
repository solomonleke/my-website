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
    useColorModeValue,
  } from "@chakra-ui/react";
import { Fade, Roll } from 'react-reveal';

export default function ExperienceCard({title,description, color, icon, date}) {

  const borderColor = useColorModeValue("#f2f3f7", "#606060")
  const dateT = useColorModeValue( "#858383" , "gray.gray200")
  return (
   
    <HStack mt={{base: "20px", md: "-5px"}}>

    <Box w="10%" display={{base: "none", md: "block"}} cursor="pointer">
      <Stack >
      <Roll bottom duration={2500}>
      <Box _hover={{bgColor: "green", transform: "rotateY(180deg)"}} transition="0.5s" bg={`${color}`} border={`4px solid ${borderColor}`} borderRadius="100%" width={"50px"} h={"50px"}><Center  transition="2s" color="white" pt="10px" fontSize={"20"}>{icon}</Center></Box>
      </Roll>
        <Box left="23px" top={"-2"} pos={"relative"}  borderLeft={`6px dotted ${borderColor}`} width={"1px"} h={"160px"}></Box>
      </Stack>
    </Box>
    <Fade right duration={2500}>
    <Box w="100%" bg={borderColor} p="25px">
    <HStack flexWrap={"wrap"} textAlign={{base: "center", md: "left"}} flexDirection={{base: "column", md: "row"}}>
    <Text fontWeight={"700"} fontSize="20px">{title}</Text>
    <Spacer/>
    <Text pl={"5px"}  fontWeight={"bold"} fontSize="16px" color={dateT} as="span">{date}</Text>
    </HStack>

      <Text mt={"30px"}>{description}
      </Text>
    </Box>
    </Fade>
   </HStack>
   
   
  )
}
