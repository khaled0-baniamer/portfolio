import { VStack, Text, Heading, Box, Flex, Divider, Stack } from "@chakra-ui/react";

type Props = {};

const AboutScreen: React.FC<Props> = ({}) => {
  return (
    <Box>
      <Heading
        my={10}
        w={"full"}
        textAlign={"center"}
        textDecoration={"underline"}
      >
        About Me
      </Heading>
      <Flex justifyContent={"space-between"}>
        <VStack w={"full"}>
          <Text fontSize={"18px"}>
            A highly skilled and motivated Full-Stack Developer with 3 years of
            hands-on experience in developing robust, scalable, and
            user-friendly web applications. Proficient in both front-end and
            back-end technologies, with expertise in React, Node.js, and MySQL.
            Passionate about creating efficient solutions and delivering
            exceptional user experiences.
          </Text>
        </VStack>
        <Stack direction="row" h="100px" p={4}>
          <Divider orientation="vertical" borderWidth={"1px"} colorScheme="blackAlpha" />
        </Stack>
        <VStack w={"full"} align={"start"}>
          <Flex gap={2}>
            <Text>Address : </Text>
            <Text>Jordan</Text>
          </Flex>
          <Flex gap={2}>
            <Text>Location : </Text>
            <Text>Jordan</Text>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
};

export default AboutScreen;
