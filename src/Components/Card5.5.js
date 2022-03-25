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

export default function EmpCard({title,description, color, icon, date}) {
  const borderColor = useColorModeValue("#f2f3f7", "#606060")
  return (
    <HStack mt={{base: "20px", md: "-5px"}}>
    <Box w="10%" display={{base: "none", md: "block"}} cursor="pointer">
      <Stack >
        <Box _hover={{bgColor: "green"}} transition="0.5s" bg={`${color}`} border={`4px solid ${borderColor}`} borderRadius="100%" width={"50px"} h={"50px"}><Center color="white" pt="10px" fontSize={"20"}>{icon}</Center></Box>
      
      </Stack>
    </Box>
   
  </HStack>
  )
}
