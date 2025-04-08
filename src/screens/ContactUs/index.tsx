import React from "react";
import { Heading, Flex, Grid, GridItem } from "@chakra-ui/react";
import ContactBox from "./ContactBox";
import { PhoneCallIcon, MailIcon } from "lucide-react";
import ContactForm from "./ContactForm";

type Props = {};

const ContactUsScreen: React.FC<Props> = () => {
  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={10}>
      <GridItem colSpan={12}>
        <Heading
          my={10}
          w={"full"}
          textAlign={"center"}
          textDecoration={"underline"}
        >
          Contact
        </Heading>
      </GridItem>
      <GridItem colSpan={[12,12,7]}>
        <ContactForm />
      </GridItem>
      <GridItem colSpan={[12,12,5]}>
        <Flex
          direction={"column"}
          height={"full"}
          justifyContent={"space-between"}
          gap={10}
        >
          <ContactBox label="Phone" content="0792935420" icon={PhoneCallIcon} />
          <ContactBox
            label="Email"
            content="khaledbaniamer23@gmail.com"
            icon={MailIcon}
          />
        </Flex>
      </GridItem>

    </Grid>
  );
};

export default ContactUsScreen;
