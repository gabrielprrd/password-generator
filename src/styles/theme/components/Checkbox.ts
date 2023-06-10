import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
  label: {
    color: "almostWhite",
    fontWeight: "bold",
  },
  control: {
    bgColor: "veryDarkGrey",
    color: "veryDarkGrey",
    borderRadius: 0,
    borderColor: "almostWhite",
    _hover: {
      borderColor: "neonGreen",
    },
    _checked: {
      bgColor: "neonGreen",
      border: "none",
    },
  },
  icon: {
    color: "veryDarkGrey",
  },
});

const Checkbox = defineMultiStyleConfig({ baseStyle });

export default Checkbox;
