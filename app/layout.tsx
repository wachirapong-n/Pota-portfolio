import type { Metadata } from "next";
// @ts-expect-error CSS side-effect imports are handled by Next.js.
import "./globals.css";
import { SiteLayout } from "@/components/layout/site-layout";
import { Noto_Sans_Thai } from "next/font/google";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Your Name — Developer Portfolio",
    template: "%s | Your Name",
  },
  description:
    "Portfolio of a computer science student and frontend developer.",
  openGraph: {
    title: "Your Name — Developer Portfolio",
    description: "Selected work, background, and contact information.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={notoSansThai.className}>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
