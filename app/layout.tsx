import type { Metadata } from "next";
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
    default: "Nicharee — ePortfolio",
    template: "%s | Nicharee",
  },

  openGraph: {
    title: "Nicharee — ePortfolio",
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
