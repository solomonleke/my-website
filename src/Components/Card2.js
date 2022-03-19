import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { Slide } from 'react-reveal'

export default function HireCard() {
  return (
    <Slide right duration={2000}>
    <Box mt={"80px"} bgColor={"#f9bf3f"} p={"32px"}>
    <Text fontSize={"25px"} fontFamily={"heading"}>I am happy to let you <br/> know that 30+ projects done successfully!</Text>

    <Button mt={"30px"} transition={"0.9s"} _hover={{bgColor: "black", color: "gray.gray200"}} borderRadius={"0"} bgColor={"#f9bf3f"} border={"1px solid black"}>Hire Me</Button>
 </Box>
    </Slide>
  
  )
}
