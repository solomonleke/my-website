import { Progress, Text } from '@chakra-ui/react'
import React from 'react'
import { Flip } from 'react-reveal'

export default function ProgressBar({title,color,level}) {
  return (
    <Flip top duration={2000}>
        <Text mb={"10px"}>{title}</Text>
        <Progress mb={"10px"} value={level} size='sm' borderRadius="11px" colorScheme={`${color}`} />
    </Flip>
  )
}
