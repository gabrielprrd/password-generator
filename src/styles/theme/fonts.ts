import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], display: "swap" });

const fonts = {
  heading: jetbrainsMono.style.fontFamily,
  body: jetbrainsMono.style.fontFamily,
};

export default fonts;
