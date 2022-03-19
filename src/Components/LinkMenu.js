import React, {useEffect, useRef} from 'react'
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
    useDisclosure,
    Wrap,
    WrapItem,
  } from "@chakra-ui/react";
import { useHref, useNavigate } from 'react-router-dom';

export default function LinkMenu({link, title, Close}) {

  // const navLi = document.querySelectorAll("a")
  // const sections = document.querySelectorAll("section")
  
  // window.addEventListener("scroll", ()=>{
  //   let current = "";
  // })
  
const navigate = useNavigate()
const { isOpen, onOpen, onClose } = useDisclosure();
const nav = ()=>{
  window.location.href=link
}

  return (
    <LinkBox  onClick={nav}  as={"a"} cursor={"pointer"}>
    <p className='active' > <Text  className='active' color={"blue.blue500"} _selected={{color: "red.red500"}} _hover={{color: "red.red500", borderBottom: "2px solid red.red500"}} >{title}</Text></p>
      
    </LinkBox>
  )
}
