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
  import { AiOutlineMinus,AiOutlinePlus } from "react-icons/ai";

export default function EducationCard({title,description}) {
  return (
    <AccordionItem my={"10px"}>
    {({ isExpanded }) => (
        <>
            <h2>
              <AccordionButton bg="#C0C0C1" _expanded={{ bg: 'teal', color: 'white' }}>
                <Box flex='1' textAlign='left' textTransform={"uppercase"}>
                 {title}
                </Box>
                {isExpanded ? ( <AiOutlineMinus fontSize='12px' />):(
                    <AiOutlinePlus fontSize='12px' />
                )}
              
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
             {description}
            </AccordionPanel>
            </>
    )}
          </AccordionItem>

  )
}
