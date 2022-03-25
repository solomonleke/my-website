import { Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Slide } from 'react-reveal'

export default function Header({title, head}) {
  const color = useColorModeValue("gray.gray400", "gray.gray100")
  const color2 = useColorModeValue("black", "white")
  return (
    <Slide top duration={1500}>
    <Text textTransform={"uppercase"} fontFamily={"body"} color= {color} fontSize={"12px"} letterSpacing="5px">{title}</Text>
    <Text textTransform={"uppercase"} mt={"15px"} fontFamily={"heading"} color= {color2} fontWeight="600" fontSize={"18px"} letterSpacing="5px">{head}</Text>

    </Slide>
  )
}
