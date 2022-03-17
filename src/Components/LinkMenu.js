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
    Wrap,
    WrapItem,
  } from "@chakra-ui/react";
import { useHref } from 'react-router-dom';

export default function LinkMenu({link, title}) {

  // const navLi = document.querySelectorAll("a")
  // const sections = document.querySelectorAll("section")
  
  // window.addEventListener("scroll", ()=>{
  //   let current = "";
  // })
  
  const linkRef = useRef(null)
useEffect(() => {
  console.log(linkRef)
}, [linkRef]);

  return (
    <LinkBox ref={linkRef}   as={"a"} href={`${link}`}>
    <p className='active' > <Text  className='active' color={"blue.blue500"} _selected={{color: "red.red500"}} _hover={{color: "red.red500", borderBottom: "2px solid red.red500"}} >{title}</Text></p>
      
    </LinkBox>
  )
}
