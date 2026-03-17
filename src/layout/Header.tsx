import { ToggleMode } from "@/components";
import {
  Box,
  Flex,
  IconButton,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
} from "@chakra-ui/react";
import { MenuIcon } from "lucide-react";

type Props = {};

const Header: React.FC<Props> = (props) => {
  const {} = props;
  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Flex
      as={"nav"}
      borderWidth={"1px"}
      p={4}
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"100%"}
      position={"fixed"}
      bg={"Window"}
      zIndex={1000}
    >
      <Box>
        <Image
          src="/images/0.png"
          height={"50px"}
          width={"50px"}
          objectFit={"cover"}
        />
      </Box>
      <Flex
        gap={[4, 6, 12]}
        flexWrap={"wrap"}
        alignItems={"center"}
        display={["none", "none", "flex"]}
      >
        {links.map((link) => (
          <Text
            key={link.id}
            cursor="pointer"
            onClick={() => handleScroll(link.path)}
          >
            {link.title}
          </Text>
        ))}
      </Flex>
      <Flex gap={4}>
        <ToggleMode />
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<MenuIcon />}
            display={{ md: "none" }}
            justifyItems={"center"}
          />
          <MenuList>
            {links.map((link) => (
              <MenuItem
                key={link.id}
                onClick={() => handleScroll(link.path)}
                _hover={{ bg: "gray" }}
              >
                {link.title}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Header;

const links = [
  { id: 1, title: "Home", path: "#home" },
  { id: 2, title: "About", path: "#about" },
  { id: 3, title: "Experience", path: "#experience" },
  { id: 4, title: "Projects", path: "#projects" },
  { id: 5, title: "Contact", path: "#contact" },
];
