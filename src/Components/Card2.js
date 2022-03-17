import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'

export default function HireCard() {
  return (
    <Box mt={"80px"} bgColor={"#f9bf3f"} p={"32px"}>
       <Text fontSize={"25px"} fontFamily={"heading"}>I am happy to let you <br/> know that 30+ projects done successfully!</Text>

       <Button mt={"30px"} _hover={{bgColor: "black", color: "black"}} borderRadius={"0"} bgColor={"#f9bf3f"} border={"1px solid black"}>Hire Me</Button>
    </Box>
  )
}
