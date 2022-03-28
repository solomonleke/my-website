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
    Tabs, TabList, TabPanels, Tab, TabPanel, useColorModeValue
  } from "@chakra-ui/react";
import { AiFillMail } from 'react-icons/ai';
import { Fade } from 'react-reveal';

export default function ContactCard({icon, title}) {
  const boxColor = useColorModeValue("background", "teal")
  const iconColor = useColorModeValue( "blue.blue500" , "white")
  return (
    <Fade bottom duration={3000}>
    <SimpleGrid columns={{base: 2, md: 2}} maxW="sm" alignItems={"center"} spacing="0px" mb="20px">
    <Box w="100px" h="100px" bgColor={boxColor}>
        <Center color={iconColor} fontSize="30px" mt="35px">
           {icon}
        </Center>
    </Box>

    <Text  color={iconColor} fontSize={"15px"}>{title}</Text>
  </SimpleGrid>
    </Fade>
   
  )
}
