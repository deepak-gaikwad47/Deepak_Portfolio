import React from "react";
import {
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.lg" py="12">
      <Grid templateColumns="2fr 1fr" gap="8">
        <VStack spacing="6" align="start">
          <Heading as="h1" size="2xl">
            Hi, I'm Deepak
          </Heading>
          <Text fontSize="lg">
            Discover the future of web development , where innovation meets
            craftsmanship. I harness the power of full-stack technology to
            create robust, intuitive, and adaptive web solutions. My mission is
            to transform your challenges into cutting-edge experiences that
            leave a lasting impact. With over 2.5+ years of industry expertise
            in technologies like Next.js, React, Node.js, and MongoDB, I'm
            dedicated to broadening my technical horizons and bringing your
            visionary projects to life. Let's delve into a partnership that
            redefines digital excellence. Pushing boundaries is not just a task
            for me.
          </Text>

          <Heading as="h2" size="lg">
            Experience
          </Heading>
          <Text>
            Associate Software Engineer at Successsive Digital - Aug 2021 to Dec
            2023
          </Text>
          <Text>
            Technical Support Engineer at CodeGurkul - Jan 2021 to Jun 2021
          </Text>

          <Heading as="h2" size="lg">
            Education
          </Heading>
          <Text>Bachelor of Technology in E&TC - VIIT, Pune - 2021</Text>

          <Heading as="h2" size="lg">
            Skills
          </Heading>
          <HStack spacing="2">
            <Badge colorScheme="blue">React</Badge>
            <Badge colorScheme="teal">Node.js</Badge>
            <Badge colorScheme="purple">JavaScript</Badge>
            <Badge colorScheme="red">Typescript</Badge>
            <Badge colorScheme="orange">HTML</Badge>
            <Badge colorScheme="pink">CSS</Badge>
            <Badge colorScheme="red">Express.js</Badge>
            <Badge colorScheme="green">MongoDB</Badge>
            <Badge colorScheme="purple">GraphQL</Badge>
          </HStack>
          <HStack spacing="2">
            <Badge colorScheme="cyan">Next.js</Badge>
            <Badge colorScheme="yellow">Redis</Badge>
            <Badge colorScheme="blue">Redux</Badge>
            <Badge colorScheme="teal">JEST</Badge>
            <Badge colorScheme="purple">Enzyme</Badge>
            <Badge colorScheme="red">Docker</Badge>
            <Badge colorScheme="pink">JIRA</Badge>
            <Badge colorScheme="green">JSON</Badge>
            <Badge colorScheme="cyan">REST API's</Badge>
            <Badge colorScheme="yellow">Github</Badge>
          </HStack>
        </VStack>

        <GridItem colSpan={1}>
          <Image
            src="./DeepakGaikwad.png"
            alt="Your Photos"
            borderRadius="md"
          />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default About;
