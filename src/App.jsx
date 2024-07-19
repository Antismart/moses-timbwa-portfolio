import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Heading,
  Text,
  Flex,
  Button,
  useColorMode,
  useColorModeValue,
  Icon,
  SimpleGrid,
  Container,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Avatar,
  Stack,
  Image,
  Tag,
  HStack,
  extendTheme,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaReact, FaNodeJs, FaEthereum, FaBars } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

// Custom theme
const theme = extendTheme({
  colors: {
    brand: {
      50: '#e0f7fa',
      100: '#b2ebf2',
      200: '#80deea',
      300: '#4dd0e1',
      400: '#26c6da',
      500: '#00bcd4',
      600: '#00acc1',
      700: '#0097a7',
      800: '#00838f',
      900: '#006064',
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

const MotionBox = motion(Box);

const Header = () => {
  const { toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const formBackground = useColorModeValue("white", "gray.800");
  
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg={formBackground}
      position="sticky"
      top="0"
      zIndex="sticky"
      boxShadow="md"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={'-.1rem'} color="brand.500">
          Moses Timbwa
        </Heading>
      </Flex>
      <Box display={{ base: "block", md: "none" }}>
        <Button onClick={onOpen} aria-label="Open Menu">
          <Icon as={FaBars} />
        </Button>
      </Box>
      <HStack spacing={4} display={{ base: "none", md: "flex" }}>
        <Button as="a" variant="ghost" href="#about">About</Button>
        <Button as="a" variant="ghost" href="#projects">Projects</Button>
        <Button as="a" variant="ghost" href="#services">Services</Button>
        <Button as="a" variant="ghost" href="#contact">Contact</Button>
        <Button onClick={toggleColorMode} aria-label="Toggle Color Mode">
          <Icon as={useColorModeValue(FaMoon, FaSun)} />
        </Button>
      </HStack>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4}>
              <Button as="a" variant="ghost" href="#about" onClick={onClose} width="100%">About</Button>
              <Button as="a" variant="ghost" href="#projects" onClick={onClose} width="100%">Projects</Button>
              <Button as="a" variant="ghost" href="#services" onClick={onClose} width="100%">Services</Button>
              <Button as="a" variant="ghost" href="#contact" onClick={onClose} width="100%">Contact</Button>
              <Button onClick={() => { toggleColorMode(); onClose(); }} width="100%">
                <Icon as={useColorModeValue(FaMoon, FaSun)} mr={2} />
                Toggle {useColorModeValue("Dark", "Light")} Mode
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

const Hero = () => (
  <Box
    backgroundImage="url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib                                                                                                                                                                                                                                                                                                          =rb-1.2.1&auto=format&fit=crop&w=1352&q=80')"
    backgroundSize="cover"
    backgroundPosition="center"
    backgroundAttachment="fixed"
  >
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      textAlign="center"
      py={{ base: 20, md: 36 }}                                                                                                                                                         
      px={4}
      bg="rgba(0, 0, 0, 0.7)"
      color="white"
    >
      <Container maxW="container.xl">
        <Heading as="h2" size={{ base: "3xl", md: "4xl" }} mb={4}>
          Moses Timbwa
        </Heading>
        <Text fontSize={{ base: "xl", md: "2xl" }} mb={8}>
          Software Developer | Blockchain Developer | Freelance Web Solutions
        </Text>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        <Button colorScheme="brand" size="lg" as="a" href="#contact">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
          Get in Touch
        </Button>
      </Container>
    </MotionBox>
  </Box>
);

const About = () => (
  <Box py={{ base: 16, md: 20 }} id="about">
    <Container maxW="container.xl">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box>
          <Heading as="h3" size="xl" mb={5} color="brand.500">
            About Me
          </Heading>
          <Text fontSize="lg" mb={4}>
            I'm a passionate full-stack developer specializing in the MERN stack and Solidity. With a keen eye for detail and a love for clean, efficient code, I create robust web applications and smart contracts that drive business growth.
          </Text>
          <Text fontSize="lg">
            My goal is to leverage cutting-edge technologies to solve real-world problems and help businesses establish a strong online presence.
          </Text>
        </Box>
        <Flex justify="center" align="center">
          <Avatar size={{ base: "xl", md: "2xl" }} name="Moses Timbwa" src="/102155756.jpeg" />
        </Flex>
      </SimpleGrid>
    </Container>
  </Box>
);

const SkillIcon = ({ icon, label }) => (
  <VStack>
    <Icon as={icon} boxSize={{ base: 10, md: 16 }} color="brand.500" />
    <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>{label}</Text>
  </VStack>
);

const Skills = () => (
  <Box py={{ base: 16, md: 20 }} bg={useColorModeValue("gray.100", "gray.700")}>
    <Container maxW="container.xl">
      <Heading as="h3" size="xl" mb={10} textAlign="center" color="brand.500">
        My Skills
      </Heading>
      <SimpleGrid columns={{ base: 3, md: 5 }} spacing={{ base: 5, md: 10 }}>
        <SkillIcon icon={FaReact} label="React" />
        <SkillIcon icon={FaNodeJs} label="Node.js" />
        <SkillIcon icon={SiMongodb} label="MongoDB" />
        <SkillIcon icon={SiExpress} label="Express" />
        <SkillIcon icon={FaEthereum} label="Solidity" />
      </SimpleGrid>
    </Container>
  </Box>
);

const ProjectCard = ({ title, description, tags, imageUrl }) => (
  <MotionBox
    whileHover={{ y: -5 }}
    bg={useColorModeValue("white", "gray.800")}
    rounded="md"
    shadow="md"
    overflow="hidden"
    borderColor="brand.500"
    borderWidth={2}
  >
    <Image src={imageUrl} alt={title} width="100%" height="200px" objectFit="cover" />
    <Box p={6}>
      <Heading as="h4" size="md" mb={2}>
        {title}
      </Heading>
      <Text mb={4}>{description}</Text>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        {tags.map((tag) => (
          <Tag key={tag} colorScheme="brand" mb={2}>
            {tag}
          </Tag>
        ))}
      </Stack>
    </Box>
  </MotionBox>
);

const Projects = () => (
  <Box py={{ base: 16, md: 20 }} id="projects">
    <Container maxW="container.xl">
      <Heading as="h3" size="xl" mb={10} textAlign="center" color="brand.500">
        Featured Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        <ProjectCard
          title="DeFi Dashboard"
          description="A comprehensive dashboard for DeFi portfolio management."
          tags={["React", "Web3.js", "Solidity"]}
          imageUrl="/path-to-defi-dashboard-image.jpg"
        />
        <ProjectCard
          title="E-commerce Platform"
          description="Full-stack e-commerce solution with real-time inventory management."
          tags={["MERN", "Redux", "Stripe"]}
          imageUrl="/path-to-ecommerce-image.jpg"
        />
        <ProjectCard
          title="Blockchain Voting"
          description="Secure and transparent voting system built on Ethereum."
          tags={["Solidity", "React", "Truffle"]}
          imageUrl="/path-to-voting-system-image.jpg"
        />
      </SimpleGrid>
    </Container>
  </Box>
);

const ServiceCard = ({ title, description, icon }) => (
  <MotionBox
    whileHover={{ y: -5 }}
    bg={useColorModeValue("white", "gray.800")}
    p={6}
    rounded="md"
    shadow="md"
    textAlign="center"
    borderColor="brand.500"
    borderWidth={2}
  >
    <Icon as={icon} boxSize={12} color="brand.500" mb={4} />
    <Heading as="h4" size="md" mb={4}>
      {title}
    </Heading>
    <Text>{description}</Text>
  </MotionBox>
);

const Services = () => (
  <Box py={{ base: 16, md: 20 }} bg={useColorModeValue("gray.100", "gray.700")} id="services">
    <Container maxW="container.xl">
      <Heading as="h3" size="xl" mb={10} textAlign="center" color="brand.500">
        My Services
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <ServiceCard
          title="Web Development"
          description="Custom web applications tailored to your business needs."
          icon={FaReact}
        />
        <ServiceCard
          title="Smart Contracts"
          description="Secure and efficient smart contracts for your blockchain projects."
          icon={FaEthereum}
        />
        <ServiceCard
          title="API Development"
          description="Robust and scalable APIs to power your applications."
          icon={FaNodeJs}
        />
      </SimpleGrid>
    </Container>
  </Box>
);

const Contact = () => (
  <Box py={{ base: 16, md: 20 }} id="contact">
    <Container maxW="container.xl">
      <Heading as="h3" size="xl" mb={10} textAlign="center" color="brand.500">
        Get in Touch
      </Heading>
      <VStack spacing={4} align="stretch">
        <Button leftIcon={<FaGithub />} colorScheme="gray" as="a" href="https://github.com/Antismart" target="_blank">
          GitHub
        </Button>
        <Button leftIcon={<FaLinkedin />} colorScheme="blue" as="a" href="https://www.linkedin.com/in/moses-timbwa-115286241" target="_blank">
          LinkedIn
        </Button>
        <Button colorScheme="brand" as="a" href="mailto:timbwamoses83@gmail.com">
          Send an Email
        </Button>
      </VStack>
    </Container>
  </Box>
);

const Footer = () => (
  <Box as="footer" py={6} textAlign="center" bg={useColorModeValue("gray.100", "gray.800")}>
    <Text fontSize="sm">&copy; 2024 Moses Timbwa. All rights reserved.</Text>
  </Box>
);

const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
      <Header />
      <Hero />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Services />
      <Contact />
      <Footer />
    </Box>
  </ChakraProvider>
);

export default App;