"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/styles/theme";
import Head from "next/head";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <CacheProvider>
        <ChakraProvider resetCSS theme={theme}>
          {children}
        </ChakraProvider>
      </CacheProvider>
    </>
  );
}
