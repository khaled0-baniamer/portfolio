import { ToggleMode } from "@/components";
import { Box, Flex, IconButton, Text, Link, Menu, MenuButton, MenuList, MenuItem, Image } from "@chakra-ui/react";
import { MenuIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Props = {};

const Header: React.FC<Props> = (props) => {
  const {} = props;
  const navigate = useNavigate();
  const handleClick = (path: string) => navigate(path);
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
        <Image src="/images/khaledLogo.png" height={"50px"} width={"50px"} objectFit={"cover"} />
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
            cursor={"pointer"}
            onClick={() => handleClick(link.path)}
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
                as={Link}
                href={link.path}
                // onClick={() => handleClick(link.path)}
                key={link.id}
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
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About", path: "#about" },
  { id: 3, title: "Services", path: "#services" },
  { id: 4, title: "Projects", path: "#projects" },
  { id: 5, title: "Contact", path: "$contact" },
];
