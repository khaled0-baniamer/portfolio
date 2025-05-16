import {
  VStack,
  Text,
  Heading,
  Box,
  Flex,
  Divider,
  Stack,
} from "@chakra-ui/react";

const AboutScreen: React.FC = () => {
  const startYear = new Date("02/01/2022").getFullYear();
  const currentYear = new Date().getFullYear();

  return (
    <Box px={{  md: 10 }} py={10}>
      <Heading
        mb={10}
        textAlign="center"
        textDecoration="underline"
        fontSize={{ base: "2xl", md: "4xl" }}
      >
        About Me
      </Heading>

      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 10, md: 8 }}
        align="start"
      >
        <VStack w="full" align="start" spacing={4}>
          <Text fontSize={{ base: "md", md: "lg" }}>
            A highly skilled and motivated Full-Stack Developer with{" "}
            {currentYear - startYear} years of hands-on experience in developing
            robust, scalable, and user-friendly web applications. Proficient in
            both front-end and back-end technologies, with expertise in React,
            Node.js, and MySQL. Passionate about creating efficient solutions
            and delivering exceptional user experiences.
          </Text>
        </VStack>

        <Box display={{ base: "none", md: "flex" }} alignSelf="stretch">
          <Divider orientation="vertical" borderWidth="1px" />
        </Box>

        <Box display={{ base: "flex", md: "none" }} alignSelf="stretch">
          <Divider orientation="horizontal" borderWidth="1px" />
        </Box>

        <VStack w="full" align="start" spacing={3}>
          <Flex gap={2}>
            <Text fontWeight="bold">Address:</Text>
            <Text>Amman, Jordan</Text>
          </Flex>
          <Flex gap={2}>
            <Text fontWeight="bold">Phone:</Text>
            <Text>+962 792935420</Text>
          </Flex>
          <Flex gap={2}>
            <Text fontWeight="bold">Email:</Text>
            <Text>khaledbaniamer23@gmail.com</Text>
          </Flex>
        </VStack>
      </Stack>
    </Box>
  );
};

export default AboutScreen;
