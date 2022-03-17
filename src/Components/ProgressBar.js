import { Progress, Text } from '@chakra-ui/react'
import React from 'react'

export default function ProgressBar({title,color,level}) {
  return (
    <>
        <Text mb={"10px"}>{title}</Text>
        <Progress mb={"10px"} value={level} size='sm' borderRadius="11px" colorScheme={`${color}`} />
    </>
  )
}
