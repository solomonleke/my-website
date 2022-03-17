import { Text } from '@chakra-ui/react'
import React from 'react'

export default function Header({title, head}) {
  return (
    <div>
    <Text textTransform={"uppercase"} fontFamily={"body"} color= {"gray.gray400"} fontSize={"12px"} letterSpacing="5px">{title}</Text>
    <Text textTransform={"uppercase"} mt={"15px"} fontFamily={"heading"} color= {"black"} fontWeight="600" fontSize={"18px"} letterSpacing="5px">{head}</Text>

    </div>
  )
}
