import { sliderAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);
const baseStyle = definePartsStyle({
  thumb: {
    height: 6,
    width: 6,
    _hover: {
      bgColor: "veryDarkGrey",
      borderWidth: 2,
      borderColor: "neonGreen",
    },
    _focus: {
      bgColor: "veryDarkGrey",
      borderWidth: 2,
      borderColor: "neonGreen",
    },
  },
  filledTrack: {
    bg: "neonGreen",
  },
  track: {
    borderRadius: "none",
    bg: "veryDarkGrey",
    height: 2,
  },
});

const Slider = defineMultiStyleConfig({ baseStyle });

export default Slider;
