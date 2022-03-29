import { Box, HStack, Progress, Text } from '@chakra-ui/react'
import React from 'react'
import { Flip } from 'react-reveal'
import { FcRightUp } from "react-icons/fc";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

export default function ProgressBar({title,color,level}) {
  return (
    <Flip top duration={2000}>
      

      <HStack spacing={"20px"} my="10px">
      <Box color={"teal"}>
      
      <BsFillArrowRightCircleFill/>
      </Box>

      <Text>{title}</Text>
      </HStack>
     
    </Flip>
  )
}
