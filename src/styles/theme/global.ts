import { StyleFunctionProps } from "@chakra-ui/react";

const global = (props: StyleFunctionProps) => ({
  body: {
    bg: props.colorMode === "light" ? "#FFFFFF" : "veryDarkGrey",
  },
});

export default global;
