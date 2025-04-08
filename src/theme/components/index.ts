import { ThemeOverride } from "@chakra-ui/react";
import { buttonTheme } from "./button";

export const components: ThemeOverride["components"] = {
  Button: buttonTheme,
};
