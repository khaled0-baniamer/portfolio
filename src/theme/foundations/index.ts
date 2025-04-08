import { breakpoints } from "./breakpoints";
import colors from "./colors";

export const foundations = {
  colors,
  breakpoints,
  semanticTokens: {
    colors: {
      "chakra-body-text": "#2D3340",
    },
    sizes: {
      desktop: "1444px",
      mobile: "365px",
    },
    zIndices: {
      hide: -1,
      auto: "auto",
      base: 0,
      docked: 10,
      dropdown: 1000,
      sticky: 1100,
      banner: 1200,
      overlay: 1300,
      modal: 1400,
      popover: 1500,
      skipLink: 1600,
      toast: 1700,
      tooltip: 1800,
    },
  },
};
