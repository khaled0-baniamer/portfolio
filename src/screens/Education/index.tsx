import { education } from "@/utils";
import { Box, Heading, VStack, Text, Flex, Tag } from "@chakra-ui/react";

const Education: React.FC = () => {
  return (
    <Box>
      <Heading my={10} w="full" textAlign="center" textDecoration="underline">
        Education
      </Heading>

      <Box mb={16} className="animate-on-scroll">
        <VStack spacing={8} align="stretch">
          {education.map((edu, index) => (
            <Box
              key={index}
              p={6}
              borderRadius="lg"
              shadow="md"
              borderLeft="4px solid"
              borderColor="blue.400"
            >
              <Flex justifyContent="space-between" mb={2} flexWrap="wrap">
                <Heading as="h4" fontSize="xl" fontWeight="bold">
                  {edu.degree}
                </Heading>
                <Tag
                  p={2}
                  my={{base:4,md:0}}
                  borderRadius="full"
                >
                  {edu.year}
                </Tag>
              </Flex>
              <Text fontWeight="medium" color="gray.600" mb={3}>
                {edu.institution}
              </Text>
            </Box>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default Education;
