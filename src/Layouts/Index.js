import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import {
  Box,
  Center,
  Container,
  HStack,
  Image,
  LinkBox,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function MainLayout({children, bgColor = "white"}) {
  return (
    <Container maxW={"container.xl"} scrollBehavior="smooth">
    <HStack align={"flex-start"} pos={"relative"}>
    <Box display={{base: "none", md: "block"}}>
    <NavBar/>
    </Box>
  

    <Box pl={{base: "0", md:"320px"}} w={"100%"}>
   
    {children}
    </Box>
       
   
</HStack>
    </Container>
  
  )
}
