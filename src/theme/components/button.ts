import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const primary = defineStyle({
  border: "none",
  borderRadius: "20px",
  fontWeight: "bold",
  bg: "#ff7a57",
  color: "#FFFFFF",
  px: "25px",
  py: "12px",
  fontsize: "14px",
});

const black = defineStyle({
  border: "none",
  borderRadius: "20px",
  fontWeight: "bold",
  bg: "#000000",
  _dark: {
    bg: "#FFFFFF",
    color: "#000000",
  },
  color: "#FFFFFF",
  px: "25px",
  py: "12px",
  fontsize: "14px",
});

export const buttonTheme = defineStyleConfig({
  variants: { primary, black },
});

// import { defineStyleConfig } from '@chakra-ui/react'

// export default defineStyleConfig({
//   // Styles for the base style
//   baseStyle: {},
//   // Styles for the size variations
//   sizes: {},
//   // Styles for the visual style variations
//   variants: {},
//   // The default `size` or `variant` values
//   defaultProps: {},
// })
