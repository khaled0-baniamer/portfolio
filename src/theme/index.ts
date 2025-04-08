import { extendTheme, ThemeOverride } from "@chakra-ui/react";
import { styles } from "./styles";
import { components } from "./components";
import { foundations } from "./foundations";

// @ts-ignore
const extendedTheme: ThemeOverride = {
  styles,
  components,
  ...foundations,
 
};

export const theme = extendTheme(extendedTheme);
