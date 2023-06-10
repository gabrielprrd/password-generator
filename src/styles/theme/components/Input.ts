import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const variantFilled = definePartsStyle((props) => {
  return {
    field: {
      bgColor: "darkGrey",
      p: 8,
      border: "none",
      borderRadius: "none",
      color: "almostWhite",
      fontWeight: "bold",
      alignItems: "center",
      _hover: {
        bgColor: "darkGrey",
      },
      _focus: {
        bgColor: "darkGrey",
      },
    },
  };
});

const Input = defineMultiStyleConfig({
  variants: {
    filled: variantFilled,
  },
  defaultProps: {
    variant: "filled",
  },
});

export default Input;
