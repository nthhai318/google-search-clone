import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <div className="">
        <p>
          Get started by editing&nbsp;
          <code className="">src/app/page.tsx</code>
        </p>
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Google Clone with Nextjs13",
  description: "A clone website of google using Nextjs13",
};
