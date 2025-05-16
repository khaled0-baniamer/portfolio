import { DownloadCVButton } from "@/components";
import { Button, Flex, Text, VStack } from "@chakra-ui/react";

type Props = {};
const HomScreen: React.FC<Props> = ({}) => {
  return (
    <Flex
      flexDirection={["column-reverse", "column-reverse", "row"]}
      minH={"400px"}
    >
      <VStack
        alignItems={"center"}
        justifyContent={"center"}
        w={"100%"}
        ml={[0, 0, 0, 200]}
      >
        <Text
          fontSize={"20px"}
          fontWeight={"bold"}
          align={"start"}
          w={"full"}
          mt={[10, 10, 0]}
        >
          hello,I'm
        </Text>
        <Text fontSize={"40px"} fontWeight={"bold"} align={"start"} w={"full"}>
          Khaled Bani Amer
        </Text>
        <Text fontSize={"20px"} align={"start"} w={"full"}>
          Full Stack Developer
        </Text>
        <Text fontSize={"14px"} align={"start"} w={"full"}>
          Node , React , Next , Express , nest , Typescript , MySql and MongoDB
        </Text>

        <Flex w={"full"} gap={2} mt={8}>
          <Button variant={"primary"}>HERE ME</Button>
          <DownloadCVButton />
        </Flex>
      </VStack>
    </Flex>
  );
};

export default HomScreen;
