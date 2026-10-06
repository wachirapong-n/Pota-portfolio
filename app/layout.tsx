import type { Metadata } from "next";
import "./globals.css";
import { SiteLayout } from "@/components/layout/site-layout";

export const metadata: Metadata = { title: { default: "Your Name — Developer Portfolio", template: "%s | Your Name" }, description: "Portfolio of a computer science student and frontend developer.", openGraph: { title: "Your Name — Developer Portfolio", description: "Selected work, background, and contact information.", type: "website" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><SiteLayout>{children}</SiteLayout></body></html>; }
