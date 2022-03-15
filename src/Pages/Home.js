import React, { useState } from 'react'
import MainLayout from '../Layouts/Index'
import Request from '../Utils/Request'
import Seo from '../Utils/Seo'
import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
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
import { FaCloudDownloadAlt } from "react-icons/fa";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const download = ()=>{
    setIsLoading(true)

  
  
  }
    // const getApi = async ()=>{
    //    const res = await new Request().get({url:"https://jsonplaceholder.typicode.com/posts"})
    //     console.log(res)
    // }
    
  return (
        <MainLayout>
            <Seo title='Software Engineer' description='HomePage'/>
            <Box display={{base: "block", md: "none"}}>buton</Box>
            <Container maxW={"container.lg"}  id={"Home"} pt={"50px"} h={"100vh"}>
           
                <SimpleGrid columns={{base: 1, md: 2}} spacing={"12px"}>
                    <Box mt={{base: "5px", md: "210px"}}>
                        <Text fontFamily={"title"} fontSize={"53px"} lineHeight={"65px"}>Welcome <br/> To  My Portfolio</Text>
                        <Text mt={"22px"}>I'm a Web developer that believes Web Sites should be of utmost simplicity, be responsive and user-friendly.</Text>

                        <Button mt={"32px"} onClick={download} isLoading={isLoading} rightIcon={<FaCloudDownloadAlt />} color='red.red400' variant='outline'>
                       Download CV
                      </Button>

                    </Box>
                    <Box>
                    <Image w={{base: "60%", md: "90%"}} src="about.png" />
                     </Box>
                </SimpleGrid>
            </Container>

            <Container maxW={"container.lg"}  id={"Home"} pt={"50px"}>
                <SimpleGrid columns={{base: 1, md: 2}} spacing={"12px"}>
                    <Box mt={{base: "5px", md: "210px"}}>
                        <Text fontFamily={"title"} fontSize={"53px"} lineHeight={"65px"}>Welcome <br/> To  My Portfolio</Text>
                        <Text mt={"22px"}>I'm a Web developer that believes Web Sites should be of utmost simplicity, be responsive and user-friendly.</Text>

                        <Button mt={"32px"} onClick={download} isLoading={isLoading} rightIcon={<FaCloudDownloadAlt />} color='red.red400' variant='outline'>
                       Download CV
                      </Button>

                    </Box>
                    <Box>
                    <Image w={{base: "60%", md: "90%"}} src="about.png" />
                     </Box>
                </SimpleGrid>
            </Container>

        </MainLayout>
  )
}
