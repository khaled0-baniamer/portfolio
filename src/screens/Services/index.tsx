import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

type Props = {};

const ServicesScreens: React.FC<Props> = (props) => {
  const {} = props;

  return (
    <Box>
      <Heading
        my={10}
        w={"full"}
        textAlign={"center"}
        textDecoration={"underline"}
      >
        Services
      </Heading>
      <SimpleGrid columns={[1, 1, 2, 4]} spacing={10} my={10}>
        <Box bg="tomato" height="280px"></Box>
        <Box bg="tomato" height="280px"></Box>
        <Box bg="tomato" height="280px"></Box>
        <Box bg="tomato" height="280px"></Box>
      </SimpleGrid>
    </Box>
  );
};

export default ServicesScreens;
