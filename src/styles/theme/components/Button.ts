import { ComponentStyleConfig } from "@chakra-ui/react";

const Button: ComponentStyleConfig = {
  variants: {
    solid: {
      fontWeight: "bold",
      textTransform: "uppercase",
      bgColor: "neonGreen",
      color: "darkGrey",
      borderRadius: "none",
      borderColor: "neonGreen",
      borderWidth: 2,
      py: 8,
      _hover: {
        bgColor: "darkGrey",
        color: "neonGreen",
      },
    },
  },
};

export default Button;
