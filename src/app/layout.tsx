import type { Metadata } from "next";
import "./globals.css";
import 'remixicon/fonts/remixicon.css'

export const metadata: Metadata = {
  title: "Uma Shankar",
  description: "developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
