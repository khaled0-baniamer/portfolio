import { Box, Text, Icon, VStack, BoxProps } from "@chakra-ui/react";

type Props = {
  icon: any;
  content?: string;
  label: string;
} & BoxProps;

const ContactBox: React.FC<Props> = ({ content, icon, label, ...props }) => {
  return (
    <Box
      w="100%"
      p={6}
      borderWidth={1}
      borderRadius="md"
      boxShadow="md"
      textAlign="center"
      _hover={{ boxShadow: "lg" }}
      cursor={"pointer"}
      {...props}
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
