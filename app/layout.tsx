import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rioviq.com"),
  title: "DeployNet — Network Automation, Reconnected",
  description:
    "Discover devices, understand actual and logical topology, and generate network configurations in one focused desktop workflow.",
  keywords: [
    "network automation",
    "network discovery",
    "network topology",
    "configuration generation",
    "DeployNet",
  ],
  openGraph: {
    title: "DeployNet — Know your network. Then shape it.",
    description:
      "Discovery, topology, and configuration in one clear desktop workflow.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1732,
        height: 909,
        alt: "DeployNet — Know your network. Then shape it.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DeployNet — Know your network. Then shape it.",
    description:
      "Discovery, topology, and configuration in one clear desktop workflow.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
