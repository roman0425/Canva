import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Canva",
  description: "Cloned Canva",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(inter.className, "h-full")}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
