import { Box, Divider } from "@chakra-ui/react";
import {
  AboutScreen,
  ContactUsScreen,
  Education,
  Experince,
  HomeScreen,
  ProjectsScreen,
  Skills,
} from "./screens";

export default function App() {
  return (
    <Box>
      <HomeScreen />
      <Divider />
      <AboutScreen />
      <Divider />
      <Experince />
      <Divider />
      <Education />
      <Divider />
      <Skills />
      <Divider />
      <Divider />
      <ProjectsScreen />
      <Divider />
      <ContactUsScreen />
    </Box>
  );
}
