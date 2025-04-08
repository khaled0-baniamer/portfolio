import React from "react";
import { 
  Box, 
  Flex, 
  IconButton, 
  Link, 
  useDisclosure, 
  VStack, 
  HStack, 
  CloseButton 
} from "@chakra-ui/react";
import { MenuIcon } from "lucide-react";

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="teal.500" px={4} color="white">
      <Flex h="16" alignItems="center" justifyContent="space-between">
        <Box fontSize="xl" fontWeight="bold">MyApp</Box>
        <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
          <Link href="#home" _hover={{ textDecoration: "none", color: "teal.200" }}>Home</Link>
          <Link href="#about" _hover={{ textDecoration: "none", color: "teal.200" }}>About</Link>
          <Link href="#services" _hover={{ textDecoration: "none", color: "teal.200" }}>Services</Link>
        </HStack>
        <IconButton 
          size="md" 
          icon={<MenuIcon />} 
          aria-label="Open Menu" 
          display={{ md: "none" }} 
          onClick={onOpen}
        />
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <VStack as="nav" spacing={4}>
            <CloseButton alignSelf="end" onClick={onClose} />
            <Link href="#home" _hover={{ textDecoration: "none", color: "teal.200" }}>Home</Link>
            <Link href="#about" _hover={{ textDecoration: "none", color: "teal.200" }}>About</Link>
            <Link href="#services" _hover={{ textDecoration: "none", color: "teal.200" }}>Services</Link>
          </VStack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
