import { Box, Divider } from "@chakra-ui/react";
import {
  AboutScreen,
  ContactUsScreen,
  HomeScreen,
  ProjectsScreen,
  ServicesScreen,
} from "./screens";

export default function App() {
  return (
    <Box>
      <HomeScreen />
      <Divider />
      <AboutScreen />
      <Divider />
      <ProjectsScreen />
      <Divider />
      <ServicesScreen />
      <Divider />
      <ContactUsScreen />
    </Box>
  );
}
