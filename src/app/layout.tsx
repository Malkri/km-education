import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata: Metadata = {
  title: "KM Education — Live online classes for Years 7–12",
  description:
    "Live online tutoring for Australian high school students with a clear study plan for confident progress. Book a free trial.",
  openGraph: {
    title: "KM Education — Live online classes for Years 7–12",
    description:
      "Live online tutoring for Australian high school students with a clear study plan for confident progress.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
