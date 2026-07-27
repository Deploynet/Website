import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host?.startsWith("localhost") ? "http" : "https");

  let metadataBase = new URL("http://localhost:3000");
  if (host) {
    try {
      metadataBase = new URL(`${protocol}://${host}`);
    } catch {
      // Keep the safe local fallback when a proxy sends an invalid host.
    }
  }

  return {
    metadataBase,
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
}

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
