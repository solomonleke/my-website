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

export default function MainLayout({children, home=false, about=false, service=false, skill=false, education=false, experience=false, work=false, contact=false, bgColor = "white"}) {
  return (
    <Container maxW={"container.xl"} scrollBehavior="smooth">
    <HStack align={"flex-start"} pos={"relative"}  display={{base: "none", md: "none", lg: "block"}}>
    <Box>
    <NavBar home={home} about={about} service={service} skill={skill} education={education} experience={experience} work={work} contact={contact} />
    </Box>
  

    <Box pl={{base: "0", md:"320px"}} w={"100%"}>
   
    {children}
    </Box>
       
   
</HStack>

  <Box pl={{base: "0", md:"320px"}} w={"100%"}  display={{base: "block", md: "block", lg: "none"}}>
    
  {children}
  </Box>
    
    </Container>
  
  )
}
