import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box >
      <Header />
      <Box p={[4,8,16]}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
