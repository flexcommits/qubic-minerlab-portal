// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

export function Providers({ children }) {
  const theme = extendTheme({});
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
