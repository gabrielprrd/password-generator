import { extendTheme } from "@chakra-ui/react";
import components from "./components";
import global from "./global";
import config from "./config";
import fonts from "./fonts";
import colors from "./colors";

const theme = extendTheme({
  config,
  global,
  fonts,
  components,
  colors,
});

export default theme;
