import { Box, Text, Icon, VStack } from "@chakra-ui/react";

type Props = {
  icon: any;
  content: string;
  label: string;
};

const ContactBox: React.FC<Props> = ({ content, icon, label }) => {
  return (
    <Box
      w="full"
      p={6}
      borderWidth={1}
      borderRadius="md"
      boxShadow="md"
      textAlign="center"
      _hover={{ boxShadow: "lg" }}
    >
      <VStack spacing={4}>
        <Icon as={icon} boxSize={6} color="orange" />
        <Text fontSize="lg" fontWeight="bold">
          {label}
        </Text>
        <Text fontSize="md" color="gray.600">
          {content}
        </Text>
      </VStack>
    </Box>
  );
};

export default ContactBox;
