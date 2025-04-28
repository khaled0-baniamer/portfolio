import React from "react";
import { Heading, Flex, VStack, SimpleGrid, Box } from "@chakra-ui/react";
import ContactBox from "./ContactBox";
import { PhoneCallIcon, MailIcon, GitGraph, CodeIcon } from "lucide-react";
import ContactForm from "./ContactForm";

type Props = {};
const emailSub = "Contact from Khaled Baniamer Portfolio";
const emailTo = "khaledbaniamer23@gmail.com"

const ContactUsScreen: React.FC<Props> = () => {
  return (
    <VStack spacing={[4, 6, 10]} align="stretch">
      <Heading my={10} w="full" textAlign="center" textDecoration="underline">
        Contact
      </Heading>

      <Flex
        direction={{ base: "column", md: "row" }}
        gap={10}
        w="full"
        justify="space-between"
      >
        <Box flex={1}>
          <ContactForm />
        </Box>

        <Box flex={1} borderRadius="md">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={[4, 4, 6]}>
            <ContactBox
              label="Phone"
              content="0792935420"
              icon={PhoneCallIcon}
              onClick={() => window.open("tel:0792935420", "_blank")}
            />
            <ContactBox
              label="Email"
              content="khaledbaniamer23@gmail.com"
              icon={MailIcon}
              onClick={() => window.open("mailto:khaledbaniamer23@gmail.com?subject=Contact from Khaled Baniamer Portfolio" , "_blank")}
            />
            <ContactBox
              label="GitHub"
              icon={GitGraph}
              onClick={() => window.open("https://github.com/khaled0-baniamer?tab=repositories", "_blank")}
            />
            <ContactBox
              label="LinkedIn"
              icon={CodeIcon}
              onClick={() => window.open("https://www.linkedin.com/in/khaled-baniamer-0b1a4a1b5/", "_blank")}
            />
          </SimpleGrid>
        </Box>
      </Flex>
    </VStack>
  );
};

export default ContactUsScreen;
