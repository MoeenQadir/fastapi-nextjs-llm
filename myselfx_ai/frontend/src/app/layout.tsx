import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "MyselfX AI — AI Assistant by Moeen Ul Qadir",
    template: "%s | MyselfX AI",
  },
  description:
    "MyselfX AI is a production-ready AI assistant platform with real-time streaming chat, secure authentication, and conversation persistence — built by Moeen Ul Qadir.",
  keywords: [
    "MyselfX AI",
    "AI assistant",
    "AI chat",
    "Moeen Ul Qadir",
    "FastAPI",
    "Next.js",
    "full-stack",
  ],
  authors: [{ name: "Moeen Ul Qadir", url: "https://www.moeenqadir.com" }],
  creator: "Moeen Ul Qadir",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://myselfx-ai.vercel.app"
  ),
  openGraph: {
    title: "MyselfX AI — AI Assistant by Moeen Ul Qadir",
    description:
      "Real-time AI chat assistant with streaming responses, secure JWT authentication, and conversation persistence.",
    siteName: "MyselfX AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyselfX AI",
    description:
      "Real-time AI chat assistant with streaming responses, secure JWT authentication, and conversation persistence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
