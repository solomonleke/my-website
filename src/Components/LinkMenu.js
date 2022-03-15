import React from 'react'
import {
    Avatar,
    Box,
    Center,
    HStack,
    Image,
    LinkBox,
    SimpleGrid,
    Spacer,
    Stack,
    Text,
    Wrap,
    WrapItem,
  } from "@chakra-ui/react";
import { useHref } from 'react-router-dom';

export default function LinkMenu({link, title}) {
  return (
    <LinkBox  as={"a"} href={`${link}`}>
       <Text color={"blue.blue500"} _hover={{color: "red.red500", borderBottom: "2px solid red.red500"}} >{title}</Text>
    </LinkBox>
  )
}
