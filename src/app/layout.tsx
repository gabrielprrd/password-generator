"use client";

import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Password Generator</title>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
