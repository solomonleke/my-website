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
    Tabs, TabList, TabPanels, Tab, TabPanel
  } from "@chakra-ui/react";
import { AiFillMail } from 'react-icons/ai';
import { Fade } from 'react-reveal';

export default function ContactCard({icon, title}) {
  return (
    <Fade bottom duration={3000}>
    <HStack spacing="30px" mb="20px">
    <Box w="100px" h="100px" bgColor="background">
        <Center color= "blue.blue500" fontSize="30px" mt="35px">
           {icon}
        </Center>
    </Box>

    <Text  color= "blue.blue500" fontSize={"15px"}>{title}</Text>
  </HStack>
    </Fade>
   
  )
}
