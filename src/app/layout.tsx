import type { Metadata } from "next";
import { Pixelify_Sans, Space_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const pixel = Pixelify_Sans({ subsets: ["latin"], variable: "--font-pixel" });
const mono2 = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-mono2" });
const body = Space_Grotesk({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "GDG RBU",
  description: "GDG RBU Recruitment Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${pixel.variable} ${mono2.variable} ${body.variable} font-body antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
