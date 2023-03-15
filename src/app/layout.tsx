import Footer from "@/components/Footer";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Google Clone with Nextjs13",
  description: "A clone website of google using Nextjs13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col">
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
