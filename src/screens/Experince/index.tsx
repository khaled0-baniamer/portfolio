import { ExperinceDescription } from "@/components";
import { experiences } from "@/utils";
import { Box, Heading, Text, VStack, HStack, Flex, Badge, Tag } from "@chakra-ui/react";

const Experience: React.FC = () => {
  return (
    <Box>
      <Heading my={10} w="full" textAlign="center" textDecoration="underline">
        Experience
      </Heading>

      <Box>
        <VStack spacing={8} align="stretch">
          {experiences.map((exp, index) => (
            <Box
              key={index}
              p={6}
              borderRadius="lg"
              shadow="md"
              borderLeft="4px solid"
              borderColor="teal.400"
            >
              <Flex justifyContent="space-between" mb={2} flexWrap="wrap">
                <Heading as="h4" fontSize="xl" fontWeight="bold">
                  {exp.position}
                </Heading>
                <Tag px={2} borderRadius="full">
                  {exp.year}
                </Tag>
              </Flex>
              <Text fontWeight="medium" color="gray.600" >
                {exp.company}
              </Text>
              <ExperinceDescription  list={exp.description} my={3}/>
              <HStack spacing={2} flexWrap="wrap">
                {exp.technologies.map((tech, idx) => (
                  <Badge key={idx} colorScheme="purple" variant="subtle" mb={2}>
                    {tech}
                  </Badge>
                ))}
              </HStack>
            </Box>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default Experience;
