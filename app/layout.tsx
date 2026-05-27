import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Atria | Supply Chain Training and Consulting",
  description:
    "Practical consulting, mentoring and education to improve procurement, supply chain performance and sustainable operations.",
  icons: {
    icon: [{ url: "/images/favicon.png", sizes: "512x512", type: "image/png" }],
    shortcut: [{ url: "/images/favicon.png", sizes: "512x512", type: "image/png" }],
    apple: [{ url: "/images/favicon.png", sizes: "512x512", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
