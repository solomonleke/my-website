import { Box, Button, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Slide } from 'react-reveal'

export default function HireCard() {
  const BoxColor = useColorModeValue("#f9bf3f", "teal")
  
  const hireMe = ()=>{
    window.location.href="#Contact"
  }



  return (
    <Slide right duration={2000}>
    <Box mt={"80px"} bgColor={BoxColor} p={"32px"}>
    <Text fontSize={"25px"} fontFamily={"heading"}>I am happy to let you <br/> know that 30+ projects done successfully!</Text>

    <Button onClick={hireMe} mt={"30px"} transition={"0.9s"} _hover={{bgColor: "black", color: "gray.gray200"}} borderRadius={"0"} bgColor={BoxColor} border={"1px solid black"}>Hire Me</Button>
   </Box>
    </Slide>
  
  )
}
