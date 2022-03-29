import React, { useState, useRef } from "react";
import MainLayout from "../Layouts/Index";
import Request from "../Utils/Request";
import Seo from "../Utils/Seo";
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
  Stack,
  Text,
  Wrap,
  WrapItem,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  background,
  Progress,
  Accordion,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Tabs, TabList, TabPanels, Tab, TabPanel, Textarea, CloseButton, useColorModeValue, useColorMode
} from "@chakra-ui/react";
import { AiOutlineAlignLeft, AiFillBulb, AiOutlineBulb, AiOutlineWoman, AiOutlineDingding, AiOutlineVerified } from "react-icons/ai";
import { FaCloudDownloadAlt, FaMapMarkedAlt } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import NavBar from "../Layouts/NavBar";

import LinkMenu from "../Components/LinkMenu";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { BsFillBookFill, BsFillBrushFill, BsFlower1, BsFillPatchExclamationFill, BsFillPlugFill, BsFillPencilFill, BsFillTelephoneInboundFill, BsSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import Header from "../Components/Header";
import AboutCard from "../Components/Card";
import HireCard from "../Components/Card2";
import ServiceCard from "../Components/Card3";
import ProgressBar from "../Components/ProgressBar";
import EducationCard from "../Components/Card4";
import ExperienceCard from "../Components/Card5";
import EmpCard from "../Components/Card5.5";
import WorkCard from "../Components/Card6";
import { Fade, Slide } from "react-reveal";
import Jump from 'react-reveal/Jump'
import ContactCard from "../Components/Card7";
import Input from "../Components/Input";
import TextInput from "../Components/TextInput";
import emailjs from "emailjs-com";
import useOnScreen from "../hooks/useOnScreen";


export default function Home() {

  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const download = async () => {
    setIsLoading(true);
    const res = await new Request().get({ url: "https://jsonplaceholder.typicode.com/posts" })
    setIsLoading(false);
    console.log(res)

  };


  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");

  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Subject, setSubject] = useState("")
  const [Message, setMessage] = useState("")
  const [Success, setSuccess] = useState(false)


  const getApi = async () => {

    const res = await new Request().get({ url: "https://jsonplaceholder.typicode.com/posts" })

    setIsLoading(false);
    setSuccess(true)
  }

  const sendEmail = (e) => {
    setIsLoading(true);
    e.preventDefault();
    setName("")
    setEmail("")
    setSubject("")
    setMessage("")

    emailjs.sendForm('gmail', 'template_ap6qzyl', form.current, 'pW4lu_RfjF4aAD_PY')
    getApi()

  };
  const [Light, setLight] = useState(false);


  const { toggleColorMode } = useColorMode()

  const bg = useColorModeValue("background", "gray.gray400")
  const boxColor = useColorModeValue("blue.blue500", "teal")
  const boxColorH = useColorModeValue("blue.blue300", "#044a4a")



  const toggle = () => {
    toggleColorMode()
    setLight(!Light)
  }

  const homeRef = useRef()
  const homeVisible = useOnScreen(homeRef)

  const aboutRef = useRef()
  const aboutVisible = useOnScreen(aboutRef)

  const serviceRef = useRef()
  const serviceVisible = useOnScreen(serviceRef)

  const skillRef = useRef()
  const skillVisible = useOnScreen(skillRef)

  const educationRef = useRef()
  const educationVisible = useOnScreen(educationRef)

  const experienceRef = useRef()
  const experienceVisible = useOnScreen(experienceRef)

  const workRef = useRef()
  const workVisible = useOnScreen(workRef)

  const contactRef = useRef()
  const contactVisible = useOnScreen(contactRef)



  return (
    <MainLayout home={homeVisible} about={aboutVisible} service={serviceVisible} skill={skillVisible} education={educationVisible} experience={experienceVisible} work={workVisible} contact={contactVisible}>
      <Seo title="Software Engineer" description="HomePage" />
      <HStack mt={"32px"}
        display={{ base: "flex", md: "none" }}
        fontSize={"32px"}
        position={"sticky"}
        top={"0"}
        bgColor={bg}
        opacity={"0.9"}
        w={"100&"}
        p="5px"
        zIndex="22"
        rounded="8px"
        spacing={"105px"}
        fontSize={"25px"}

      >
        <AiOutlineAlignLeft onClick={onOpen} />

        <Text>Menu</Text>
      </HStack>


      <Drawer
        isOpen={isOpen}
        placement={placement}
        onClose={onClose}

      >
        <DrawerOverlay />
        <DrawerContent bg={bg}>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <Box p="14px" textAlign={"center"} fontFamily={"body"}>
              <Button onClick={toggle} bg="transparent" _hover={{ bg: "transparent" }} cursor={"pointer"}>{Light == false ? (<> Switch to Dark mode <Text px="10px"><BsFillMoonStarsFill /> </Text></>) : (<> Switch to Light mode <Text px="10px"><BsSunFill /></Text>  </>)}</Button>

              <Center mt={"32px"}>
                <Wrap>
                  <WrapItem>
                    <Avatar
                      size="2xl"
                      name="Solomon Adeleke"
                      src="avater.jpeg.png"
                      bgColor="white"
                    />{" "}
                  </WrapItem>
                </Wrap>
              </Center>
              <Text mt={"28px"} fontSize={"20px"} fontFamily={"heading"}>
                Solomon Adeleke
              </Text>
              <Text mt={"3px"} fontSize={"15px"} fontFamily={"body"}>
                Software Engineer
              </Text>

              <Stack mt={"32px"} spacing={"15px"}>

                <span onClick={onClose}>  <LinkMenu link="#Home" title="Home" /> </span>
                <span onClick={onClose}>  <LinkMenu link="#About" title="About" /> </span>
                <span onClick={onClose}>  <LinkMenu link="#Services" title="Services" /></span>
                <span onClick={onClose}>  <LinkMenu link="#Skills" title="Skills" /></span>
                <span onClick={onClose}>  <LinkMenu link="#Education" title="Education" /> </span>
                <span onClick={onClose}>  <LinkMenu link="#Experience" title="Experience" /></span>
                <span onClick={onClose}>  <LinkMenu link="#Work" title="Work" /></span>
                <span onClick={onClose}>  <LinkMenu link="#Contact" title="Contact" /></span>



              </Stack>

              <Text fontSize={"12px"} mt={"32px"}>
                © Copyright ©2022 All rights reserved |
              </Text>

              <Text fontSize={"12px"} mt={"12px"}>
                This Portfolio is made with{" "}
                <i className="fa-solid fa-heart" /> by{" "}
                <Box as={"span"} color={"blue.blue500"}>
                  solomonleke
                </Box>
              </Text>

              <Center mt={"12px"} pb={"62px"}>
                <HStack spacing={"12px"} cursor={"pointer"}>
                  <LinkBox
                    as={"a"}
                    href="https://www.linkedin.com/in/solomon-adeleke-740426170/"
                    target={"blank"}
                  >

                    <FaLinkedinIn />
                  </LinkBox>
                  <LinkBox
                    as={"a"}
                    href="https://github.com/solomonleke"
                    target={"blank"}
                  >

                    <FaGithub />
                  </LinkBox>
                  <LinkBox
                    as={"a"}
                    href="https://twitter.com/moyin_s"
                    target={"blank"}
                  >
                    <FaTwitter />
                  </LinkBox>
                </HStack>
              </Center>
            </Box>
          </DrawerBody>

          <DrawerFooter>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Container ref={homeRef} as={"section"} maxW={"container.lg"} id={"Home"} pt={"50px"} mt={{ base: "10px" }} h={{ base: "auto", md: "100vh" }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={"12px"}>


          <Box mt={{ base: "5px", md: "210px" }}>
            <Slide top duration={3000}>
              <Text fontFamily={"title"} fontSize={{ base: "35px", md: "53px" }} lineHeight={{ base: "40px", md: "65px" }}>
                Welcome <br /> To My Portfolio
              </Text>
            </Slide>
            <Slide bottom duration={3000}>
              <Text mt={"22px"}>
                I'm a Web developer that believes Web Sites should be of utmost
                simplicity, be responsive and user-friendly.
              </Text>

              <Button
                mt={"32px"}
                onClick={download}
                isLoading={isLoading}
                rightIcon={<FaCloudDownloadAlt />}
                color="red.red400"
                variant="outline"
              >
                <Text as="a" href="https://drive.google.com/uc?id=1wWDhBXNhupG03PwlKWP4lHcy783P1wgG&export=download">Download CV</Text>
              </Button>
            </Slide>
          </Box>


          <Fade right duration={3000}>

            <Box pos="relative">
              <Image w={{ base: "100%", md: "90%" }} src="about.png" />
              <Image w={{ base: "100%", md: "60%" }} pos={"absolute"} display={{ base: "none", md: "block" }} top="0" left="190px" zIndex="-1" src="circle-sEnd.png" />
            </Box>
          </Fade>

        </SimpleGrid>
      </Container>

      <Container ref={aboutRef} as={"section"} maxW={"container.lg"} id={"About"} pt={"50px"} h={{ base: "auto", md: "auto" }}>
        <Header title="about me" head="Get to Know me" />
        <Slide right duration={2000}>
          <Text mt={"72px"}>
            I'm a Software Engineer who lives by this code of perfection and simplicity, I strive to make sure that all my pieces of design get the response
            "WOW". More so, the life of a designer is a life of fight. Fight against the ugliness. Just like a doctor fights against disease.
            For me, the visual disease is what we have around, and what I try to do is cure it somehow with designs and apps I produce.
            I love challenging my creativity by picking up complex designs and simplify them because I believe “Always Learning, Always Growing”
          </Text>

          <Text mt={"12px"}>I'm good with Html, Css, JavaScript, Laravel/Php, Node.js and React.js. I have workrd on projects like E-commerce
            website, Logistics website, Delivery website to mention a
            few using Laravel/Php, Next.js and React.js</Text>
        </Slide>


        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} mt="38px" spacing={"32px"}>
          <AboutCard title="Software" color="#2c98f0" icon={<AiOutlineBulb />} />
          <AboutCard title="Web Design" color="#ec5453" icon={<AiOutlineWoman />} />
          <AboutCard title="Web Development" color="#f9bf3f" icon={<AiOutlineDingding />} />
          <AboutCard title="Application" color="#a84cb8" icon={<AiOutlineVerified />} />

        </SimpleGrid>

        <HireCard />


      </Container>



      <Container as={"section"} maxW={"container.lg"} ref={serviceRef} id={"Services"} pt={"50px"} h={{ base: "auto", md: "auto" }}>
        <Header title="WHAT I DO?" head="How i work" />


        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} mt="117px" spacing={"30px"} >

          <ServiceCard
            title="Understand"
            color="#2c98f0"
            icon={<AiOutlineBulb />}
            description="Understand the requirements, create user personas, define use cases. Having a knowledge about the user and his environment helps to provide a clear direction for the design."

          />
          <ServiceCard
            title="Research"
            color="#ec5453"
            icon={<BsFillBookFill />}
            description="Analyze competitors, research the latest trends while keeping an eye on the guidelines. This helps define the target, see similar projects and validate an idea before developing any solution."

          />
          <ServiceCard
            title="Sketch"
            color="#f9bf3f"
            icon={<BsFillBrushFill />}
            description="After gathering ideas on all aspects of job, I sketch, wireframe and design evaluate and make corrections."

          />
          <ServiceCard
            title="Design "
            color="#a84cb8"
            icon={<BsFlower1 />}
            description="Design the images and create prototypes for the job owner or user to have a view of what has been done."

          />
          <ServiceCard
            title="Iteration"
            color="#2fa499"
            icon={<BsFillPatchExclamationFill />}
            description="Do a review of the design with project owner. Sometimes projects demands adjustments and rethinking based on users criteria. I apply improvements on the project before hosting."

          />
          <ServiceCard
            title="Deployment"
            color="#4054b2"
            icon={<BsFillPlugFill />}
            description="Once the project is approved after we are ready to host, i get a domain and publish the web site."

          />

        </SimpleGrid>



      </Container>

      <Container as={"section"} maxW={"container.lg"} ref={skillRef} id={"Skills"} pt={"50px"} h={{ base: "auto", md: "100vh" }}>
        <Header title="MY SPECIALTY" head="MY SKILLS" />

        <Text mt={"72px"}>I've been able to acquaint myself with the following technologies in the past 3 years,
          and used them to develop live/existing projects that meet clients demands.</Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} mt="32px"  spacing={"30px"} >

          <Box>
            <Text fontWeight={"700"} fontSize={"16px"}>Soft Skills/Computer Aid Design Skills</Text>

            <Box mt={"32px"}>
              <ProgressBar title="Research" color={"blue"} level={"88"} />
              <ProgressBar title="Negotiation" color={"teal"} level={"80"} />
              <ProgressBar title="Communication" color={"blue"} level={"90"} />
              <ProgressBar title="Microsoft Office" color={"yellow"} level={"70"} />
              <ProgressBar title="Adobe Photo-shop" color={"teal"} level={"65"} />
              <ProgressBar title="WordPress" color={"blue"} level={"90"} />

            </Box>


          </Box>
          <Box>
            <Text fontWeight={"700"} fontSize={"16px"}>Computer Programming Skills</Text>

            <Box mt={"32px"} >
              <ProgressBar title="HTML5" color={"telegram"} level={"97"} />
              <ProgressBar title="CSS3" color={"teal"} level={"87"} />
              <ProgressBar title="JavaScript" color={"teal"} level={"77"} />
              <ProgressBar title="PHP" color={"teal"} level={"80"} />
              <ProgressBar title="Laravel" color={"teal"} level={"85"} />
              <ProgressBar title="React.js" color={"teal"} level={"80"} />

            </Box>
          </Box>

        </SimpleGrid>

      </Container>


      <Container as={"section"} maxW={"container.lg"} ref={educationRef} id={"Education"} pt={"50px"} h={{ base: "auto", md: "auto" }}>
        <Header title="Education / Certification" head="Education" />

        <Accordion my={"72px"} allowMultiple>

          <EducationCard title="Bachelor Degree of Chemistry" description=" Covenant University, Ogun State. Nigeria." date="Aug 2014 - Jul 2019" />
          <EducationCard title="Higher school Secondary education" description=" Altitude College, Lagos State. Nigeria." date="Sep 2007 - Jul 2013" />

        </Accordion>

        <Header head="Certification" />

        <Accordion my={"72px"} mb="210px" allowMultiple>

          <EducationCard title="Designated JavaScript Specialist" description="Framework Academy. 1333 H St NW Suite 700 West Washington." date="14 Feb, 2022" img="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/46356459" />
          <EducationCard title="Designated HTML5 Specialist" description="Framework Academy. 1333 H St NW Suite 700 West Washington." date="17 may, 2021" img="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/32548136" />
          <EducationCard title="Designated CSS Specialist" description="Framework Academy. 1333 H St NW Suite 700 West Washington." date="17 may, 2021" img="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/32548176" />

        </Accordion>
      </Container>

      <Container as={"section"} maxW={"container.lg"} ref={experienceRef} id={"Experience"} pt={"50px"} h={{ base: "auto", md: "auto" }}>
        <Header title="Experience" head="Work Experience" />

        <Box mt={"72px"}>

          <ExperienceCard
            title="Full-stack Developer at ItSkillsCenter"
            date="OCT 2021 - Present"
            description="I design, develop and deploy high-quality solutions and algorithms that will be used across multiple ItSkillsCenter products and used by hundreds of users.
            Contribute to driving best engineering practices such as Continuous Integration/Continuous Delivery, Test- Driven Development, behavioral driven development,
             Work towards reducing the complexity that comes with working with a system that spans the ItSkillCenter Network.
           I collaborated effectively with other development teams to help drive forward ItSkillCenter products."
            icon={<BsFillPencilFill />}
            color="#2c98f0"
          />
          <ExperienceCard
            title="Front-end Designer at Gahawards"
            date="JUN 2021 – SEP 2021"
            description="I was responsible for participating in the full life cycle of Gahawards development projects, and for implementation and 
            maintaining best practice procedures in all areas of work. Liaised with team members to deliver quality products,
            designed and updated layouts to meet usability and performance requirements. "
            icon={<BsFillPencilFill />}
            color="orange"
          />
          <ExperienceCard
            title="Front-end Developer at Pc District"
            date="NOV 2020 – MAR 2021"
            description="I designed web platforms that were responsive on all screens, revamped existing application to function better and faster,
             and collaborated effectively with other development teams to help drive forward Pc District products."
            icon={<BsFillPencilFill />}
            color="teal"
          />
          <EmpCard
            color="transparent"
          />






        </Box>
      </Container>

      <Container as={"section"} maxW={"container.lg"} ref={workRef} id={"Work"} pt={"50px"} h={{ base: "auto", md: "autoa" }}>
        <Header title="my work" head="recent work" />

        <Tabs mt="72px">
          <TabList overflowX={{ base: "auto", lg: "none" }}>
            <Tab _selected={{ color: 'white', bg: 'red.red500' }} >All</Tab>
            <Tab _selected={{ color: 'white', bg: 'red.red500' }} >WordPress</Tab>
            <Tab _selected={{ color: 'white', bg: 'red.red500' }} >React.js/Next.js</Tab>
            <Tab _selected={{ color: 'white', bg: 'red.red500' }} >Laravel</Tab>
            <Tab _selected={{ color: 'white', bg: 'red.red500' }} >Others</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={"20px"}>
                <WorkCard
                  title="Wiztech Ng (Php)"
                  description="Designed and managed wiztechNg with HTML, Css, javascript, Bootstrap and PHP fully responsive on all devices"
                  image="wiztech.png"
                  link="https://wiztechng.com/"
                />
                <WorkCard
                  title="Bodds Support App (React.js)"
                  description="Designed the front-end of this project using React.js frame-work, CSS3, HTML5, and Consumed API for the functionality of the website"
                  image="bodd.png"
                  link="https://support.bodds.com.ng/"
                />
                <WorkCard
                  title="Eco-Basket (React.js)"
                  description="Designed this project using React.js frame-work, CSS3, HTML5, and made sure it's responsive on all devices"
                  image="eco-basket.png"
                  link="https://noahadeleke.com/"
                />

                <WorkCard
                  title="UI/UX Portfolio for a UI/UX Designer"
                  description="Designed this portfolio using CSS3, HTML5, Bootstrap,  JQuery and javascript and fully responsive on all device"
                  image="uiux.png"
                  link="https://elijahleke.com/"
                />
                <WorkCard
                  title="A Portfolio design for a Concept Designer"
                  description="Designed the portfolio using CSS3, HTML5, Bootstrap,  JQuery and javascript and fully responsive on all device"
                  image="product_ope.png"
                  link="http://adelekeopeyemi.com.ng/"
                />
                <WorkCard
                  title="UI/UX Portfolio for a Product Designer "
                  description="Designed the portfolio using CSS3, HTML5, Bootstrap,  JQuery and javascript and fully responsive on all device"
                  image="product_UI.png"
                  link="http://uiux.adelekeopeyemi.com.ng/"
                />

                <WorkCard
                  title="Logistic app (Laravel) "
                  description="Designed the logistic app using Laravel, CSS3, HTML5, Bootstrap,  JQuery and javascript and fully responsive on all device"
                  image="logistic.png"
                  link="http://my-logistic-app.herokuapp.com/"
                />

              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={"20px"}>


              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={"20px"}>

                <WorkCard
                  title="Bodds Support App (React.js)"
                  description="Designed the front-end of this project using React.js frame-work, CSS3, HTML5, and Consumed API for the functionality of the website"
                  image="bodd.png"
                  link="https://support.bodds.com.ng/"
                />

                <WorkCard
                  title="Eco-Basket (React.js)"
                  description="Designed this project using React.js frame-work, CSS3, HTML5, and made sure it's responsive on all devices"
                  image="eco-basket.png"
                  link="https://noahadeleke.com/"
                />


              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={"20px"}>

                <WorkCard
                  title="Logistic app (Laravel) "
                  description="Designed the logistic app using Laravel, CSS3, HTML5, Bootstrap,  JQuery and javascript and fully responsive on all device"
                  image="logistic.png"
                  link="http://my-logistic-app.herokuapp.com/"
                />



              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={"20px"}>
                <WorkCard
                  title="Wiztech Ng (Php)"
                  description="Designed and managed wiztechNg with HTML, Css, javascript, Bootstrap and PHP fully responsive on all devices"
                  image="wiztech.png"
                  link="https://wiztechng.com/"
                />

                <WorkCard
                  title="UI/UX Portfolio for a UI/UX Designer"
                  description="Designed this portfolio using CSS3, HTML5, Bootstrap,  JQuery and javascript and fully responsive on all device"
                  image="uiux.png"
                  link="https://elijahleke.com/"
                />

                <WorkCard
                  title="A Portfolio design for a Concept Designer"
                  description="Designed the portfolio using CSS3, HTML5, Bootstrap,  JQuery and javascript and fully responsive on all device"
                  image="product_ope.png"
                  link="http://adelekeopeyemi.com.ng/"
                />

                <WorkCard
                  title="UI/UX Portfolio for a Product Designer "
                  description="Designed the portfolio using CSS3, HTML5, Bootstrap,  JQuery and javascript and fully responsive on all device"
                  image="product_UI.png"
                  link="http://uiux.adelekeopeyemi.com.ng/"
                />

              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>


      <Container as={"section"} maxW={"container.lg"} ref={contactRef} id={"Contact"} pt={"50px"} h={{ base: "auto", md: "100vh" }}>
        <Header title="Get in touch" head="contact" />
        <Box mt="72px">
          {
            Success ? (
              <Slide right duration={3000}>
                <Alert status='success' mb="15px" color="white" bg="teal">
                  <AlertIcon />
                  <AlertTitle mr={2}>Thank you for reaching out!</AlertTitle>
                  <AlertDescription>A message will be sent to you shortly.</AlertDescription>
                  <CloseButton onClick={() => setSuccess(false)} position='absolute' right='8px' top='8px' />
                </Alert>
              </Slide>

            ) : ("")
          }
          <SimpleGrid columns={{ base: 1, md: 2 }} method="post">
            <Box>
              <ContactCard icon={<MdOutgoingMail />} title="lordsoliz@gmail.com" />
              <ContactCard icon={<FaMapMarkedAlt />} title={`No 1, Johnson Sami-iye Street, Lagos, Nigeria.`} />
              <ContactCard icon={<BsFillTelephoneInboundFill />} title="+23460888922" />
            </Box>
            <form ref={form} onSubmit={sendEmail}>
              <Stack spacing="27px" mb="20px">
                <Jump duration={2000}>
                  <Input isRequired={true} name="Name" val={Name && true} onChange={(e) => setName(e.target.value)} placeholder="Name" value={Name} label="Name" type="text" />
                </Jump>
                <Jump duration={2000}>
                  <Input isRequired={true} name="Email" val={Email && true} onChange={(e) => setEmail(e.target.value)} placeholder="Email" value={Email} label="Email" type="text" />
                </Jump>
                <Jump duration={2000}>
                  <Input isRequired={true} name="Subject" val={Subject && true} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" value={Subject} label="Subject" type="text" />

                </Jump>
                <Jump duration={2000}>
                  <TextInput isRequired={true} name="Message" val={Message && true} onChange={(e) => setMessage(e.target.value)} placeholder="Message" value={Message} label="Message" />

                </Jump>

                <Button type="submit" loadingText="Sending Mail. . ." isLoading={isLoading} _hover={{ bgColor: boxColorH, color: "#fff" }} color="white" bgColor={boxColor}>Send Message</Button>
              </Stack>
            </form>


          </SimpleGrid>


        </Box>

      </Container>


    </MainLayout>
  );
}
