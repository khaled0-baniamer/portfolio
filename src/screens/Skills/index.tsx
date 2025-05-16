import { TechTag } from "@/components";
import { professionalSkills, technicalSkills } from "@/utils";
import { Box, Heading, HStack, Tag, SimpleGrid } from "@chakra-ui/react";

const SkillsSection: React.FC = () => {
  return (
    <Box py={10}>
      <Heading my={10} w="full" textAlign="center" textDecoration="underline">
        Skills
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} spacing={8}>
        <Box borderRadius="lg" boxShadow="md" borderWidth="1px" p={4}>
          <Heading size="lg" mb={4} textDecoration="underline">
            Technical Skills
          </Heading>
          <TechTag data={technicalSkills} tagProps={{size:"lg" }}  />
        </Box>
        <Box borderRadius="lg" boxShadow="md" borderWidth="1px" p={4}>
          <Heading size="lg" mb={4} textDecoration="underline">
            Professional Skills
          </Heading>
          <HStack wrap="wrap" spacing={4}>
            {professionalSkills.map((skill, idx) => (
              <Tag key={idx} size="lg" variant="outline" colorScheme="teal">
                {skill}
              </Tag>
            ))}
          </HStack>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default SkillsSection;
