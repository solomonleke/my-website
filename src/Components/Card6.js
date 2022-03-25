import { Box, Image, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Button from './Button';
import { AiOutlineRise } from "react-icons/ai";
import { Fade } from 'react-reveal';
export default function WorkCard({ title, description, link, image }) {

    const boxColor = useColorModeValue("#teal", "#606060")
    return (

        <Fade right duration={2500}>
            <Flippy
                style={{ width: "100%", height: "350px" }}
                flipOnHover
                flipDirection="horizontal"

            >

                <FrontSide style={{ padding: "none", boxShadow: "none", width: "100%", height: "100%" }}>
                    <Box w="100%" h="100%" cursor={"pointer"}>
                        <Image src={`${image}`} w="100%" h="100%" objectFit={"cover"} />
                    </Box>
                </FrontSide>

                <BackSide style={{ padding: "none", boxShadow: "none", width: "100%", height: "100%" }}>
                    <Box cursor={"pointer"} w="100%" h="100%" bgColor={boxColor} p={"20px"} color="white" >

                        <Text fontSize={"20px"} fontWeight="600" fontFamily={"heading"}>{title}</Text>
                        <Text fontSize={"16px"} fontWeight="400" my={"20px"}>{description}</Text>

                        <Button rightIcon={<AiOutlineRise />} href={`${link}`} border="2px solid white" isLoading={false} background="transparent">See Live Preview</Button>


                    </Box>
                </BackSide>


            </Flippy>

        </Fade>

    )
}
