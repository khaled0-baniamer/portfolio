import { TechTag } from "@/components";
import { projects } from "@/utils";
import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Button,
  HStack,
  VStack,
  Flex,
  Spacer,
} from "@chakra-ui/react";

const ProjectsScreen: React.FC = () => {
  return (
    <Box py={10}>
      <Heading my={10} w="full" textAlign="center" textDecoration="underline">
        Projects
      </Heading>
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>
        {projects.map((project, idx) => (
          <Flex
            key={idx}
            direction="column"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            _hover={{ transform: "scale(1.02)", transition: "0.3s" }}
            h="100%"
            minH={{ base: "480px", md: "380px" }}
          >
            <Image
              src={project.image}
              alt={project.title}
              objectFit="cover"
              w="full"
              h="180px"
            />
            <Flex direction="column" p={5} flex="1">
              <VStack align="start" spacing={3} flex="1">
                <Heading size="md">{project.title}</Heading>
                <Text fontSize="sm">{project.description}</Text>

                <TechTag data={project.technologies}  />

                <Spacer />
              </VStack>

              <HStack spacing={4} pt={4}>
                <Button
                  as="a"
                  href={project.codeLink}
                  target="_blank"
                  variant={"black"}
                >
                  Show Code
                </Button>
                <Button
                  as="a"
                  href={project.liveDemo}
                  target="_blank"
                  variant={"primary"}
                >
                  Live Demo
                </Button>
              </HStack>
            </Flex>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProjectsScreen;
